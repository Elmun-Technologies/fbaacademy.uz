import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { courses, categories } from "@/lib/data";
import { Search, Clock, Filter, Star } from "lucide-react";

export default function Catalog() {
  useSEO({
    title: "Barcha kurslar - FBA Academy",
    description: "FBA Academy barcha kurslari. ACCA, DipIFR, Financial Modeling, 1C va Huquqshunoslik yo'nalishlarida professional kurslar.",
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
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 sm:py-14 dark:from-slate-900/50 dark:to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl" data-testid="text-catalog-title">Barcha kurslar</h1>
          <p className="mb-8 text-muted-foreground">ACCA, DipIFR, Financial Modeling, 1C va Huquqshunoslik bo'yicha professional kurslar</p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Kurs qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full border-2 pl-9 shadow-sm"
                data-testid="input-search-courses"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="rounded-full border-2 font-semibold"
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
                  className="rounded-full border-2 font-semibold"
                  data-testid={`button-filter-${cat.slug}`}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full" data-testid={`card-catalog-course-${course.id}`}>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge className="rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-semibold">{course.category}</Badge>
                      <Badge variant="outline" className="rounded-full text-xs font-semibold border-2">{course.level}</Badge>
                      {course.discount && (
                        <Badge className="rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 text-xs font-bold">-{course.discount}</Badge>
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-bold leading-snug text-foreground">{course.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-500" /> {course.rating}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 flex-wrap border-t pt-3">
                      {course.oldPrice && (
                        <span className="text-xs text-muted-foreground line-through">{course.oldPrice}</span>
                      )}
                      <span className="text-lg font-extrabold text-foreground">{course.price} <span className="text-xs font-normal text-muted-foreground">UZS</span></span>
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
