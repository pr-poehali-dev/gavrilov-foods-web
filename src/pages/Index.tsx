import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/74221c1a-4fe9-4b25-af67-63ea3543dc90.jpg";
const PRODUCTS_IMG = "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/9991fbab-3a2a-4aab-911d-0cda6d7dfa78.jpg";
const FACTORY_IMG = "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/5e63661f-3c48-4482-aa35-c2a266bc4afa.jpg";

// User-provided reference images
const REF_CONTACT = "https://cdn.poehali.dev/files/aa315ecd-ab40-456e-b4e3-27b8a8922be0.jpg";
const REF_PRIVATE = "https://cdn.poehali.dev/files/0dc49575-4061-408b-9f51-31d7d8b71e0f.jpg";
const REF_PROCESS = "https://cdn.poehali.dev/files/5d670f13-e5c4-4296-b948-3734028870d0.jpg";
const REF_EXPORT = "https://cdn.poehali.dev/files/6091b637-471c-4c76-8754-e23440225289.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Organic", href: "#organic" },
  { label: "Export", href: "#export" },
  { label: "Certifications", href: "#certifications" },
  { label: "Private Label", href: "#private-label" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const products = [
  {
    name: "Buckwheat",
    nameRu: "Гречиха",
    desc: "EU certified organic. Available in 200g–1000g retail bags and 500–1000kg big bags.",
    tag: "BESTSELLER",
    icon: "Wheat",
  },
  {
    name: "Soybeans",
    nameRu: "Соя",
    desc: "Non-GMO, high-protein. FCL container supply available for industrial buyers.",
    tag: "EXPORT READY",
    icon: "Circle",
  },
  {
    name: "Lentils",
    nameRu: "Чечевица",
    desc: "Green & red varieties. Strict quality control at every stage of production.",
    tag: "ORGANIC",
    icon: "Layers",
  },
  {
    name: "Peas",
    nameRu: "Горох",
    desc: "Field & garden peas. Flexible packaging from 250g retail to bulk big bags.",
    tag: "CERTIFIED",
    icon: "Leaf",
  },
  {
    name: "Oats",
    nameRu: "Овёс",
    desc: "Premium quality, gluten-free certified options available. Global delivery.",
    tag: "POPULAR",
    icon: "Sprout",
  },
  {
    name: "Sunflower",
    nameRu: "Подсолнечник",
    desc: "Seeds and oil. 20/40 ft container supply. EU documentation ready.",
    tag: "NEW",
    icon: "Sun",
  },
];

const processSteps = [
  { num: "01", title: "Own Farmland", desc: "10,000 ha of fertile fields. Full control from seed to harvest." },
  { num: "02", title: "Harvesting", desc: "Modern machinery and experienced team. Timely and efficient." },
  { num: "03", title: "Processing", desc: "Advanced cleaning, sorting and quality control at every stage." },
  { num: "04", title: "Storage", desc: "5,000 m² warehouse capacity. Safe, clean and well-maintained." },
  { num: "05", title: "Packaging", desc: "200g–1000kg flexible formats. Private label design available." },
  { num: "06", title: "Export", desc: "20/40 ft containers. EU documentation. Worldwide delivery." },
];

const trustItems = [
  { icon: "ShieldCheck", label: "EU Organic Certified", desc: "Certified for global markets" },
  { icon: "Award", label: "Quality You Can Trust", desc: "Strict control at every stage" },
  { icon: "Container", label: "20/40 FT Container", desc: "FCL shipments worldwide" },
  { icon: "FileText", label: "Fast Documentation", desc: "All export docs handled professionally" },
  { icon: "Clock", label: "Reply in 24 Hours", desc: "Export team always ready" },
];

const privateLabel = [
  { icon: "Package", title: "Retail Packaging", size: "250g – 5kg", desc: "Custom design and printing options for your brand." },
  { icon: "Boxes", title: "Big Bags", size: "500 – 1,000kg", desc: "Industrial bulk packaging for large volume supply." },
  { icon: "Container", title: "FCL Container Supply", size: "20ft / 40ft", desc: "Full container shipments for safe and efficient delivery." },
  { icon: "Tag", title: "Private Label", size: "Concept → Shelf-ready", desc: "From product selection to ready-to-sell packaging." },
];

const labelSteps = [
  { icon: "Wheat", title: "Product Selection" },
  { icon: "Palette", title: "Packaging & Design" },
  { icon: "ShieldCheck", title: "Certification & Labeling" },
  { icon: "Factory", title: "Production & QC" },
  { icon: "Ship", title: "Container Shipment" },
];

const galleryImages = [
  { src: HERO_IMG, label: "Own Fields" },
  { src: PRODUCTS_IMG, label: "Products" },
  { src: FACTORY_IMG, label: "Processing" },
  { src: REF_EXPORT, label: "Export" },
  { src: REF_PROCESS, label: "From Field" },
  { src: REF_PRIVATE, label: "Private Label" },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            setTimeout(() => el.classList.add("visible"), parseInt(delay));
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--gf-gold)]"
        style={{ background: "var(--gf-dark)" }}
      >
        <Icon name="Wheat" size={18} style={{ color: "var(--gf-gold)" }} />
      </div>
      <div>
        <div className="font-cormorant font-bold text-lg leading-none tracking-wide" style={{ color: "inherit" }}>
          GAVRILOV
        </div>
        <div className="font-montserrat text-[9px] tracking-[0.25em] uppercase opacity-70">FOODS</div>
      </div>
    </div>
  );
}

export default function Index() {
  useScrollReveal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-montserrat" style={{ background: "var(--gf-cream)", color: "var(--gf-text)" }}>
      {/* ═══════════════ NAVBAR ═══════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(14,26,15,0.97)" : "rgba(14,26,15,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(201,151,58,0.2)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("#hero")} className="text-white">
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="nav-link font-montserrat text-[12px] font-medium tracking-[0.06em] uppercase text-white/75 hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="btn-gold text-[11px] py-2.5 px-5" onClick={() => scrollTo("#contact")}>
              Request a Quote
            </button>
          </div>

          {/* Mobile burger */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden mobile-menu"
            style={{ background: "var(--gf-dark)", borderTop: "1px solid rgba(201,151,58,0.2)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-white/80 hover:text-white font-montserrat text-sm uppercase tracking-widest transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <button className="btn-gold mt-2" onClick={() => scrollTo("#contact")}>
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-end grain-overlay"
        style={{ background: "var(--gf-dark)" }}
      >
        <div className="absolute inset-0 img-zoom">
          <img
            src={HERO_IMG}
            alt="Gavrilov Fields"
            className="w-full h-full object-cover"
            style={{ opacity: 0.45 }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(14,26,15,0.95) 0%, rgba(14,26,15,0.3) 50%, rgba(14,26,15,0.6) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="max-w-3xl">
            <div className="section-label mb-6 animate-fade-up">From Smolensk Region to the World</div>
            <h1
              className="font-cormorant font-light leading-[1.05] mb-6 text-white animate-fade-up delay-100"
              style={{ fontSize: "clamp(52px, 7vw, 96px)" }}
            >
              Premium Grain
              <br />
              <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>Export</span> Partner
            </h1>
            <p
              className="text-white/65 font-montserrat font-light mb-10 max-w-xl animate-fade-up delay-200"
              style={{ fontSize: "16px", lineHeight: "1.75" }}
            >
              We grow, process and export premium organic grains — buckwheat, soybeans, lentils and more.
              EU certified. 10,000 ha own farmland. Worldwide supply.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <button className="btn-gold" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Request Export Offer <Icon name="ArrowRight" size={16} />
              </button>
              <button className="btn-outline-white" onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}>
                View Products
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px animate-fade-up delay-500"
            style={{ borderTop: "1px solid rgba(201,151,58,0.25)" }}
          >
            {[
              { val: "10,000 ha", label: "Own Farmland" },
              { val: "5,000 m²", label: "Warehouse" },
              { val: "20+ countries", label: "Export Markets" },
              { val: "EU Certified", label: "Organic" },
            ].map((s, i) => (
              <div key={i} className="pt-6 pr-8">
                <div className="font-cormorant font-semibold text-3xl" style={{ color: "var(--gf-gold)" }}>
                  {s.val}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-widest mt-1 font-montserrat">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 animate-fade-up delay-700">
          <div className="flex flex-col items-center gap-2">
            <div className="text-white/30 text-[10px] uppercase tracking-widest font-montserrat">Scroll</div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" style={{ background: "linear-gradient(to bottom, transparent, var(--gf-gold), transparent)" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST BAR ═══════════════ */}
      <div style={{ background: "var(--gf-dark-2)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-between gap-6">
            {trustItems.map((t, i) => (
              <div key={i} className="flex items-center gap-3 reveal" data-delay={String(i * 80)}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,151,58,0.15)", border: "1px solid rgba(201,151,58,0.3)" }}
                >
                  <Icon name={t.icon} size={15} style={{ color: "var(--gf-gold)" }} />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold uppercase tracking-wide font-montserrat">
                    {t.label}
                  </div>
                  <div className="text-white/45 text-xs">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="py-28" style={{ background: "var(--gf-cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="section-label mb-6">About Us</div>
              <h2
                className="font-cormorant font-light leading-tight mb-6"
                style={{ fontSize: "clamp(36px, 4vw, 58px)", color: "var(--gf-dark)" }}
              >
                From Farm to Export —<br />
                <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>Full Control</span> at Every Stage
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: "var(--gf-text-light)" }}>
                Gavrilov Foods is a vertically integrated agricultural company based in the Smolensk Region, Russia. We own 10,000 hectares of farmland, operate modern processing facilities and deliver premium grains to importers worldwide.
              </p>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--gf-text-light)" }}>
                Every shipment is backed by full traceability, EU organic certification options, and a dedicated export team that responds within 24 hours.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "MapPin", label: "Smolensk Region, Russia" },
                  { icon: "Globe", label: "EU Export Documentation" },
                  { icon: "Phone", label: "+7 903 790 17 95" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--gf-text-light)" }}>
                    <Icon name={item.icon} size={15} style={{ color: "var(--gf-gold)" }} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <div className="relative">
                <div
                  className="absolute -top-4 -right-4 w-full h-full"
                  style={{ border: "1px solid var(--gf-gold)", opacity: 0.3 }}
                />
                <div className="img-zoom aspect-[4/3]">
                  <img src={FACTORY_IMG} alt="Gavrilov Processing" className="w-full h-full object-cover" />
                </div>
                <div
                  className="absolute bottom-0 left-0 px-6 py-4"
                  style={{ background: "var(--gf-dark)", color: "white" }}
                >
                  <div className="font-cormorant text-xl font-semibold" style={{ color: "var(--gf-gold)" }}>
                    Modern Equipment
                  </div>
                  <div className="text-white/60 text-xs mt-0.5 font-montserrat">Processing 200g – 1000kg formats</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PRODUCTS ═══════════════ */}
      <section id="products" className="py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="section-label justify-center mb-5" style={{ justifyContent: "center" }}>
              <span style={{ color: "var(--gf-gold)", fontSize: "11px", letterSpacing: "0.2em", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase" }}>
                — Our Products —
              </span>
            </div>
            <h2
              className="font-cormorant font-light"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "var(--gf-dark)" }}
            >
              Premium Grains for{" "}
              <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>Global Markets</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="product-card reveal"
                data-delay={String(i * 80)}
                style={{
                  background: "var(--gf-cream)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "var(--gf-dark)", color: "var(--gf-gold)" }}
                    >
                      <Icon name={p.icon} size={20} />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-widest px-3 py-1"
                      style={{ background: "rgba(201,151,58,0.12)", color: "var(--gf-gold)", fontFamily: "Montserrat" }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div
                    className="font-cormorant text-2xl font-semibold mb-1"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {p.name}
                  </div>
                  <div className="text-xs mb-3 font-montserrat" style={{ color: "var(--gf-gold)" }}>
                    {p.nameRu}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--gf-text-light)" }}>
                    {p.desc}
                  </p>
                </div>
                <div
                  className="px-7 py-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <button
                    className="text-xs font-semibold uppercase tracking-widest flex items-center gap-1 transition-colors hover:opacity-70"
                    style={{ color: "var(--gf-gold)", fontFamily: "Montserrat" }}
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Request Quote <Icon name="ArrowRight" size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Products hero image */}
          <div className="mt-12 reveal">
            <div className="img-zoom aspect-[21/6] overflow-hidden">
              <img src={PRODUCTS_IMG} alt="Gavrilov Products" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPORT / PROCESS ═══════════════ */}
      <section id="export" className="py-28 grain-overlay" style={{ background: "var(--gf-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="section-label justify-center mb-5" style={{ justifyContent: "center" }}>
              <span style={{ color: "var(--gf-gold)", fontSize: "11px", letterSpacing: "0.2em", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase" }}>
                — Our Process —
              </span>
            </div>
            <h2
              className="font-cormorant font-light text-white"
              style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
            >
              From Field to{" "}
              <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>Export</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
              We control every stage of production to ensure consistent quality, traceability and reliability for our partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
            {processSteps.map((s, i) => (
              <div
                key={i}
                className="reveal p-8 transition-colors hover:bg-white/5"
                data-delay={String(i * 80)}
                style={{ background: "var(--gf-dark)" }}
              >
                <div className="font-cormorant text-5xl font-light mb-4" style={{ color: "rgba(201,151,58,0.25)" }}>
                  {s.num}
                </div>
                <div
                  className="font-montserrat text-sm font-semibold uppercase tracking-wider mb-3 text-white"
                >
                  {s.title}
                </div>
                <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
            {[
              { val: "10,000 ha", label: "Own Farmland" },
              { val: "5,000 m²", label: "Warehouse Capacity" },
              { val: "Modern", label: "Processing Equipment" },
              { val: "Export-Ready", label: "Packaging & Logistics" },
            ].map((s, i) => (
              <div
                key={i}
                className="text-center p-6"
                style={{ border: "1px solid rgba(201,151,58,0.2)" }}
              >
                <div className="font-cormorant text-3xl font-semibold" style={{ color: "var(--gf-gold)" }}>
                  {s.val}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-widest mt-2 font-montserrat">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRIVATE LABEL ═══════════════ */}
      <section id="private-label" className="py-28" style={{ background: "var(--gf-cream-2)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <div className="section-label mb-6">Private Label</div>
              <h2
                className="font-cormorant font-light leading-tight mb-6"
                style={{ fontSize: "clamp(36px, 4vw, 58px)", color: "var(--gf-dark)" }}
              >
                Your Brand,
                <br />
                <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>Our Quality</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--gf-text-light)" }}>
                From concept to shelf-ready packaging — we produce premium grain products under your brand for retailers, distributors and private importers worldwide.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                {["Custom packaging design", "Your brand, your label", "All product types available", "Retail & wholesale volumes", "EU Organic certification possible"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--gf-text-light)", fontFamily: "Montserrat" }}>
                    <Icon name="Check" size={13} style={{ color: "var(--gf-gold)" }} />
                    {f}
                  </div>
                ))}
              </div>

              <button
                className="btn-outline-dark"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Request Private Label Proposal <Icon name="ArrowRight" size={15} />
              </button>

              {/* Process steps */}
              <div className="mt-12">
                <div className="text-xs font-semibold uppercase tracking-widest mb-6 font-montserrat" style={{ color: "var(--gf-text-light)" }}>
                  Our Private Label Process
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {labelSteps.map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ background: "var(--gf-dark)", color: "var(--gf-gold)", fontFamily: "Montserrat" }}
                        >
                          {i + 1}
                        </div>
                        <span className="text-xs font-montserrat" style={{ color: "var(--gf-text-light)" }}>
                          {s.title}
                        </span>
                      </div>
                      {i < labelSteps.length - 1 && (
                        <Icon name="ArrowRight" size={12} style={{ color: "var(--gf-gold)", opacity: 0.5 }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="grid grid-cols-2 gap-4">
                {privateLabel.map((p, i) => (
                  <div
                    key={i}
                    className="product-card p-5"
                    style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "var(--gf-dark)", color: "var(--gf-gold)" }}
                    >
                      <Icon name={p.icon} size={18} />
                    </div>
                    <div className="font-cormorant text-lg font-semibold mb-1" style={{ color: "var(--gf-dark)" }}>
                      {p.title}
                    </div>
                    <div className="text-xs mb-2 font-montserrat font-semibold" style={{ color: "var(--gf-gold)" }}>
                      {p.size}
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--gf-text-light)" }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 p-6"
                style={{ background: "var(--gf-dark)", color: "white" }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: "10,000 ha", label: "Own farmland" },
                    { val: "Consistent", label: "Quality control" },
                    { val: "EU + China", label: "Export experience" },
                    { val: "Long-term", label: "Cooperation" },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="font-cormorant text-xl font-semibold" style={{ color: "var(--gf-gold)" }}>
                        {s.val}
                      </div>
                      <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ORGANIC / CERTIFICATIONS ═══════════════ */}
      <section id="organic" className="py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="img-zoom aspect-square max-w-sm">
                <img
                  src={HERO_IMG}
                  alt="Organic Fields"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="reveal-right">
              <div className="section-label mb-6">Organic & Certifications</div>
              <h2
                className="font-cormorant font-light leading-tight mb-6"
                style={{ fontSize: "clamp(32px, 3vw, 50px)", color: "var(--gf-dark)" }}
              >
                EU Organic Certified
                <br />
                <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>for Global Markets</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--gf-text-light)" }}>
                Our products meet the highest international food safety and organic standards. All export documentation is handled professionally and quickly.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "ShieldCheck", title: "EU Organic Certification", desc: "Certified organic products for global markets." },
                  { icon: "FlaskConical", title: "Lab Tested Quality", desc: "Every batch tested and documented." },
                  { icon: "FileCheck", title: "Food Safety Standards", desc: "HACCP and international compliance." },
                  { icon: "Globe", title: "Export Documentation", desc: "Full EU export docs handled within 24h." },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-4" style={{ background: "var(--gf-cream)", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--gf-dark)" }}
                    >
                      <Icon name={c.icon} size={16} style={{ color: "var(--gf-gold)" }} />
                    </div>
                    <div>
                      <div className="font-montserrat text-sm font-semibold mb-1" style={{ color: "var(--gf-dark)" }}>
                        {c.title}
                      </div>
                      <div className="text-xs" style={{ color: "var(--gf-text-light)" }}>
                        {c.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ GALLERY ═══════════════ */}
      <section id="gallery" className="py-20" style={{ background: "var(--gf-cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="section-label justify-center mb-4" style={{ justifyContent: "center" }}>
              <span style={{ color: "var(--gf-gold)", fontSize: "11px", letterSpacing: "0.2em", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase" }}>
                — Gallery —
              </span>
            </div>
            <h2
              className="font-cormorant font-light"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--gf-dark)" }}
            >
              Our Fields & <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>Facilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((g, i) => (
              <div
                key={i}
                className="img-zoom reveal aspect-[4/3]"
                data-delay={String(i * 60)}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{ background: "linear-gradient(to top, rgba(14,26,15,0.8), transparent)" }}
                >
                  <span className="text-white text-xs font-montserrat font-semibold uppercase tracking-widest">
                    {g.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="py-28 grain-overlay" style={{ background: "var(--gf-dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <div className="reveal-left">
              <div className="section-label mb-6" style={{ color: "var(--gf-gold)" }}>
                <span style={{ color: "var(--gf-gold)", fontSize: "11px", letterSpacing: "0.2em", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase" }}>
                  Contact Us
                </span>
              </div>
              <h2
                className="font-cormorant font-light text-white leading-tight mb-6"
                style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
              >
                Let's Build a{" "}
                <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>Strong Partnership</span>
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed mb-10">
                Our export team is ready to provide you with a competitive offer and support you at every step of cooperation.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Phone / WhatsApp", value: "+7 903 790 17 95", sub: "Mon – Fri: 9:00 – 18:00 (MSK)" },
                  { icon: "Mail", label: "Email", value: "gavrilovfoods.export@gmail.com", sub: "We reply within 24 hours" },
                  { icon: "MapPin", label: "Location", value: "Smolensk Region, Russia", sub: "EU export documentation available" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,151,58,0.15)", border: "1px solid rgba(201,151,58,0.3)" }}
                    >
                      <Icon name={c.icon} size={18} style={{ color: "var(--gf-gold)" }} />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-widest mb-1 font-montserrat">
                        {c.label}
                      </div>
                      <div className="text-white font-semibold text-[15px]">{c.value}</div>
                      <div className="text-white/40 text-xs mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { icon: "Percent", label: "Best Wholesale Prices" },
                  { icon: "RefreshCw", label: "Stable Supply All Year" },
                  { icon: "Award", label: "Quality You Can Rely On" },
                  { icon: "Handshake", label: "Long-term Partnership" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon name={b.icon} size={14} style={{ color: "var(--gf-gold)" }} />
                    <span className="text-white/55 text-xs font-montserrat">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal-right">
              <div
                className="p-8"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,151,58,0.2)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest mb-2 font-montserrat" style={{ color: "var(--gf-gold)" }}>
                  — Get a Quote —
                </div>
                <h3 className="font-cormorant text-2xl font-light text-white mb-1">
                  Request{" "}
                  <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>Export Offer</span>
                </h3>
                <p className="text-white/40 text-xs mb-8 font-montserrat">
                  Fill in the form and we'll get back to you within 24 hours with a detailed offer tailored to your needs.
                </p>

                <div className="space-y-4">
                  {[
                    { label: "Your Name", type: "text", placeholder: "John Smith" },
                    { label: "Company", type: "text", placeholder: "Import Co. Ltd" },
                    { label: "Country", type: "text", placeholder: "Germany, China, UAE..." },
                    { label: "Email", type: "email", placeholder: "john@company.com" },
                    { label: "Phone / WhatsApp", type: "tel", placeholder: "+49 123 456 789" },
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="block text-white/50 text-[11px] uppercase tracking-widest mb-1.5 font-montserrat">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-[var(--gf-gold)] transition-colors font-montserrat"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-white/50 text-[11px] uppercase tracking-widest mb-1.5 font-montserrat">
                      Products & Volume (optional)
                    </label>
                    <textarea
                      placeholder="Buckwheat 20t, Lentils 5t..."
                      rows={3}
                      className="w-full px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none transition-colors font-montserrat"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="btn-gold flex-1 justify-center">
                    Request Export Offer <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
                <a
                  href="https://wa.me/79037901795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white w-full mt-3 justify-center"
                  style={{ display: "flex" }}
                >
                  <Icon name="MessageCircle" size={16} />
                  Chat with Export Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer style={{ background: "#0a1509", borderTop: "1px solid rgba(201,151,58,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <Logo />
              <p className="mt-3 text-white/35 text-xs max-w-xs leading-relaxed font-montserrat">
                Premium organic grain export from Smolensk Region, Russia. EU certified. Worldwide supply.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-3 justify-center">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-white/35 hover:text-white/70 text-xs uppercase tracking-widest transition-colors font-montserrat"
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="text-right">
              <div className="text-white/70 text-sm font-semibold font-montserrat">+7 903 790 17 95</div>
              <div className="text-white/35 text-xs mt-1">gavrilovfoods.export@gmail.com</div>
              <div className="text-white/35 text-xs mt-0.5">www.gavrilovfoods.com</div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              {["Reliable Quality", "Transparent Process", "Sustainable Production", "Global Standards", "Long-term Partnership"].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-white/25 text-xs font-montserrat">
                  <Icon name="Check" size={11} style={{ color: "var(--gf-gold)", opacity: 0.5 }} />
                  {t}
                </div>
              ))}
            </div>
            <div className="text-white/20 text-xs font-montserrat">
              © 2024 Gavrilov Foods
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}