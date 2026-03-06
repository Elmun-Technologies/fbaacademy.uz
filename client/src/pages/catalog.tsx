import { useState, useMemo } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Link, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/layout";
import { courses, categories } from "@/lib/data";
import { Search, Clock, ArrowRight, Filter } from "lucide-react";

export default function Catalog() {
  useSEO({
      title: "Barcha kurslar - FBA Academy",
      description: "FBA Academy barcha kurslari. Dasturlash, Marketing, Dizayn va Biznes yo'nalishlarida professional kurslar.",
    });

  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.categorySlug === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-purple-50/50 to-background dark:from-purple-950/10 dark:to-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" data-testid="text-catalog-title">Barcha kurslar</h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">O'zingizga mos kursni toping va yangi kasbingizni boshlang</p>
          </div>

          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Kurs qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-testid="input-search-courses"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                data-testid="button-filter-all"
              >
                Barchasi
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.slug}
                  variant={selectedCategory === cat.slug ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.slug)}
                  data-testid={`button-filter-${cat.slug}`}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="group border-card-border bg-card transition-all duration-300 hover-elevate cursor-pointer h-full" data-testid={`card-catalog-course-${course.id}`}>
                  <div className={`h-2 rounded-t-md bg-gradient-to-r ${course.gradient}`} />
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary">{course.category}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold leading-snug">{course.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {course.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-2 flex-wrap border-t border-border/50 pt-3">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" /> {course.duration}
                      </span>
                      <div className="flex items-center gap-2">
                        {course.oldPrice && (
                          <span className="text-xs text-muted-foreground line-through">{course.oldPrice}</span>
                        )}
                        <span className="font-semibold">{course.price} UZS</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="py-16 text-center" data-testid="text-no-courses">
              <Filter className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
              <h3 className="text-lg font-medium">Kurslar topilmadi</h3>
              <p className="mt-2 text-sm text-muted-foreground">Boshqa filtr yoki qidiruv so'zini sinab ko'ring</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
