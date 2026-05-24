# FBA Academy WordPress SEO va Security Checklist

## Texnik SEO (admin/cPanel)
1. `Sozlamalar > Doimiy havolalar` ichida `Post name` (`/%postname%/`) ni yoqing va saqlang.
2. `Sozlamalar > O'qish` da `Search engine visibility` (discourage indexing) o'chirilgan bo'lsin.
3. Root `.htaccess` da WordPress rewrite qoidalari aktiv bo'lsin.
4. `robots.txt` root faylini tekshiring: `/wp-admin/` disallow, `sitemap.xml` allow.
5. `https://domen/sitemap.xml` va `https://domen/wp-sitemap.xml` 200 qaytarsin.
6. Google Search Console ga domen va sitemap qo'shing.
7. Bing Webmaster Tools ga ham sitemap yuboring.
8. `https://domen` bo'yicha SSL force (`http -> https`) yoqing.
9. WWW yoki non-WWW bitta variantni tanlab 301 redirect qiling.
10. `404` monitoring: Search Console `Pages > Not indexed` bo'limidagi 404 URL larni tozalang.

## On-page SEO
1. Har sahifada yagona `H1` ishlating.
2. Har sahifa uchun title 55-65 belgida, description 140-160 belgida bo'lsin.
3. Kurs sahifalarida `Course`, `FAQPage`, `BreadcrumbList` schema ishlatilganini Rich Results Test bilan tekshiring.
4. Rasm `alt` atributlarini to'ldiring (kurs nomi + kontekst).
5. Ichki linklash: blog -> kurs, kurs -> natijalar, natijalar -> kontakt.
6. Canonical URL duplicat sahifalarga to'g'ri qo'yilganini tekshiring.
7. Hreflang (`uz/ru/en`) teglarini source code dan tekshiring.

## Performance
1. Cloudflare (yoki hosting cache) da HTML + static cache yoqing.
2. Brotli/Gzip yoqing.
3. Image optimization (WebP/AVIF) yoqing.
4. LCP elementlari (hero image/title) uchun lazy loadingni o'chiring, qolganini lazy qoldiring.
5. JS/CSS minification yoqing.

## Security
1. WP admin login URL ni standard holatdan o'zgartiring (plugin orqali).
2. 2FA ni admin hisoblar uchun yoqing.
3. `admin` username ishlatmang.
4. Kuchli parol va limited login attempts yoqing.
5. Haftalik full backup + daily DB backup yoqing.
6. WP core, theme, pluginlarni har hafta update qiling.
7. Keraksiz plugin/theme larni o'chiring.
8. XML-RPC kerak bo'lmasa o'chiring.
9. File permissions: papkalar `755`, fayllar `644`.
10. WAF (Cloudflare yoki hosting) ni yoqing.

## Kontent rejasi (Top-3 uchun)
1. Har kurs uchun 1 ta pillar sahifa + 6-10 ta qo'llab-quvvatlovchi blog post.
2. Har hafta kamida 2 ta yangi maqola.
3. Har maqolada 1 ta aniq intent: `narx`, `imtihon`, `tayyorlanish`, `ish haqi`, `sertifikat`.
4. Mavjud maqolalarni 30 kunda bir yangilang (freshness signal).
5. Natijalar sahifasiga muntazam yangi sertifikat/otziv qo'shib boring.

## Tekshiruv vositalari
- Google Search Console
- Google Rich Results Test
- PageSpeed Insights
- Ahrefs/Semrush (keyword gap + internal link audit)
