import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/layout";
import Breadcrumb from "@/components/breadcrumb";
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
    breadcrumb: [{ name: "Kurslar", url: "https://fbaacademy.uz/courses" }],
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
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Barcha kurslar" }]} light />
          </div>
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
      <section className="bg-[#0d0d0d] py-14 sm:py-20" data-testid="section-catalog-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCourses.map((course) => (
                <a key={course.id} href={`/course/${course.id}`}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-900 transition-transform duration-300 hover:-translate-y-2" data-testid={`card-catalog-course-${course.id}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">{course.category}</span>
                      {course.discount && (
                        <span className="absolute right-3 top-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white">-{course.discount}</span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="mb-2 inline-block self-start rounded-full border border-white/15 px-2.5 py-0.5 text-xs font-medium text-zinc-400">{course.level}</span>
                      <h3 className="mb-2 text-base font-extrabold uppercase tracking-wide text-white">{course.title}</h3>
                      <p className="flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-2">{course.shortDescription}</p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-400" /> {course.rating}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                        <div>
                          {course.oldPrice && <span className="text-xs text-zinc-500 line-through">{course.oldPrice}</span>}
                          <div className="text-base font-extrabold text-white">{course.price} <span className="text-xs font-normal text-zinc-500">UZS</span></div>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/60 px-3 py-1.5 text-xs font-bold text-amber-400 transition-all group-hover:bg-amber-400 group-hover:text-black">
                          Ko'rish <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center" data-testid="text-no-courses">
              <Filter className="mx-auto mb-4 h-12 w-12 text-zinc-700" />
              <h3 className="text-lg font-bold text-white">Kurslar topilmadi</h3>
              <p className="mt-2 text-sm text-zinc-400">Boshqa filtr yoki qidiruv so'zini sinab ko'ring</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
