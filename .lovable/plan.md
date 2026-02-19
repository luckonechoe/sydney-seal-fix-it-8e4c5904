
# Comprehensive SEO Overhaul — Sydney Sealed

## What's Already Good
- Structured data (JSON-LD) implemented with LocalBusiness, FAQ, Service, BreadcrumbList, WebSite schemas
- Service pages exist for major offerings
- ServiceAreas component with suburb-level targeting
- Route-level code splitting for performance
- Preconnect hints for critical origins

---

## What's Missing / Weak — and What We'll Fix

### 1. On-Page SEO — Title Tags, Meta Descriptions, Canonical URLs

**Problem:** Every service page has `<link rel="canonical" href="https://yourdomain.com/...">` — a placeholder that has never been updated. This is a critical indexing failure. Google will see these as duplicates or ignore canonicals. Every secondary page also has generic/thin meta descriptions.

**Fix:** Update every page's canonical to `https://sydneyseal.com.au/[path]`, rewrite meta titles and descriptions with primary + location keywords following proven title-tag formulas:
- Format: `[Primary Keyword] Sydney | [Value Prop] | [Brand]`
- Meta descriptions: 155 chars max, include a call to action, primary keyword in first 20 words

Pages to fix: About, FAQ, Testimonials, Blog, ShowerLeakRepair, BalconyLeakRepair, Contact, and all remaining service pages.

---

### 2. E-E-A-T Signals — Experience, Expertise, Authority, Trust

**Problem:** The About page has no author bio, no named expert, no credentials displayed visually. It reads generically. Google's Helpful Content guidelines demand visible authorship and real-world proof.

**Fix:** Add an "Expert Team" section to the About page with named professionals, credentials listed explicitly (Licensed Waterproofer NSW, Insurance details), years of experience per service area, and professional headshot placeholder with proper alt text. Also update the Hero section about page blurb to mention the founding expert by title.

---

### 3. Local SEO — Suburb-Level Landing Signals

**Problem:** The ServiceAreas component lists suburbs as text but none are linked to unique pages or anchor text. There are no suburb-specific keyword phrases used naturally across homepage copy. Google rewards geographic specificity.

**Fix:**
- Rewrite the ServiceAreas component to turn each suburb into a keyword phrase (e.g., "shower leak repair Bondi", "waterproofing Chatswood") instead of plain suburb names
- Add a new `LocalSEOBlock` component that renders suburb-specific trust copy at the bottom of the homepage with structured H3 headings per region
- Add `itemProp="areaServed"` microdata attributes to each suburb entry

---

### 4. Structured Data — Depth & Coverage

**Problem:** The FAQ schema on the homepage only covers 6 questions. Service pages don't have their own FAQ schema. The `aggregateRating` has fake review counts (127) that aren't backed by real on-page reviews — if Google crawls and finds no matching visible reviews, it may ignore the schema.

**Fix:**
- Add page-specific FAQ schema to the ShowerLeakRepair, BalconyLeakRepair, and FAQ pages themselves via the SEOStructuredData component
- Add a `HowTo` schema to service pages (Google can surface process steps in rich results)
- Add `Review` itemscope microdata markup to the visible testimonials on the Testimonials page so the aggregateRating is backed by visible content

---

### 5. Content — Hero Copy & Trust Signals

**Problem:** The Hero h1 is generic: "Sydney's Trusted Experts in Shower Leak Repair & Waterproofing." It doesn't capture attention, doesn't use neuroscientific tension (problem-agitation-solution), and doesn't differentiate. The sub-headline is weak. The 3 trust stats (500+, 24hr, 5yr) feel like placeholders.

**Fix — Hero rewrite (attention-grabbing, keyword-rich, empathy-first):**
- H1: "Shower Leaking Through the Ceiling? Sydney's #1 Rated Repair Specialists Stop It Permanently"
- Sub: "No tile removal. No mess. No guesswork. Just a permanent waterproof seal — backed by a 5-year written warranty."
- Badge bar: "Licensed NSW" | "Silver-Ion Antimicrobial" | "Same-Day Emergency" | "4.9★ Google Rated"
- Stats upgraded: "1,000+ Homes Protected" | "Same-Day Response" | "5-Year Written Warranty"

---

### 6. Content — TrustBadges Section Rewrite

**Problem:** "Advanced Solutions / Revolutionary leak repair methods" is filler copy. It means nothing to a homeowner and passes no authority signal.

**Fix:** Each badge gets specific, benefit-first copy using neuro-marketing principles (specificity builds credibility):
- "No Tile Removal" → detail: saves avg. $2,000–$5,000 vs full retile
- "Silver-Ion Antimicrobial Grout" → detail: clinically proven to prevent mould & bacteria for life
- "Same-Day Emergency Callout" → detail: team dispatched within 2 hours across all Sydney suburbs
- "5-Year Written Warranty" → detail: covers materials and workmanship — not just verbal promises
- "Fully Licensed & Insured" → detail: NSW licensed waterproofer, $20M public liability insurance
- "15+ Years Sydney Experience" → replaces "Advanced Solutions"

---

### 7. Content — Services Section Rewrite

**Problem:** Features lists say things like "No demolition", "Weather resistant" — no emotional hook, no keyword value. The descriptions are too short and generic.

**Fix:** Expand descriptions to 2 sentences each, front-load primary keywords, add benefit-first feature points with suburb keywords naturally woven in:
- "Shower Leak Repair: Stop a leaking shower from destroying your ceilings and subfloor. Our non-invasive repair method seals the source — no tile removal, no mess, same-day service across Eastern Suburbs, North Shore & beyond."
- Feature items: "No tile demolition → saves 70% vs retile", "Silver-ion antimicrobial seal", "5-year written warranty"

---

### 8. Content — WhyChooseUs Section Rewrite

**Problem:** WhyChooseUs and TrustBadges are near-identical sections. "15+ Years Experience" with a construction icon is weak. "Australian Standards Compliant" is too vague after we removed AS3740.

**Fix:** Differentiate this section to focus on the **outcome** side of the trust story:
- Rename to "The Sydney Sealed Difference"
- Card 1: "1,000+ Leaks Fixed" (not just "experience")
- Card 2: "The Only Antimicrobial Waterproofer" (unique differentiator)
- Card 3: "Written Warranty — Not Just a Promise"
- Card 4: "Transparent Pricing From $749" (anchors price expectation)

---

### 9. Blog — New SEO-Rich Post Entries

**Problem:** All 6 blog posts are December/November 2024. No posts covering high-intent suburb keywords. Blog appears static with no new content signal.

**Fix:** Add 3 new blog post entries targeting high-value longtail keywords with more recent dates:
- "Shower Leak Repair in Bondi: What Eastern Suburbs Homeowners Need to Know" — Bondi/Eastern Suburbs local keyword
- "How Much Does Waterproofing Cost in Sydney in 2025?" — high commercial intent, price-comparison searchers
- "Mould in Your Bathroom? It's Not Cleaning, It's Waterproofing" — problem-awareness funnel top

---

### 10. Technical SEO — Image Alt Text, ARIA, Semantic HTML

**Problem:** Service card images have alt text: `"${service.titleText} - Professional waterproofing service in Sydney"` — that's okay but not great. Blog post images have alt = post.title only (no location keyword). Hero has no visible `<img>` at all, missing an image SEO opportunity.

**Fix:**
- Enhance all image alt attributes with suburb/service keywords
- Ensure all section elements have `aria-labelledby` pointing to the correct heading IDs
- Add `itemprop="description"` and `itemprop="name"` to service card content
- Blog image alt text: `"[Post title] - Sydney waterproofing advice"` pattern

---

### 11. Footer — NAP Consistency & Internal Links

**Problem:** Footer has `ABN: 12 345 678 901` — this is a placeholder. If real ABN is different, it's a trust/credibility issue. Service areas column has no links — just plain text. These could be internal links for crawlability.

**Fix:**
- Add a visible Google Reviews widget placeholder or star-rating badge in footer
- Add social proof statement: "Trusted by 1,000+ Sydney families since 2015"
- Add schema `<address>` with proper NAP (Name, Address, Phone) structured markup
- Make the suburb list in footer clickable links anchored to `#service-areas` on the homepage

---

### 12. Meta Tags — Open Graph & Twitter Cards

**Problem:** Service pages have no Open Graph or Twitter Card meta tags at all. When shared on social, they'll show blank/generic previews. This hurts both social SEO signals and click-through rates.

**Fix:** Add OG and Twitter meta to all major service pages (ShowerLeakRepair, BalconyLeakRepair, FAQ) following the pattern already in Index.tsx.

---

## Technical Implementation Scope

**Files to be modified:**
- `index.html` — update preload hints, add font display swap
- `src/components/SEOStructuredData.tsx` — add HowTo schema, expand FAQ schema, fix URL refs
- `src/components/Hero.tsx` — rewrite headline, sub-headline, badge bar, stats
- `src/components/TrustBadges.tsx` — rewrite all 6 badge copy items with specific benefits
- `src/components/Services.tsx` — expand descriptions, add keyword-rich feature bullets, add `itemprop` attributes
- `src/components/WhyChooseUs.tsx` — rewrite 4 cards with outcome-focused titles
- `src/components/ServiceAreas.tsx` — convert suburbs to keyword phrases, add `areaServed` microdata
- `src/components/Footer.tsx` — add social proof line, fix ABN placeholder, add NAP microdata
- `src/pages/Index.tsx` — fix meta description, expand keywords list
- `src/pages/About.tsx` — fix canonical, add expert credentials section, add author schema
- `src/pages/FAQ.tsx` — fix canonical, add SEOStructuredData with FAQ schema
- `src/pages/Testimonials.tsx` — fix canonical, add Review microdata to each testimonial
- `src/pages/Blog.tsx` — fix canonical, add 3 new blog post entries targeting suburb + price keywords
- `src/pages/ShowerLeakRepair.tsx` — fix canonical, add OG tags, add HowTo schema
- `src/pages/BalconyLeakRepair.tsx` — fix canonical, add OG tags
- `src/pages/Contact.tsx` — fix canonical
- All remaining service pages — fix canonical URLs

**No new routes needed.** All changes are within existing components and pages.

---

## Priority Order of Impact

1. Fix broken canonical URLs on all pages (critical — prevents indexing issues)
2. Hero copy rewrite (highest traffic impact — homepage conversion + crawl signal)
3. TrustBadges + WhyChooseUs copy (on-page authority signals)
4. ServiceAreas keyword enhancement (local SEO)
5. Blog new posts (content freshness signal)
6. Testimonials Review microdata (structured data backing aggregateRating)
7. About page E-E-A-T section (authority building)
8. Service page OG tags (social sharing + click-through)
