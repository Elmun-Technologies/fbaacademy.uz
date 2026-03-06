import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/layout";
import { courses, categories } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, ArrowRight, Filter, Users } from "lucide-react";

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
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-indigo-50/50 dark:from-purple-950/10 dark:via-background dark:to-indigo-950/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" data-testid="text-catalog-title">Barcha kurslar</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">O'zingizga mos kursni toping va yangi kasbingizni boshlang</p>
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="group border-card-border bg-card transition-all duration-300 hover-elevate cursor-pointer h-full overflow-visible" data-testid={`card-catalog-course-${course.id}`}>
                  <div className="relative overflow-hidden rounded-t-md">
                    <img src={course.image} alt={course.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800 dark:bg-slate-900/90 dark:text-slate-200 backdrop-blur-sm">{course.category}</Badge>
                      <Badge variant="secondary" className="bg-white/90 text-slate-800 dark:bg-slate-900/90 dark:text-slate-200 backdrop-blur-sm">{course.level}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-semibold leading-snug">{course.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {course.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="rounded-md bg-accent px-2 py-0.5 text-xs text-muted-foreground">{skill}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-2 flex-wrap border-t border-border/50 pt-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {course.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {course.oldPrice && (
                          <span className="text-xs text-muted-foreground line-through">{course.oldPrice}</span>
                        )}
                        <span className="font-bold">{course.price} <span className="text-xs font-normal text-muted-foreground">UZS</span></span>
                      </div>
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
