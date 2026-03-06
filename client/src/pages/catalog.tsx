import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { courses, categories } from "@/lib/data";
import { Search, Clock, Filter, Users } from "lucide-react";

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
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-catalog-title">Barcha kurslar</h1>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Kurs qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full pl-9"
                data-testid="input-search-courses"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="rounded-full"
                data-testid="button-filter-all"
              >
                Barchasi
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.slug}
                  variant={selectedCategory === cat.slug ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className="rounded-full"
                  data-testid={`button-filter-${cat.slug}`}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="group cursor-pointer border-0 bg-slate-50 dark:bg-card transition-all duration-200 hover-elevate h-full overflow-visible" data-testid={`card-catalog-course-${course.id}`}>
                  <div className="p-4 pb-3">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="rounded-full text-xs">{course.category}</Badge>
                      <Badge variant="outline" className="rounded-full text-xs">{course.level}</Badge>
                      {course.oldPrice && (
                        <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">-40%</span>
                      )}
                    </div>
                    <div className="mb-3 overflow-hidden rounded-xl">
                      <img src={course.image} alt={course.title} className="h-36 w-full object-cover" />
                    </div>
                    <h3 className="mb-2 font-semibold leading-snug text-foreground">{course.title}</h3>
                    <p className="mb-3 text-xs text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap pt-2 border-t border-border/30">
                      <span className="text-xs text-muted-foreground">{course.duration}</span>
                      <span className="text-sm font-bold text-foreground">{course.price} <span className="text-xs font-normal text-muted-foreground">UZS</span></span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="py-20 text-center" data-testid="text-no-courses">
              <Filter className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
              <h3 className="text-lg font-medium">Kurslar topilmadi</h3>
              <p className="mt-2 text-sm text-muted-foreground">Boshqa filtr yoki qidiruv so'zini sinab ko'ring</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
