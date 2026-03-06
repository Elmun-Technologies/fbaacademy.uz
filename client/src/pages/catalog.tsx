import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/layout";
import { courses } from "@/lib/data";
import { Search, Clock, Filter, Star, ArrowRight } from "lucide-react";

const filterCategories = [
  { label: "Barchasi", slug: "all" },
  { label: "ACCA", slug: "acca" },
  { label: "DipIFR", slug: "finance" },
  { label: "Huquqshunoslik", slug: "law" },
  { label: "1C Buxgalteriya", slug: "accounting" },
];

export default function Catalog() {
  useSEO({
    title: "Barcha kurslar — ACCA, DipIFR, Financial Modeling, 1C | FBA Academy",
    description: "FBA Academy barcha kurslari: ACCA, DipIFR, Financial Modeling, Huquqshunoslik va 1C Buxgalteriya. Professional kurslar, xalqaro sertifikatlar, Big Four darajasida bilim.",
    keywords: "ACCA kursi, DipIFR kursi, Financial Modeling, Huquqshunoslik kursi, 1C Buxgalteriya, moliya kurslari O'zbekiston",
  });

  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialCategory = params.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.categorySlug === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-14 sm:py-20" data-testid="section-catalog-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-testid="text-catalog-title">Barcha kurslar</h1>
          <p className="mt-3 text-slate-300">ACCA, DipIFR, Financial Modeling, Huquqshunoslik va 1C: Buxgalteriya bo'yicha professional kurslar</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Kurs qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full border-white/20 bg-white/10 pl-9 text-white placeholder:text-slate-400 focus:border-purple-400 focus:bg-white/15"
                data-testid="input-search-courses"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => (
                <Button
                  key={cat.slug}
                  variant={selectedCategory === cat.slug ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`rounded-full border-2 font-semibold ${
                    selectedCategory === cat.slug
                      ? "bg-white text-slate-900 border-white hover:bg-slate-100"
                      : "border-white/30 text-white hover:bg-white/10"
                  }`}
                  data-testid={`button-filter-${cat.slug}`}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="py-12 sm:py-16" data-testid="section-catalog-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCourses.map((course) => (
                <Link key={course.id} href={`/course/${course.id}`}>
                  <Card className="group cursor-pointer border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full overflow-hidden" data-testid={`card-catalog-course-${course.id}`}>
                    <div className="h-44 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <Badge className="rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">{course.category}</Badge>
                        <Badge variant="outline" className="rounded-full text-xs font-semibold border-2">{course.level}</Badge>
                        {course.discount && (
                          <Badge className="rounded-full bg-rose-100 text-rose-700 text-xs font-bold">-{course.discount}</Badge>
                        )}
                      </div>
                      <h3 className="mb-2 text-base font-bold leading-snug text-foreground">{course.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{course.shortDescription}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-500" /> {course.rating}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 flex-wrap border-t pt-3">
                        {course.oldPrice && (
                          <span className="text-xs text-muted-foreground line-through">{course.oldPrice}</span>
                        )}
                        <span className="text-base font-extrabold text-foreground">{course.price} <span className="text-xs font-normal text-muted-foreground">UZS</span></span>
                        <ArrowRight className="h-4 w-4 text-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
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
