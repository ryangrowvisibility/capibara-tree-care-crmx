import Reveal from "./Reveal";
import Icon, { Stars } from "./Icon";

const PHONE = "(437) 428-0281";
const TEL = "tel:+14374280281";
const SMS = "sms:+14374280281";
const EMAIL = "capibaratreecare@gmail.com";
const ADDRESS = "30 Hertford Ave, York, ON M6M 1S1";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Capibara%20tree%20care%20CRMX&query_place_id=ChIJVfK_fkZ7ViwRcPpIyfFL0kA";
const INSTAGRAM = "https://www.instagram.com/capibaratreecare/";

const services = [
  {
    title: "Tree Removal",
    icon: "tree",
    text: "Dead, dying or unwanted trees taken down safely, including trees squeezed into tight Toronto backyards beside decks, fences and houses. We cut in controlled pieces and haul everything away. Several customers have had multiple dead trees removed in a single visit.",
    featured: true,
  },
  {
    title: "Tree Trimming & Pruning",
    icon: "scissors",
    text: "Overgrown branches cut back and canopies shaped for front and backyard trees. We work carefully around roofs, wires and fences, then clean up so well you'd never know we were there.",
  },
  {
    title: "24/7 Emergency Tree Service",
    icon: "bolt",
    text: "A limb on the roof or a tree leaning the wrong way after a storm? Call any hour. One customer called several companies for an urgent arborist job and said we were the ones who answered fast and showed up.",
  },
  {
    title: "Stump & Trunk Removal",
    icon: "stump",
    text: "After the tree comes down, we can remove the remaining trunk and grind out the stump so you get your yard back for grass, a garden or a new shed.",
  },
  {
    title: "Cut-and-Drop & Branch Cutting",
    icon: "branch",
    text: "A lower-cost option: we cut the tree or branches and leave the wood on site for you to keep or deal with yourself. Ask about it when you call for a quote.",
  },
  {
    title: "Gardening & Site Clean-up",
    icon: "leaf",
    text: "General yard and garden work for Toronto homeowners, plus a full clean-up on every tree job. Every single one of our reviews mentions how tidy the yard was when we left.",
  },
];

const reviews = [
  { name: "Lina", job: "Emergency arborist call", text: "We had an urgent tree problem and needed an arborist. After calling several companies, this team was the one that responded quickly and offered to help right away. Real-life superheroes: professional, friendly, passionate about the work and reasonably priced." },
  { name: "Fernando C.", job: "Tree trimming", text: "They gave us the lowest quote and still delivered the best service. The job was done exactly as we discussed, and the site was cleaned up like nothing had happened." },
  { name: "Michael Z.", job: "Tree removal", text: "Recommended through a friend of a friend. A great crew that takes care with the work and cleans up so well it looked like they were never here. I almost wish I had more trees for them to cut down." },
  { name: "Princess Decor & Floral", job: "Dead tree removal", text: "Found them on HomeStars to remove several dead trees. Free estimate, on time, friendly and professional, answered every question, and they even did some work for our neighbour." },
  { name: "W H", job: "Tree work", text: "Phil and his team did exactly what we asked, cleaned up afterwards, and the price was reasonable. I'd recommend them without hesitation." },
  { name: "Jennifer H.", job: "Tree trimming", text: "An amazing trimming job with an absolutely spotless clean-up. The results were better than we expected, and we'd hire them again." },
];

const steps = [
  { title: "Call or text us", text: `Reach Phil at ${PHONE}, day or night. Text a photo of the tree if you can, it helps us plan.` },
  { title: "Free estimate", text: "We look at the tree and what's around it, explain the options (full removal, trimming or cut-and-drop) and give you a clear price." },
  { title: "Careful, safe work", text: "The crew climbs, rigs and cuts in controlled sections so nothing lands on your house, deck or fence." },
  { title: "Spotless clean-up", text: "We rake, blow and haul away the debris, then walk the yard with you before we leave." },
];

const faqs = [
  { q: "Do you give free estimates?", a: `Yes. Call or text ${PHONE} and we'll come look at the tree and give you a price before any work starts. Customers often tell us ours was the lowest quote they got.` },
  { q: "Are you really available 24/7?", a: "Yes. Our Google listing is open 24 hours, 7 days a week, and we handle emergency tree calls like storm-damaged limbs or a tree that has come down. Call, don't text, for anything urgent." },
  { q: "What areas do you serve?", a: "We're based on Hertford Ave in the York area of Toronto and work across Toronto and the GTA. If you're not sure whether we come to your street, just ask." },
  { q: "Can you remove a tree in a small backyard?", a: "Yes. Most of our work is in tight Toronto backyards next to decks, fences and houses. We climb the tree and take it down piece by piece instead of dropping it in one go." },
  { q: "Do you clean up after the job?", a: "Always. Branches, logs and sawdust are hauled away and the yard is raked and blown. If you choose cut-and-drop to save money, we leave the wood where you want it." },
  { q: "What is cut-and-drop?", a: "It's a cheaper option where we cut the tree or branches and leave the wood on your property instead of hauling it away. It's popular with people who want firewood or have their own way to dispose of it." },
  { q: "Can you remove the stump too?", a: "Yes. We can take out the remaining trunk and grind the stump so the area can be turned back into lawn or garden." },
];

const gallery = [
  { src: "/images/p1.jpg", alt: "Climber working high in a backyard tree beside a brick house in Toronto" },
  { src: "/images/p3.png", alt: "Capibara arborist in a helmet cutting a trunk section with a chainsaw" },
  { src: "/images/p7.jpg", alt: "Tall backyard tree being reduced above a wooden deck" },
  { src: "/images/p6.jpg", alt: "Climber roped into a large tree beside a brick home" },
  { src: "/images/p2.jpg", alt: "Mature backyard tree before work, over a fenced deck" },
  { src: "/images/p10.jpg", alt: "Climber high in a tall tree against a blue sky" },
  { src: "/images/p12.jpg", alt: "Row of leafy backyard trees before trimming" },
  { src: "/images/p13.jpg", alt: "Backyard after branches were cut and piled for removal" },
  { src: "/images/p9.jpg", alt: "Capibara Tree Care flyer: tree service, safety first, tree removal experts, 24/7 and emergency", contain: true },
];

const area = ["York", "Toronto", "Greater Toronto Area (GTA)"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Capibara Tree Care CRMX",
  description: "Toronto tree service: tree removal, trimming and pruning, 24/7 emergency tree service, stump and trunk removal, cut-and-drop and gardening.",
  telephone: "+14374280281",
  email: EMAIL,
  image: "/images/p4.jpg",
  address: { "@type": "PostalAddress", streetAddress: "30 Hertford Ave", addressLocality: "York", addressRegion: "ON", postalCode: "M6M 1S1", addressCountry: "CA" },
  areaServed: ["Toronto", "Greater Toronto Area"],
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "11" },
  sameAs: [INSTAGRAM],
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-[0.9375rem] text-white/90 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving Toronto and the GTA from York</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open 24 hours, 7 days a week · Free estimates</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5 text-brand">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="tree" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-head text-xl font-extrabold tracking-tight text-ink">Capibara</span>
              <span className="block text-sm font-semibold text-brand">Tree Care</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[1rem] font-semibold text-ink/80 lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-head text-lg font-extrabold text-ink hover:text-brand md:block">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden md:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-xl bg-cta text-white md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-brand-soft">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="rise mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.9375rem] font-semibold text-brand shadow-sm">
                <span className="h-2 w-2 rounded-full bg-cta" /> 24/7 emergency tree service
              </p>
              <h1 className="rise d1 text-[clamp(2.4rem,5.4vw,4rem)] text-ink">
                Tree Removal &amp; Tree Trimming in <span className="text-brand">Toronto</span> and the GTA
              </h1>
              <p className="rise d2 mt-5 max-w-xl text-[1.1875rem] text-muted">
                Phil and the Capibara crew take down dead and overgrown trees in tight city backyards, safely and fast, then leave your yard so clean it looks like we were never there. Free estimates, fair prices, any hour.
              </p>
              <div className="rise d3 mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost"><Icon name="chat" className="h-5 w-5" /> Text us a photo</a>
              </div>
              <div className="rise d3 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[1rem] font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars /> 5.0 · 11 Google reviews</span>
                <span className="hidden h-4 w-px bg-line sm:block" />
                <span>Open 24/7</span>
                <span className="hidden h-4 w-px bg-line sm:block" />
                <span>Free estimates</span>
              </div>
            </div>
            <div className="rise d2 relative">
              <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_oklch(0.3_0.07_155/0.6)]">
                <img src="/images/p4.jpg" alt="Capibara crew taking down a tall backyard tree beside a Toronto home" className="aspect-[4/5] w-full object-cover" width={1440} height={1080} />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-xl border border-line bg-white p-4 shadow-lg sm:left-auto sm:right-[-12px] sm:w-80">
                <Stars className="h-4 w-4" />
                <p className="mt-2 text-[0.9875rem] leading-snug text-ink">&ldquo;Lowest quote, best service. They cleaned up like nothing had happened.&rdquo;</p>
                <p className="mt-2 text-sm font-semibold text-muted">Fernando C. · Tree trimming</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "sparkle", top: "5.0 stars", sub: "Every Google review is 5 stars" },
              { icon: "clock", top: "Open 24/7", sub: "Emergency calls, any hour" },
              { icon: "tag", top: "Free estimates", sub: "Often the lowest quote" },
              { icon: "shield", top: "Spotless clean-up", sub: "On every single job" },
            ].map((t) => (
              <div key={t.top} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/12"><Icon name={t.icon} /></span>
                <span>
                  <span className="block font-head text-lg font-extrabold">{t.top}</span>
                  <span className="block text-[0.9375rem] text-white/80">{t.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <p className="font-semibold text-brand">Our services</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)]">Tree work for Toronto homes, big and small</h2>
              <p className="mt-4 text-muted">From a single overgrown maple to a backyard full of dead trees, we handle the cutting, the climbing and the clean-up. Not sure what you need? Call and describe it. We&apos;ll tell you honestly.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift flex flex-col rounded-2xl border bg-white p-7 ${s.featured ? "border-brand ring-1 ring-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-3 py-1 text-sm font-semibold text-white">Most requested</span>}
                  </div>
                  <h3 className="mt-5 text-[1.375rem]">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[1.0625rem] text-muted">{s.text}</p>
                  <a href={TEL} className="cardlink mt-5 inline-flex items-center gap-2 font-semibold text-brand">Call about this <Icon name="arrow" className="arrow h-5 w-5" /></a>
                </article>
              ))}
            </div>
            <div className="reveal mt-8 grid items-center gap-6 overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-2">
              <img src="/images/p5.jpg" alt="Capibara crew member grinding out a stump in a large yard" className="h-full max-h-80 w-full object-cover" loading="lazy" width={1440} height={1080} />
              <div className="p-7 md:pr-10">
                <h3 className="text-[1.5rem]">Want the stump gone too?</h3>
                <p className="mt-3 text-muted">We grind stumps down so the spot can go back to grass or garden. Ask us to add it to your tree removal quote.</p>
                <a href={TEL} className="btn btn-cta mt-5"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-brand-soft py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3"><Stars className="h-6 w-6" /><span className="font-head text-2xl font-extrabold">5.0</span></div>
                <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">Rated 5.0 from 11 Google reviews</h2>
                <p className="mt-3 text-muted">Every review is five stars, and every one of them mentions the clean-up.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost shrink-0 bg-white">Read all reviews on Google <Icon name="arrow" className="arrow h-5 w-5" /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-white p-7 shadow-[0_1px_0_oklch(0.9_0.015_145)]">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-head font-extrabold text-white">{r.name.charAt(0)}</span>
                    <span>
                      <span className="block font-semibold">{r.name}</span>
                      <span className="block text-sm text-muted">{r.job} · Google review</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="reveal mx-auto w-full max-w-sm">
              <img src="/images/p8.jpg" alt="Capibara Tree Care CRMX badge with Costa Rican, Canadian and Mexican flags" className="aspect-square w-full rounded-full object-contain" loading="lazy" width={1080} height={1080} />
            </div>
            <div className="reveal">
              <p className="font-semibold text-brand">About us</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)]">A hard-working Toronto crew that answers the phone</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>Capibara Tree Care is run by Phil, working alongside crew members like Oswe, out of the York area of Toronto. Our badge says it best: professional arbor services, proudly built by Latin talent, with the flags of Costa Rica, Canada and Mexico side by side.</p>
                <p>Most of our work comes from neighbours, friends of friends and HomeStars. People call us back because we do what we said we&apos;d do, at the price we quoted, and we leave the yard cleaner than we found it.</p>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "bolt", t: "Fast response", d: "Emergencies answered when others don't call back." },
                  { icon: "tag", t: "Fair, clear quotes", d: "Often the lowest price our customers received." },
                  { icon: "shield", t: "Safe, careful cutting", d: "Controlled pieces around homes, decks and fences." },
                  { icon: "heart", t: "Friendly crew", d: "Questions answered, neighbours helped too." },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3 rounded-xl border border-line p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={d.icon} className="h-5 w-5" /></span>
                    <span><span className="block font-semibold">{d.t}</span><span className="block text-[0.9875rem] text-muted">{d.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-brand-soft py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <p className="font-semibold text-brand">How it works</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)]">From your call to a clean yard in four steps</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl bg-white p-7">
                  <span className="font-head text-5xl font-extrabold text-brand">{i + 1}</span>
                  <h3 className="mt-4 text-[1.3125rem]">{s.title}</h3>
                  <p className="mt-2 text-[1.0625rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-semibold text-brand">Our work</p>
                <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)]">Real jobs in Toronto backyards</h2>
              </div>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-brand"><Icon name="insta" className="h-5 w-5" /> More on Instagram</a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {gallery.map((g) => (
                <div key={g.src} className={`reveal zoom overflow-hidden rounded-xl ${g.contain ? "bg-white border border-line" : "bg-brand-soft"}`}>
                  <img src={g.src} alt={g.alt} className={`aspect-[4/5] w-full ${g.contain ? "object-contain" : "object-cover"}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-brand-soft py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-semibold text-brand">Service area</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)]">Based in York, working across Toronto</h2>
              <p className="mt-4 text-muted">Our home base is Hertford Ave in the York area of Toronto. We take tree jobs across the city and the Greater Toronto Area. Call with your address and we&apos;ll confirm right away.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.map((a) => <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" /> {a}</li>)}
              </ul>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8 bg-white">Get directions <Icon name="arrow" className="arrow h-5 w-5" /></a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of Capibara Tree Care in York, Toronto" src="https://maps.google.com/maps?q=30%20Hertford%20Ave%2C%20York%2C%20ON%20M6M%201S1&output=embed" className="h-[360px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <div className="reveal text-center">
              <p className="font-semibold text-brand">Questions</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)]">Frequently asked questions</h2>
            </div>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="reveal group py-5">
                  <summary className="flex items-center justify-between gap-6 text-[1.1875rem] font-semibold">
                    {f.q}
                    <span className="tog grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-2xl leading-none text-brand">+</span>
                  </summary>
                  <p className="mt-3 pr-12 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-6 md:py-20">
            <h2 className="mx-auto max-w-3xl text-[clamp(2.1rem,4.6vw,3.5rem)]">Got a tree that needs to come down? Call Phil at {PHONE}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">Free estimates. Open 24 hours, 7 days a week. Clean-up included.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn border-2 border-white/70 text-white hover:bg-white hover:text-brand-deep"><Icon name="chat" className="h-5 w-5" /> Text us</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[oklch(0.975_0.01_145)] pb-28 md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-head text-2xl font-extrabold">Capibara Tree Care CRMX</p>
            <address className="mt-4 space-y-2 not-italic text-muted">
              <p className="flex items-start gap-2"><Icon name="pin" className="mt-1 h-5 w-5 shrink-0 text-brand" /> {ADDRESS}</p>
              <p><a href={TEL} className="flex items-center gap-2 font-semibold text-ink hover:text-brand"><Icon name="phone" className="h-5 w-5 text-brand" /> {PHONE}</a></p>
              <p><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-brand"><Icon name="mail" className="h-5 w-5 text-brand" /> {EMAIL}</a></p>
              <p className="flex items-center gap-2"><Icon name="clock" className="h-5 w-5 text-brand" /> Open 24 hours, 7 days a week</p>
            </address>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-4 space-y-2 text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="font-semibold">Service area</p>
            <p className="mt-4 text-muted">York, Toronto and the Greater Toronto Area</p>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Capibara Tree Care on Instagram" className="mt-6 inline-grid h-11 w-11 place-items-center rounded-full border border-line text-brand hover:bg-brand hover:text-white"><Icon name="insta" className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-muted md:px-6">© {new Date().getFullYear()} Capibara Tree Care CRMX. Tree removal and trimming in Toronto.</p>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="chat" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
