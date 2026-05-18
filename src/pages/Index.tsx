import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/i18n/useLanguage";

// Real farm photos — Gavrilov Organic Foods
const HERO_IMG =
  "https://cdn.poehali.dev/files/a50c2663-5204-4576-bf27-5c915a5981ae.jpg"; // buckwheat field in bloom
const PRODUCTS_IMG =
  "https://cdn.poehali.dev/files/f11386c9-4001-4940-9b3c-a7cd36827549.jpg"; // big bags in warehouse
const FACTORY_IMG =
  "https://cdn.poehali.dev/files/5b1944a0-cdf4-423e-9034-5ec0f929385c.jpg"; // processing equipment

const REF_CONTACT =
  "https://cdn.poehali.dev/files/943c789b-d4ed-418a-a36d-f3c15e7272ea.jpg"; // owner in field
const REF_PRIVATE =
  "https://cdn.poehali.dev/files/98d43280-321a-4078-bb4e-2cd8a7e71f5e.jpg"; // packaged goods on pallets
const REF_PROCESS =
  "https://cdn.poehali.dev/files/6b617da2-3106-4871-b5ff-2d574abb7a34.jpg"; // sowing in field
const REF_EXPORT =
  "https://cdn.poehali.dev/files/67bac509-ee17-498f-b58e-8f09c4af0a50.jpg"; // truck with big bags

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
    name: "BUCKWHEAT",
    organic: true,
    packaging: "25 / 50 kg bags or big bags",
    moq: "from 1 MT",
    origin: "Smolensk Region, Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/49906ef7-211c-4d64-beae-004e3518ef74.jpg",
  },
  {
    name: "GREEN BUCKWHEAT",
    organic: true,
    packaging: "25 / 50 kg bags or big bags",
    moq: "from 1 MT",
    origin: "Smolensk Region, Russia",
    img: "https://cdn.poehali.dev/files/2feefebc-e7a3-4fa1-b4ae-04ae4dbecc3c.png",
  },
  {
    name: "BUCKWHEAT FLOUR",
    organic: true,
    packaging: "25 kg bags",
    moq: "from 1 MT",
    origin: "Smolensk Region, Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/5aa6f984-f5f5-4f4e-afe2-85e236e0a871.jpg",
  },
  {
    name: "OAT FLAKES",
    organic: true,
    packaging: "25 kg bags",
    moq: "from 1 MT",
    origin: "Smolensk Region, Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/4e313381-f7ae-4934-8263-19f31994775f.jpg",
  },
  {
    name: "FLAXSEED",
    organic: true,
    packaging: "25 / 50 kg bags or big bags",
    moq: "from 1 MT",
    origin: "Smolensk Region, Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/6221103e-8fac-42c6-acda-82f48776aa1b.jpg",
  },
  {
    name: "RED LENTILS",
    organic: false,
    packaging: "25 / 50 kg bags",
    moq: "from 1 MT",
    origin: "Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/22e07f78-6ce7-4769-a3ff-370062a13ca2.jpg",
  },
  {
    name: "YELLOW PEAS",
    organic: false,
    packaging: "25 / 50 kg bags",
    moq: "from 1 MT",
    origin: "Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/98344303-4a85-427d-9dca-54dc796d32cd.jpg",
  },
  {
    name: "CHICKPEAS",
    organic: false,
    packaging: "25 / 50 kg bags",
    moq: "from 1 MT",
    origin: "Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/99258109-655c-4c20-a367-ff9baefaa524.jpg",
  },
  {
    name: "GREEN PEAS",
    organic: false,
    packaging: "25 / 50 kg bags",
    moq: "from 1 MT",
    origin: "Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/0f6296ad-99b5-4123-9acc-3349c6210930.jpg",
  },
  {
    name: "WHEAT",
    organic: false,
    packaging: "25 / 50 kg bags or big bags",
    moq: "from 1 MT",
    origin: "Russia",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/d8ce42e3-3088-4de2-83f1-662af34b4f05.jpg",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Own Farmland",
    desc: "10,000 + ha of fertile fields. Full control from seed to harvest.",
  },
  {
    num: "02",
    title: "Harvesting",
    desc: "Modern machinery and experienced team. Timely and efficient.",
  },
  {
    num: "03",
    title: "Processing",
    desc: "Advanced cleaning, sorting and quality control at every stage.",
  },
  {
    num: "04",
    title: "Storage",
    desc: "5,000 m² warehouse capacity. Safe, clean and well-maintained.",
  },
  {
    num: "05",
    title: "Packaging",
    desc: "200g–1000kg flexible formats. Private label design available.",
  },
  {
    num: "06",
    title: "Export",
    desc: "20/40 ft containers. EU documentation. Worldwide delivery.",
  },
];

const trustItems = [
  {
    icon: "ShieldCheck",
    label: "EU Organic Certified",
    desc: "Certified for global markets",
  },
  {
    icon: "Award",
    label: "Quality You Can Trust",
    desc: "Strict control at every stage",
  },
  {
    icon: "Container",
    label: "20/40 FT Container",
    desc: "FCL shipments worldwide",
  },
  {
    icon: "FileText",
    label: "Fast Documentation",
    desc: "All export docs handled professionally",
  },
  {
    icon: "Clock",
    label: "Reply in 24 Hours",
    desc: "Export team always ready",
  },
];

const privateLabel = [
  {
    icon: "Package",
    title: "Retail Packaging",
    size: "250g – 5kg",
    desc: "Custom design and printing options for your brand.",
  },
  {
    icon: "Boxes",
    title: "Big Bags",
    size: "500 – 1,000kg",
    desc: "Industrial bulk packaging for large volume supply.",
  },
  {
    icon: "Container",
    title: "Container Shipments",
    size: "20ft / 40ft",
    desc: "Full container loading (FCL) for safe and efficient global delivery.",
  },
  {
    icon: "Tag",
    title: "Private Label",
    size: "Concept → Shelf-ready",
    desc: "From product selection to ready-to-sell packaging.",
  },
];

const labelSteps = [
  { icon: "Wheat", title: "Product Selection" },
  { icon: "Palette", title: "Packaging & Design" },
  { icon: "ShieldCheck", title: "Certification & Labeling" },
  { icon: "Factory", title: "Production & QC" },
  { icon: "Ship", title: "Container Shipment" },
];

const galleryImages = [
  {
    src: "https://cdn.poehali.dev/files/4b5a57a3-7cdf-406e-8457-7140c7ed102e.jpg",
    label: "Own Fields",
  },
  {
    src: "https://cdn.poehali.dev/files/f11386c9-4001-4940-9b3c-a7cd36827549.jpg",
    label: "Products",
  },
  {
    src: "https://cdn.poehali.dev/files/5b1944a0-cdf4-423e-9034-5ec0f929385c.jpg",
    label: "Processing",
  },
  {
    src: "https://cdn.poehali.dev/files/67bac509-ee17-498f-b58e-8f09c4af0a50.jpg",
    label: "Export",
  },
  {
    src: "https://cdn.poehali.dev/files/6b617da2-3106-4871-b5ff-2d574abb7a34.jpg",
    label: "From Field",
  },
  {
    src: "https://cdn.poehali.dev/files/98d43280-321a-4078-bb4e-2cd8a7e71f5e.jpg",
    label: "Private Label",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Logo() {
  return (
    <img
      src="https://cdn.poehali.dev/files/98580a98-5226-4433-8666-a0e8765c865c.png"
      alt="Gavrilov Organic Foods"
      style={{ height: 52, width: "auto", objectFit: "contain" }}
    />
  );
}

const LANG_LABELS: Record<string, string> = { en: "EN", ru: "RU", es: "ES" };
const LANG_FLAGS: Record<string, string> = { en: "🇬🇧", ru: "🇷🇺", es: "🇲🇽" };

export default function Index() {
  useScrollReveal();
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [antadOpen, setAntadOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const NAV_LINKS = [
    { key: "about", href: "#about" },
    { key: "products", href: "#products" },
    { key: "organic", href: "#organic" },
    { key: "export", href: "#export" },
    { key: "certifications", href: "#certifications" },
    { key: "privateLabel", href: "#private-label" },
    { key: "gallery", href: "#gallery" },
    { key: "contact", href: "#contact" },
  ] as const;

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
    <div
      className="font-montserrat"
      style={{ background: "var(--gf-cream)", color: "var(--gf-text)" }}
    >
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
            {NAV_LINKS.map((l) => (
              <button
                key={l.key}
                onClick={() => scrollTo(l.href)}
                className="nav-link font-montserrat text-[12px] font-medium tracking-[0.06em] uppercase text-white/75 hover:text-white transition-colors"
              >
                {t.nav[l.key]}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* Language dropdown */}
            <div
              style={{ position: "relative" }}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setLangOpen(false);
                }
              }}
            >
              <button
                onClick={() => setLangOpen((v) => !v)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 5,
                  padding: "5px 9px",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,151,58,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
              >
                <span style={{ fontSize: 13 }}>{LANG_FLAGS[lang]}</span>
                {LANG_LABELS[lang]}
                <Icon name="ChevronDown" size={11} style={{ opacity: 0.6 }} />
              </button>
              {langOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    right: 0,
                    background: "rgba(14,26,15,0.98)",
                    border: "1px solid rgba(201,151,58,0.25)",
                    borderRadius: 6,
                    overflow: "hidden",
                    zIndex: 300,
                    minWidth: 90,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {(["en", "ru", "es"] as const).map((l) => (
                    <button
                      key={l}
                      tabIndex={0}
                      onMouseDown={(e) => { e.preventDefault(); setLang(l); setLangOpen(false); }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        width: "100%",
                        padding: "9px 14px",
                        background: l === lang ? "rgba(201,151,58,0.12)" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: l === lang ? "var(--gf-gold)" : "rgba(255,255,255,0.7)",
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        textAlign: "left",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => { if (l !== lang) e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                      onMouseLeave={(e) => { if (l !== lang) e.currentTarget.style.background = "transparent"; }}
                    >
                      <span style={{ fontSize: 14 }}>{LANG_FLAGS[l]}</span>
                      {LANG_LABELS[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="btn-gold text-[11px] py-2.5 px-5 whitespace-nowrap"
              onClick={() => scrollTo("#contact")}
            >
              {t.nav.requestQuote}
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden mobile-menu"
            style={{
              background: "var(--gf-dark)",
              borderTop: "1px solid rgba(201,151,58,0.2)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.key}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-white/80 hover:text-white font-montserrat text-sm uppercase tracking-widest transition-colors"
                >
                  {t.nav[l.key]}
                </button>
              ))}
              {/* Mobile lang switcher */}
              <div style={{ display: "flex", gap: 8, paddingTop: 4 }}>
                {(["en", "ru", "es"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "5px 10px",
                      borderRadius: 5,
                      border: "1px solid",
                      borderColor: l === lang ? "var(--gf-gold)" : "rgba(255,255,255,0.2)",
                      background: l === lang ? "rgba(201,151,58,0.12)" : "transparent",
                      color: l === lang ? "var(--gf-gold)" : "rgba(255,255,255,0.6)",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 11,
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ fontSize: 13 }}>{LANG_FLAGS[l]}</span>
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
              <button
                className="btn-gold mt-2"
                onClick={() => scrollTo("#contact")}
              >
                {t.nav.requestQuote}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        id="hero"
        style={{ position: "relative", background: "#0d1a0e" }}
      >
        {/* Fixed WhatsApp button — bottom right */}
        <a
          href="https://wa.me/79037901795"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Export Manager"
          style={{
            position: "fixed",
            right: 20,
            bottom: 24,
            zIndex: 200,
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        >
          <Icon name="MessageCircle" size={26} style={{ color: "#fff" }} />
        </a>

        {/* ANTAD Expo sticky button */}
        <button
          onClick={() => setAntadOpen(true)}
          title="ANTAD Expo 2026"
          style={{
            position: "fixed",
            right: 20,
            bottom: 86,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            gap: 7,
            background: "var(--gf-dark)",
            border: "1px solid rgba(201,151,58,0.45)",
            borderRadius: 26,
            padding: "9px 14px 9px 10px",
            cursor: "pointer",
            boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
            transition: "transform 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--gf-gold)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,151,58,0.45)";
          }}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>🇲🇽</span>
          <span
            style={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--gf-gold)",
              whiteSpace: "nowrap",
            }}
          >
            ANTAD 2026
          </span>
        </button>

        {/* ANTAD Popup */}
        {antadOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 500,
              background: "rgba(0,0,0,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={() => setAntadOpen(false)}
          >
            <div
              style={{
                background: "var(--gf-dark)",
                border: "1px solid rgba(201,151,58,0.3)",
                borderRadius: 12,
                padding: "36px 32px",
                maxWidth: 440,
                width: "100%",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setAntadOpen(false)}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 16,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 20,
                  lineHeight: 1,
                }}
              >
                ×
              </button>

              {/* Flag + label */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 22 }}>🇲🇽</span>
                <div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--gf-gold)",
                    }}
                  >
                    {t.antad.badge}
                  </div>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 28,
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                {t.antad.popupTitle}
              </h3>

              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                {t.antad.popupText}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                {t.antad.popupItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--gf-gold)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/79037901795?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20meeting%20at%20ANTAD%20Expo%202026"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  background: "var(--gf-gold)",
                  color: "#0e1a0f",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: 6,
                  padding: "14px 20px",
                }}
              >
                <Icon name="MessageCircle" size={16} />
                {t.antad.popupBtn}
              </a>
            </div>
          </div>
        )}

        {/* Main hero image block */}
        <div
          style={{
            position: "relative",
            minHeight: "calc(100vh - 64px)",
            overflow: "hidden",
          }}
        >
          <img
            src="https://cdn.poehali.dev/files/f6ccade7-e37d-408f-825a-a483aa548a17.jpg"
            alt="Gavrilov Foods buckwheat field"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Gradient: strong left dark → transparent right */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(10,16,10,0.97) 0%, rgba(10,16,10,0.82) 40%, rgba(10,16,10,0.35) 70%, rgba(10,16,10,0.1) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(10,16,10,0.6) 0%, transparent 40%)",
            }}
          />

          {/* Content */}
          <div
            className="hero-content max-w-7xl mx-auto px-6"
            style={{
              position: "relative",
              zIndex: 2,
              paddingTop: 80,
              paddingBottom: 48,
              minHeight: "calc(100vh - 64px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ maxWidth: 560 }}>
              {/* Label */}
              <div
                className="animate-fade-up"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gf-gold)",
                  marginBottom: 16,
                }}
              >
                {t.hero.badge}
              </div>

              {/* H1 */}
              <h1
                className="animate-fade-up delay-100"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 5vw, 68px)",
                  lineHeight: 1.1,
                  color: "#fff",
                  marginBottom: 0,
                }}
              >
                {t.hero.h1a}
                <br />
                <span style={{ color: "var(--gf-gold)" }}>
                  {t.hero.h1b}
                </span>
                <br />
                {t.hero.h1c}
              </h1>

              {/* Underline */}
              <div
                className="animate-fade-up delay-200"
                style={{
                  width: 48,
                  height: 2,
                  background: "var(--gf-gold)",
                  margin: "20px 0",
                }}
              />

              {/* Subtitle */}
              <p
                className="animate-fade-up delay-200"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                {t.hero.subtitle}
              </p>

              {/* 6 checkmarks in 2 cols */}
              <div
                className="hero-checks animate-fade-up delay-300"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px 24px",
                  marginBottom: 28,
                }}
              >
                {t.hero.checks.map((item, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "rgba(201,151,58,0.25)",
                        border: "1px solid var(--gf-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        name="Check"
                        size={10}
                        style={{ color: "var(--gf-gold)" }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* ANTAD badge */}
              <div
                className="animate-fade-up delay-300"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(201,151,58,0.08)",
                  border: "1px solid rgba(201,151,58,0.35)",
                  borderRadius: 6,
                  padding: "8px 14px",
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 14 }}>🇲🇽</span>
                <div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--gf-gold)",
                    }}
                  >
                    {t.hero.antadTitle}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.55)",
                      marginTop: 1,
                    }}
                  >
                    {t.hero.antadSub}
                  </div>
                </div>
                <button
                  onClick={() =>
                    document
                      .querySelector("#antad")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0e1a0f",
                    background: "var(--gf-gold)",
                    border: "none",
                    borderRadius: 4,
                    padding: "5px 10px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.hero.antadBtn}
                </button>
              </div>

              {/* Buttons */}
              <div
                className="hero-buttons animate-fade-up delay-400"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                <button
                  className="btn-gold"
                  style={{
                    flex: "1 1 auto",
                    justifyContent: "center",
                    minWidth: 0,
                  }}
                  onClick={() =>
                    document
                      .querySelector("#products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.hero.btnProducts} <Icon name="ArrowRight" size={16} />
                </button>
                <button
                  className="btn-outline-white"
                  style={{
                    flex: "1 1 auto",
                    justifyContent: "center",
                    minWidth: 0,
                  }}
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.hero.btnQuote}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom stats bar ── */}
        <div
          style={{
            background: "rgba(8,14,8,0.97)",
            borderTop: "1px solid rgba(201,151,58,0.2)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="hero-stats-bar"
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 1.3fr 1.3fr 1fr",
                gap: 0,
              }}
            >
              {/* EU Organic block */}
              <div
                style={{
                  padding: "18px 20px 18px 0",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <img
                  src="https://cdn.poehali.dev/files/e0686aa0-2df7-454a-b318-5e843ea52142.png"
                  alt="EU Organic"
                  style={{
                    width: 48,
                    height: 38,
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--gf-gold)",
                      marginBottom: 2,
                    }}
                  >
                    {t.statsBar.euOrganic}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.4,
                    }}
                  >
                    {t.statsBar.euTrace}
                    <br />
                    {t.statsBar.euChain}
                  </div>
                </div>
              </div>

              {/* 4 stats */}
              {[
                { icon: "Tractor", val: "10,000 ha", label: t.statsBar.farmland },
                { icon: "Warehouse", val: "10,000 – 15,000 MT", label: t.statsBar.annualProd },
                { icon: "Ship", val: "5,000 – 10,000 MT", label: t.statsBar.annualExport },
                { icon: "Globe", val: t.statsBar.exportMarkets, label: t.statsBar.europeChina },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "18px 20px",
                    borderRight:
                      i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Icon
                    name={s.icon}
                    size={28}
                    style={{
                      color: "var(--gf-gold)",
                      strokeWidth: 1.2,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontSize: 13,
                        color: "var(--gf-gold)",
                        lineHeight: 1.1,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 10,
                        color: "rgba(255,255,255,0.5)",
                        marginTop: 3,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section
        id="about"
        className="py-28"
        style={{ background: "var(--gf-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="section-label mb-6">{t.about.sectionLabel}</div>
              <h2
                className="font-cormorant font-light leading-tight mb-6"
                style={{
                  fontSize: "clamp(36px, 4vw, 58px)",
                  color: "var(--gf-dark)",
                }}
              >
                {t.about.h2a}<br />
                <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>
                  {t.about.h2b}
                </span>{" "}
                {t.about.h2c}
              </h2>
              <p
                className="text-[15px] leading-relaxed mb-5"
                style={{ color: "var(--gf-text-light)" }}
              >
                {t.about.p1}
              </p>
              <p
                className="text-[15px] leading-relaxed mb-8"
                style={{ color: "var(--gf-text-light)" }}
              >
                {t.about.p2}
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "MapPin", label: t.about.location },
                  { icon: "Globe", label: t.about.euDocs },
                  { icon: "Phone", label: t.about.phone },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--gf-text-light)" }}
                  >
                    <Icon
                      name={item.icon}
                      size={15}
                      style={{ color: "var(--gf-gold)" }}
                    />
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
                  <img
                    src={FACTORY_IMG}
                    alt="Gavrilov Processing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 px-6 py-4"
                  style={{ background: "var(--gf-dark)", color: "white" }}
                >
                  <div
                    className="font-cormorant text-xl font-semibold"
                    style={{ color: "var(--gf-gold)" }}
                  >
                    {t.about.imgCaption}
                  </div>
                  <div className="text-white/60 text-xs mt-0.5 font-montserrat">
                    {t.about.imgSub}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROOF OF SCALE ═══════════════ */}
      <section className="py-20" style={{ background: "var(--gf-cream-2)" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10 reveal">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span
                style={{
                  display: "block",
                  width: 40,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
              <span
                style={{
                  color: "var(--gf-gold)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {t.proofOfScale.label}
              </span>
              <span
                style={{
                  display: "block",
                  width: 40,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
            </div>
            <h2
              className="font-cormorant font-light mb-3"
              style={{
                fontSize: "clamp(30px, 4vw, 52px)",
                color: "var(--gf-dark)",
              }}
            >
              {t.proofOfScale.h2}
            </h2>
            <p
              className="text-sm font-montserrat"
              style={{ color: "var(--gf-text-light)" }}
            >
              {t.proofOfScale.sub}
            </p>
          </div>

          {/* 4 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 — Production */}
            <div
              className="reveal relative overflow-hidden flex flex-col"
              data-delay="0"
              style={{
                background: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.07)",
                minHeight: 480,
              }}
            >
              <div className="p-6 pb-0 relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{ background: "var(--gf-gold)" }}
                  >
                    <Icon
                      name="Tractor"
                      size={18}
                      style={{ color: "#0e1a0f" }}
                    />
                  </div>
                  <span
                    className="font-montserrat font-bold text-[12px] uppercase tracking-widest"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {t.proofOfScale.card1.title}
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div
                      className="font-cormorant text-[28px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card1.stat1}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card1.stat1sub}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card1.stat2}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card1.stat2sub}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card1.stat3}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card1.stat3sub}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card1.stat4}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card1.stat4sub}
                    </div>
                  </div>
                </div>
              </div>
              {/* Fade into image */}
              <div className="flex-1 relative mt-6" style={{ minHeight: 160 }}>
                <div
                  className="absolute inset-x-0 top-0 z-10 h-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, #fff 0%, transparent 100%)",
                  }}
                />
                <img
                  src="https://cdn.poehali.dev/files/7722b13d-db60-4579-9108-cad1b37de41d.jpg"
                  alt="Own farmland"
                  className="w-full h-full object-cover"
                  style={{
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                  }}
                />
              </div>
            </div>

            {/* Card 2 — Export */}
            <div
              className="reveal relative overflow-hidden flex flex-col"
              data-delay="100"
              style={{
                background: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.07)",
                minHeight: 480,
              }}
            >
              <div className="p-6 pb-0 relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{ background: "var(--gf-gold)" }}
                  >
                    <Icon name="Globe" size={18} style={{ color: "#0e1a0f" }} />
                  </div>
                  <span
                    className="font-montserrat font-bold text-[12px] uppercase tracking-widest"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {t.proofOfScale.card2.title}
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div
                      className="font-cormorant text-[28px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card2.stat2}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card2.stat2sub}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card2.stat1}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card2.stat1sub}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative mt-6" style={{ minHeight: 200 }}>
                <div
                  className="absolute inset-x-0 top-0 z-10 h-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, #fff 0%, transparent 100%)",
                  }}
                />
                <img
                  src="https://cdn.poehali.dev/files/e99123ff-3cb5-49ff-bdc5-2be03363b2b0.jpg"
                  alt="Grain shipment harvest"
                  className="w-full h-full object-cover"
                  style={{
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                  }}
                />
              </div>
            </div>

            {/* Card 3 — Packaging */}
            <div
              className="reveal relative overflow-hidden flex flex-col"
              data-delay="200"
              style={{
                background: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.07)",
                minHeight: 480,
              }}
            >
              <div className="p-6 pb-0 relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{ background: "var(--gf-gold)" }}
                  >
                    <Icon
                      name="Package"
                      size={18}
                      style={{ color: "#0e1a0f" }}
                    />
                  </div>
                  <span
                    className="font-montserrat font-bold text-[12px] uppercase tracking-widest"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {t.proofOfScale.card3.title}
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div
                      className="font-cormorant text-[28px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card3.stat1}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card3.stat1sub}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card3.stat2}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card3.stat2sub}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card3.stat3}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card3.stat3sub}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative mt-6" style={{ minHeight: 180 }}>
                <div
                  className="absolute inset-x-0 top-0 z-10 h-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, #fff 0%, transparent 100%)",
                  }}
                />
                <img
                  src="https://cdn.poehali.dev/files/de1e27a0-f677-4f7c-b4f6-f54a3d8c5abc.jpg"
                  alt="Big bags packaging"
                  className="w-full h-full object-cover"
                  style={{
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                  }}
                />
              </div>
            </div>

            {/* Card 4 — MOQ & Orders */}
            <div
              className="reveal relative overflow-hidden flex flex-col"
              data-delay="300"
              style={{
                background: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.07)",
                minHeight: 480,
              }}
            >
              <div className="p-6 pb-0 relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{ background: "var(--gf-gold)" }}
                  >
                    <Icon
                      name="ClipboardList"
                      size={18}
                      style={{ color: "#0e1a0f" }}
                    />
                  </div>
                  <span
                    className="font-montserrat font-bold text-[12px] uppercase tracking-widest"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {t.proofOfScale.card4.title}
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div
                      className="font-cormorant text-[28px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card4.stat1}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card4.stat1sub}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.proofOfScale.card4.stat2}
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {t.proofOfScale.card4.stat2sub}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative mt-6" style={{ minHeight: 220 }}>
                <div
                  className="absolute inset-x-0 top-0 z-10 h-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, #fff 0%, transparent 100%)",
                  }}
                />
                <img
                  src="https://cdn.poehali.dev/files/f086c655-d4e2-4ed8-a064-71baf53ae9a9.jpg"
                  alt="Warehouse bags storage"
                  className="w-full h-full object-cover"
                  style={{
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LOGISTICS & INFRASTRUCTURE ═══════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gf-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div>
            {/* Content */}
            <div className="py-16 px-6 lg:px-12 reveal-left">
              <div
                className="text-[10px] font-bold uppercase tracking-widest mb-4 font-montserrat"
                style={{ color: "var(--gf-gold)" }}
              >
                {t.logistics.infraLabel}
              </div>
              <h2
                className="font-cormorant font-light leading-tight mb-5"
                style={{
                  fontSize: "clamp(34px, 4vw, 56px)",
                  color: "var(--gf-dark)",
                }}
              >
                {t.logistics.infraH2}
              </h2>
              <p
                className="text-[14px] leading-relaxed mb-10 max-w-2xl font-montserrat"
                style={{ color: "var(--gf-text-light)" }}
              >
                {t.logistics.infraP}
              </p>

              {/* 4 features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {(t.logistics.infraFeatures as { title: string; desc: string }[]).map((f, i) => ({
                  icon: ["Warehouse", "Factory", "ScanLine", "Container"][i],
                  title: f.title,
                  desc: f.desc,
                })).map((f, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2 min-w-0"
                  >
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{
                        width: 52,
                        height: 52,
                        background: "rgba(14,26,15,0.07)",
                        border: "1px solid rgba(14,26,15,0.12)",
                      }}
                    >
                      <Icon
                        name={f.icon}
                        size={26}
                        style={{ color: "var(--gf-dark)", strokeWidth: 1.2 }}
                      />
                    </div>
                    <div
                      className="font-montserrat font-bold text-[10px] uppercase tracking-wider leading-tight"
                      style={{ color: "var(--gf-dark)", wordBreak: "break-word", hyphens: "auto" }}
                      lang="ru"
                    >
                      {f.title}
                    </div>
                    <div
                      className="text-[10px] leading-relaxed font-montserrat"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {f.desc}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="btn-gold"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.logistics.btn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PRODUCTS ═══════════════ */}
      <section
        id="products"
        className="py-20"
        style={{ background: "var(--gf-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span
                style={{
                  display: "block",
                  width: 40,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
              <span
                style={{
                  color: "var(--gf-gold)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {t.products.sectionLabel}
              </span>
              <span
                style={{
                  display: "block",
                  width: 40,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
            </div>
            <h2
              className="font-cormorant font-semibold leading-tight mb-3"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "var(--gf-dark)",
              }}
            >
              {t.products.h2.split('\n')[0]}
              <br />
              {t.products.h2.split('\n')[1]}
            </h2>
            <p
              className="text-sm"
              style={{
                color: "var(--gf-text-light)",
                fontFamily: "Montserrat",
              }}
            >
              {t.products.sub}
            </p>
          </div>

          {/* Product grid — 5 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="product-card reveal bg-white"
                data-delay={String(i * 50)}
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                {/* Product image */}
                <div className="relative img-zoom aspect-square overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  {p.organic && (
                    <div
                      className="absolute top-2 right-2 flex items-center justify-center"
                      style={{
                        background: "#fff",
                        borderRadius: 4,
                        padding: "2px 4px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
                      }}
                      title="EU Organic Certified"
                    >
                      <img
                        src="https://cdn.poehali.dev/files/e0686aa0-2df7-454a-b318-5e843ea52142.png"
                        alt="EU Organic"
                        style={{ width: 32, height: 26, objectFit: "contain" }}
                      />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  <div
                    className="font-montserrat font-bold text-[12px] tracking-wide mb-3"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {t.products.names[p.name as keyof typeof t.products.names] ?? p.name}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      {p.organic ? (
                        <img
                          src="https://cdn.poehali.dev/files/e0686aa0-2df7-454a-b318-5e843ea52142.png"
                          alt="EU Organic"
                          style={{
                            width: 22,
                            height: 18,
                            objectFit: "contain",
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <Icon
                          name="Leaf"
                          size={12}
                          style={{
                            color: "var(--gf-text-light)",
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <span
                        className="text-[11px] leading-tight"
                        style={{
                          color: "var(--gf-text-light)",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {p.organic ? t.products.organicAvail : t.products.conventional}
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Icon
                        name="Package"
                        size={12}
                        style={{
                          color: "var(--gf-text-light)",
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        className="text-[11px] leading-tight"
                        style={{
                          color: "var(--gf-text-light)",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {p.packaging}
                      </span>
                    </div>
                  </div>

                  <div
                    className="mt-3 pt-2.5"
                    style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <div className="mb-1.5">
                      <span
                        className="text-[11px] font-montserrat"
                        style={{ color: "var(--gf-text-light)" }}
                      >
                        {t.products.moqLabel}{" "}
                      </span>
                      <span
                        className="text-[12px] font-bold font-montserrat"
                        style={{ color: "var(--gf-gold)" }}
                      >
                        {t.products.moqValue}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon
                        name="MapPin"
                        size={10}
                        style={{ color: "var(--gf-text-light)", flexShrink: 0 }}
                      />
                      <span
                        className="text-[10px] font-montserrat"
                        style={{ color: "var(--gf-text-light)" }}
                      >
                        {p.origin}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features bar */}
          <div
            className="mt-12 py-8 px-6 reveal"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {t.products.features.map((f, i) => {
                const icons = ["ShieldCheck", "Package", "Tag", "Truck", "FileText", "DollarSign"];
                return (
                <div key={i} className="flex flex-col items-start gap-2">
                  <Icon
                    name={icons[i]}
                    size={28}
                    style={{ color: "var(--gf-dark)", strokeWidth: 1.2 }}
                  />
                  <div
                    className="font-montserrat font-bold text-[11px] uppercase tracking-wide"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {f.title}
                  </div>
                  <div
                    className="text-[11px] leading-relaxed"
                    style={{
                      color: "var(--gf-text-light)",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {f.desc}
                  </div>
                </div>
              );})}
            </div>
          </div>

          {/* Supply chain block — stacked on mobile, side-by-side on desktop */}
          <div
            className="mt-8 reveal"
            style={{
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 12,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {/* Top/Left: text — full width on mobile, fits any language */}
            <div className="p-5 sm:p-6 md:p-8 lg:grid lg:grid-cols-2 lg:gap-0 lg:p-0">
              <div className="lg:p-8 flex flex-col gap-3 lg:gap-4">
                <div
                  className="font-montserrat font-bold uppercase tracking-widest"
                  style={{ color: "var(--gf-gold)", fontSize: 10 }}
                >
                  {t.logistics.label}
                </div>
                <h3
                  className="font-cormorant font-semibold"
                  style={{
                    fontSize: "clamp(16px, 4.2vw, 32px)",
                    lineHeight: 1.25,
                    color: "var(--gf-dark)",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                    hyphens: "auto",
                    maxWidth: "100%",
                  }}
                  lang="ru"
                >
                  {t.logistics.h2}
                </h3>
                <p
                  className="font-montserrat"
                  style={{
                    fontSize: 12,
                    lineHeight: 1.55,
                    color: "var(--gf-text-light)",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                    hyphens: "auto",
                    maxWidth: "100%",
                  }}
                  lang="ru"
                >
                  {t.logistics.p}
                </p>
                <button
                  className="btn-outline-dark self-start mt-2"
                  onClick={() =>
                    document
                      .querySelector("#about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.logistics.btn}
                </button>
              </div>

              {/* Right: 4 image tiles — bright gold icons */}
              <div className="grid grid-cols-2 mt-5 lg:mt-0">
                {t.logistics.tiles.map((tile, i) => {
                  const imgs = [
                    HERO_IMG,
                    FACTORY_IMG,
                    "https://cdn.poehali.dev/files/fa420cdb-c1a0-490e-a2ea-6b3197b248b7.jpg",
                    "https://cdn.poehali.dev/files/6d95a4e4-3a28-40a8-868f-f1e65151ade3.jpg",
                  ];
                  const icons = ["Wheat", "Settings", "Package", "Truck"];
                  return (
                    <div
                      key={i}
                      className="relative img-zoom overflow-hidden"
                      style={{ aspectRatio: "1/1" }}
                    >
                      <img
                        src={imgs[i]}
                        alt={tile.label}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: 0.6 }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "rgba(14,26,15,0.55)" }}
                      />
                      <div
                        className="absolute inset-0 flex flex-col justify-end p-3 md:p-4"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(14,26,15,0.95) 0%, rgba(14,26,15,0.4) 55%, transparent 100%)",
                        }}
                      >
                        {/* BRIGHT solid gold icon */}
                        <div
                          className="flex items-center justify-center rounded-full mb-2 flex-shrink-0"
                          style={{
                            width: 40,
                            height: 40,
                            background: "var(--gf-gold)",
                            boxShadow: "0 4px 12px rgba(201,151,58,0.5)",
                          }}
                        >
                          <Icon
                            name={icons[i]}
                            size={20}
                            style={{ color: "#0e1a0f", strokeWidth: 2.2 }}
                          />
                        </div>
                        <div
                          className="text-white font-bold uppercase font-montserrat leading-tight"
                          style={{ fontSize: 11, letterSpacing: "0.04em" }}
                        >
                          {tile.label}
                        </div>
                        <div
                          className="text-white/85 font-montserrat leading-tight mt-1 hidden sm:block"
                          style={{ fontSize: 10 }}
                        >
                          {tile.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Download catalog CTA */}
          <div
            className="mt-8 p-8 flex flex-col md:flex-row items-center justify-between gap-6 reveal"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <div className="flex items-center gap-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gf-dark)" }}
              >
                <Icon
                  name="BookOpen"
                  size={26}
                  style={{ color: "var(--gf-gold)" }}
                />
              </div>
              <div>
                <div
                  className="font-cormorant font-semibold text-2xl mb-1"
                  style={{ color: "var(--gf-dark)" }}
                >
                  {t.catalogCta.title}
                </div>
                <div
                  className="text-[13px]"
                  style={{
                    color: "var(--gf-text-light)",
                    fontFamily: "Montserrat",
                  }}
                >
                  {t.catalogCta.sub}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <a
                href="https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/bucket/aa3adcbf-29da-4c95-9a3f-542947fe7ae7.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-gold"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <Icon name="Download" size={16} />
                {t.catalogCta.btn}
              </a>
              <span
                className="text-[10px] font-montserrat"
                style={{ color: "var(--gf-text-light)" }}
              >
                {t.catalogCta.note}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ORGANIC / CERTIFICATIONS ═══════════════ */}
      <section
        id="organic"
        className="py-16"
        style={{ background: "var(--gf-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* ── Row 1: Hero left + Certified right ── */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Left: dark hero card */}
            <div
              className="relative rounded-sm overflow-hidden reveal-left"
              style={{ minHeight: 340 }}
            >
              <img
                src={HERO_IMG}
                alt="Organic Fields"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.55 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(14,26,15,0.92) 40%, rgba(14,26,15,0.55) 100%)",
                }}
              />
              <div
                className="relative z-10 p-10 flex flex-col justify-between h-full"
                style={{ minHeight: 340 }}
              >
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-4 font-montserrat"
                    style={{ color: "var(--gf-gold)" }}
                  >
                    {t.organic.sectionLabel}
                  </div>
                  <h2
                    className="font-cormorant font-semibold text-white leading-tight mb-4"
                    style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
                  >
                    {t.organic.h2a}<br />
                    <span
                      style={{ color: "var(--gf-gold)", fontStyle: "italic" }}
                    >
                      {t.organic.h2b}
                    </span>
                  </h2>
                  <div
                    className="w-10 h-0.5 mb-5"
                    style={{ background: "var(--gf-gold)" }}
                  />
                  <p className="text-white/65 text-[14px] leading-relaxed max-w-xs font-montserrat">
                    {t.organic.p}
                  </p>
                </div>

                {/* Bottom info box */}
                <div
                  className="mt-8 flex items-center gap-4 p-4"
                  style={{
                    border: "1px solid rgba(201,151,58,0.4)",
                    background: "rgba(201,151,58,0.07)",
                  }}
                >
                  <Icon
                    name="Leaf"
                    size={28}
                    style={{ color: "var(--gf-gold)", flexShrink: 0 }}
                  />
                  <p className="text-white/75 text-[13px] leading-snug font-montserrat">
                    {t.organic.wholesaleNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: certified panel */}
            <div className="reveal-right flex flex-col gap-5">
              {/* Top label */}
              <div className="flex items-center gap-3">
                <span
                  style={{
                    color: "var(--gf-gold)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {t.organic.certifiedOrganic}
                </span>
                <span
                  style={{
                    display: "block",
                    width: 40,
                    height: 1,
                    background: "var(--gf-gold)",
                  }}
                />
              </div>

              <h2
                className="font-cormorant leading-tight"
                style={{
                  fontSize: "clamp(30px, 3vw, 48px)",
                  color: "var(--gf-dark)",
                  fontWeight: 400,
                }}
              >
                {t.organic.euCertifiedTitle}
              </h2>

              {/* Checkmarks */}
              <div className="space-y-3">
                {t.organic.checks.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--gf-dark)" }}
                    >
                      <Icon
                        name="Check"
                        size={13}
                        style={{ color: "var(--gf-gold)" }}
                      />
                    </div>
                    <span
                      className="text-[14px] font-montserrat"
                      style={{ color: "var(--gf-text)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* EU Organic certified badge */}
              <div
                className="flex items-center gap-4 p-4 mt-2"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <img
                  src="https://cdn.poehali.dev/files/e0686aa0-2df7-454a-b318-5e843ea52142.png"
                  alt="EU Organic Certified"
                  className="w-16 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <div
                    className="font-montserrat font-bold text-[13px] uppercase tracking-wide mb-0.5"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {t.organic.euCertifiedBadge}
                  </div>
                  <div
                    className="text-[12px] font-montserrat"
                    style={{ color: "var(--gf-text-light)" }}
                  >
                    {t.organic.euCertifiedSub}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Row 2: Organic products grid ── */}
          <div className="mb-6 reveal">
            <div className="flex items-center gap-4 mb-5 justify-center">
              <span
                style={{
                  display: "block",
                  width: 40,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
              <span
                style={{
                  color: "var(--gf-gold)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {t.organic.ourOrganicProducts}
              </span>
              <span
                style={{
                  display: "block",
                  width: 40,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* 4 organic product cards */}
              {(t.organic.organicProducts as { name: string; packaging: string }[]).map((prod, i) => {
                const imgs = [
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/49906ef7-211c-4d64-beae-004e3518ef74.jpg",
                  "https://cdn.poehali.dev/files/72e6e07c-de60-4be9-8cd7-78cfed2c6de0.png",
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/5aa6f984-f5f5-4f4e-afe2-85e236e0a871.jpg",
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/4e313381-f7ae-4934-8263-19f31994775f.jpg",
                ];
                const p = { name: prod.name, packaging: prod.packaging, img: imgs[i] };
                return (
                <div
                  key={i}
                  className="product-card bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <div className="relative aspect-[4/3] img-zoom overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                    <img
                      src="https://cdn.poehali.dev/files/e0686aa0-2df7-454a-b318-5e843ea52142.png"
                      alt="EU Organic"
                      className="absolute top-2 right-2 w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <div
                      className="font-montserrat font-bold text-[11px] tracking-wide mb-2"
                      style={{ color: "var(--gf-dark)" }}
                    >
                      {p.name}
                    </div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon
                        name="Leaf"
                        size={11}
                        style={{ color: "var(--gf-text-light)", flexShrink: 0 }}
                      />
                      <span
                        className="text-[11px] font-montserrat"
                        style={{ color: "var(--gf-text-light)" }}
                      >
                        {t.organic.organicLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Icon
                        name="Package"
                        size={11}
                        style={{ color: "var(--gf-text-light)", flexShrink: 0 }}
                      />
                      <span
                        className="text-[11px] font-montserrat"
                        style={{ color: "var(--gf-text-light)" }}
                      >
                        {p.packaging}
                      </span>
                    </div>
                    <div
                      className="text-[11px] font-bold font-montserrat"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {t.organic.moqLabel}
                    </div>
                  </div>
                </div>
              ); })}

              {/* 5th: Conventional range card */}
              <div
                className="product-card flex flex-col justify-between p-5"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <div>
                  <div
                    className="font-montserrat font-bold text-[12px] uppercase tracking-wide mb-4"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {t.organic.conventionalRange}
                  </div>
                  <Icon
                    name="Wheat"
                    size={36}
                    style={{
                      color: "var(--gf-dark)",
                      strokeWidth: 1,
                      marginBottom: 12,
                    }}
                  />
                  <p
                    className="text-[12px] leading-relaxed font-montserrat mb-4"
                    style={{ color: "var(--gf-text-light)" }}
                  >
                    {t.organic.conventionalText}
                  </p>
                </div>
                <button
                  className="btn-outline-dark text-[11px] py-2.5 px-4 w-full justify-center"
                  onClick={() =>
                    document
                      .querySelector("#products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.organic.viewProducts} <Icon name="ArrowRight" size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Row 3: From Field to Your Table ── */}
          <div
            className="reveal"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <div
              className="p-6 border-b"
              style={{ borderColor: "rgba(0,0,0,0.06)" }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span
                    style={{
                      color: "var(--gf-gold)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {t.organic.supplyChainLabel}
                  </span>
                </div>
                <p
                  className="text-[13px] font-montserrat"
                  style={{ color: "var(--gf-text-light)" }}
                >
                  {t.organic.supplyChainSub}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2">
              {/* Left: 5 icons */}
              <div
                className="p-6 grid grid-cols-3 sm:grid-cols-5 gap-4 items-start border-r"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}
              >
                {t.organic.chainItems.map((f, i) => {
                  const chainIcons = ["Sun", "Tractor", "Factory", "ScanLine", "Ship"];
                  return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <Icon
                      name={chainIcons[i]}
                      size={28}
                      style={{ color: "var(--gf-dark)", strokeWidth: 1.2 }}
                    />
                    <div
                      className="font-montserrat font-bold text-[11px]"
                      style={{ color: "var(--gf-dark)" }}
                    >
                      {f.title}
                    </div>
                    <div
                      className="text-[10px] font-montserrat leading-tight"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {f.desc}
                    </div>
                  </div>
                );})}
              </div>

              {/* Right: 5 image tiles — horizontal scroll on mobile */}
              <div className="overflow-x-auto">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, minmax(130px, 1fr))",
                    minWidth: 420,
                  }}
                >
                  {[
                    "https://cdn.poehali.dev/files/4b9c64c5-d74c-4850-9a9b-8aac0bae6ef5.jpg",
                    "https://cdn.poehali.dev/files/dd72c0fc-a09c-42fb-aa5b-4f8d5bca901a.jpg",
                    "https://cdn.poehali.dev/files/f11386c9-4001-4940-9b3c-a7cd36827549.jpg",
                    "https://cdn.poehali.dev/files/6ebe549e-c65d-458a-9a25-7388c52a2e06.jpg",
                    "https://cdn.poehali.dev/files/0ef79656-d415-44e0-82f1-f24accc00604.jpg",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="relative img-zoom overflow-hidden"
                      style={{ height: 180 }}
                    >
                      <img
                        src={img}
                        alt={t.organic.chainTiles[i]}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "rgba(14,26,15,0.5)" }}
                      />
                      {i < 4 && (
                        <div
                          className="absolute right-0 top-1/2 z-10 w-5 h-5 rounded-full hidden sm:flex items-center justify-center"
                          style={{
                            background: "var(--gf-gold)",
                            transform: "translateY(-50%) translateX(50%)",
                          }}
                        >
                          <Icon
                            name="ChevronRight"
                            size={11}
                            style={{ color: "#0e1a0f" }}
                          />
                        </div>
                      )}
                      <div
                        className="absolute bottom-0 left-0 right-0 px-2 py-3 z-10"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(14,26,15,0.85) 0%, transparent 100%)",
                        }}
                      >
                        <div
                          className="text-white font-montserrat font-bold uppercase leading-tight text-center"
                          style={{ fontSize: 9, letterSpacing: "0.06em" }}
                        >
                          {t.organic.chainTiles[i]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Row 4: Download CTA ── */}
          <div
            className="mt-6 p-6 flex flex-col md:flex-row items-center justify-between gap-6 reveal"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gf-dark)" }}
              >
                <Icon
                  name="FileText"
                  size={22}
                  style={{ color: "var(--gf-gold)" }}
                />
              </div>
              <div>
                <div
                  className="font-cormorant font-semibold text-xl mb-0.5"
                  style={{ color: "var(--gf-dark)" }}
                >
                  {t.organic.documents}
                </div>
                <div
                  className="text-[12px] font-montserrat"
                  style={{ color: "var(--gf-text-light)" }}
                >
                  {t.organic.documentsSub}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0 flex-wrap">
              <a
                href="https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/bucket/90d652c1-a4f3-4634-b1a8-9e8d18add35f.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-gold"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Icon name="Download" size={16} />
                {t.organic.certBtn}
              </a>
              <a
                href="https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/bucket/d51dc65b-3784-485d-aff2-1df52727a8f8.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-gold"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Icon name="Download" size={16} />
                {t.organic.specBtn}
              </a>
              <img
                src={PRODUCTS_IMG}
                alt=""
                className="w-24 h-16 object-cover rounded-sm hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPORT ═══════════════ */}
      <section id="export" className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* ── Hero banner: full-width image + overlay text ── */}
          <div
            className="relative overflow-hidden mb-10 reveal"
            style={{ borderRadius: 12, minHeight: 340 }}
          >
            <img
              src={HERO_IMG}
              alt="From Field to Export"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.5 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(14,26,15,0.97) 0%, rgba(14,26,15,0.92) 60%, rgba(14,26,15,0.75) 100%)",
              }}
            />
            <div className="relative z-10 p-6 md:p-14">
              <div className="flex items-center gap-3 mb-3">
                <span
                  style={{
                    color: "var(--gf-gold)",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {t.export.label}
                </span>
                <Icon
                  name="Leaf"
                  size={14}
                  style={{ color: "var(--gf-gold)" }}
                />
              </div>
              <h2
                className="font-cormorant font-bold text-white leading-tight mb-4"
                style={{
                  fontSize: "clamp(26px, 5vw, 84px)",
                  letterSpacing: "-0.01em",
                  maxWidth: "100%",
                  wordBreak: "break-word",
                  hyphens: "auto",
                }}
                lang="ru"
              >
                {t.export.h2.split('\n')[0]}
                <br />
                <span style={{ fontSize: "clamp(22px, 4vw, 68px)" }}>
                  {t.export.h2.split('\n')[1]}
                </span>
              </h2>
              <p className="text-white/70 text-[13px] md:text-[14px] leading-relaxed mb-6 font-montserrat" style={{ maxWidth: 560 }}>
                {t.export.p}
              </p>
              {/* 4 pillars */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                {t.export.pillars.map((p, i) => {
                  const pillarIcons = ["Sprout", "FileCheck", "Package", "Container"];
                  return (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(201,151,58,0.22)",
                        border: "1px solid rgba(201,151,58,0.45)",
                      }}
                    >
                      <Icon
                        name={pillarIcons[i]}
                        size={20}
                        style={{
                          color: "var(--gf-gold)",
                          strokeWidth: 1.5,
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <div className="font-montserrat font-bold text-[10px] uppercase tracking-wide text-white leading-tight">
                        {p.title}
                      </div>
                      <div className="text-white/60 text-[10px] font-montserrat leading-snug hidden md:block">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                );})}
              </div>
            </div>
          </div>

          {/* ── Our Activities — square 2x2 on mobile, 4-in-row on desktop ── */}
          <div className="mb-10 reveal">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span style={{ display: "block", width: 36, height: 1, background: "var(--gf-gold)" }} />
              <span
                style={{
                  color: "var(--gf-gold)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {t.export.activitiesLabel}
              </span>
              <span style={{ display: "block", width: 36, height: 1, background: "var(--gf-gold)" }} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: "https://cdn.poehali.dev/files/a6468418-4211-4d99-84c8-c706aca290f7.jpg", alt: "Combine harvester" },
                { src: HERO_IMG, alt: "Fields" },
                { src: "https://cdn.poehali.dev/files/6d95a4e4-3a28-40a8-868f-f1e65151ade3.jpg", alt: "Big bags storage" },
                { src: "https://cdn.poehali.dev/files/9f167f2e-35ae-452b-b29e-bd405a27f0ef.jpg", alt: "Grain warehouse" },
              ].map((photo, i) => (
                <div
                  key={i}
                  className="img-zoom overflow-hidden"
                  style={{ borderRadius: 10, aspectRatio: "1/1", position: "relative" }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── 6-step process ── */}
          <div
            className="mb-10 reveal hidden md:block"
            style={{
              background: "var(--gf-cream)",
              borderRadius: 12,
              padding: "32px 28px",
            }}
          >
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
              {t.export.steps.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="font-montserrat text-[13px]"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      {s.num}
                    </span>
                    {i < 5 && (
                      <Icon
                        name="ArrowRight"
                        size={12}
                        style={{ color: "var(--gf-gold)", opacity: 0.5 }}
                      />
                    )}
                  </div>
                  <div
                    className="font-montserrat font-bold text-[11px] uppercase tracking-wide mb-1.5"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {s.title}
                  </div>
                  <div
                    className="text-[11px] leading-relaxed font-montserrat"
                    style={{ color: "var(--gf-text-light)" }}
                  >
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Quality Packaging hero block ── */}
          <div
            className="reveal mb-6"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div className="grid md:grid-cols-2">
              {/* Left: text */}
              <div style={{ padding: "36px 36px 36px" }}>
                <div
                  className="flex items-center gap-2 mb-4"
                  style={{ color: "var(--gf-gold)" }}
                >
                  <Icon name="Package" size={14} />
                  <span className="font-montserrat font-bold text-[10px] uppercase tracking-widest">
                    {t.export.packagingLabel}
                  </span>
                </div>
                <h3
                  className="font-cormorant leading-tight mb-4"
                  style={{
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 400,
                    color: "var(--gf-dark)",
                  }}
                >
                  {t.export.packagingH3.split('\n')[0]}
                  <br />
                  {t.export.packagingH3.split('\n')[1]}
                </h3>
                <p
                  className="font-montserrat text-[13px] leading-relaxed mb-6"
                  style={{ color: "var(--gf-text-light)", maxWidth: 360 }}
                >
                  {t.export.packagingP}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {t.export.packagingFeatures.map((label, i) => {
                    const pfIcons = ["Target", "Shield", "ShieldCheck"];
                    return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon
                        name={pfIcons[i]}
                        size={14}
                        style={{ color: "var(--gf-gold)" }}
                      />
                      <span
                        className="font-montserrat text-[11px] font-bold uppercase tracking-wide"
                        style={{ color: "var(--gf-dark)" }}
                      >
                        {label}
                      </span>
                    </div>
                  );})}
                </div>
                <button
                  className="btn-gold text-[11px]"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.export.packagingBtn} <Icon name="ArrowRight" size={14} />
                </button>
                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div
                    className="font-montserrat font-bold text-[10px] uppercase tracking-widest mb-1"
                    style={{ color: "var(--gf-text-light)" }}
                  >
                    {t.export.packagingRange}
                  </div>
                  <div
                    className="font-cormorant text-[28px]"
                    style={{ color: "var(--gf-gold)", fontWeight: 600 }}
                  >
                    {t.footer.packagingRangeLabel}
                  </div>
                  <div
                    className="font-montserrat text-[11px]"
                    style={{ color: "var(--gf-text-light)" }}
                  >
                    {t.export.packagingRangeSub}
                  </div>
                </div>
              </div>
              {/* Right: photo */}
              <div style={{ minHeight: 340, overflow: "hidden" }}>
                <img
                  src="https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg"
                  alt="Packaging equipment"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Packaging Formats ── */}
          <div
            className="reveal mb-6"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 10,
              padding: "32px 28px",
            }}
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span
                  style={{
                    display: "block",
                    width: 36,
                    height: 1,
                    background: "var(--gf-gold)",
                  }}
                />
                <span
                  className="font-montserrat font-bold text-[11px] uppercase tracking-widest"
                  style={{ color: "var(--gf-gold)" }}
                >
                  {t.export.packagingFormatsLabel}
                </span>
                <span
                  style={{
                    display: "block",
                    width: 36,
                    height: 1,
                    background: "var(--gf-gold)",
                  }}
                />
              </div>
              <p
                className="font-montserrat text-[12px]"
                style={{ color: "var(--gf-text-light)" }}
              >
                {t.export.packagingFormatsSub}
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {(t.footer.packagingFormats as { label: string; sub: string }[]).map((fmt, i) => {
                const imgs = [
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/a84c41be-89d6-477d-bb1c-eccf7eb3ca68.jpg",
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/a8ba908b-29b3-4909-a311-6f9d5b6f741d.jpg",
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/ba5c8c80-9471-40fc-988a-9cc1602e35e0.jpg",
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/2eede8e6-7448-4a13-b590-b41f6117a889.jpg",
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/2c1a3bda-5c0e-4e53-a1de-3cac86529f89.jpg",
                  "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/4e6eddb4-c469-4776-90e3-d1e1129c099c.jpg",
                ];
                const f = { img: imgs[i], label: fmt.label, sub: fmt.sub };
                return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2 pb-3 px-2 pt-2"
                  style={{ background: "var(--gf-cream)", borderRadius: 8 }}
                >
                  <div
                    style={{
                      height: 100,
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: 6,
                    }}
                  >
                    <img
                      src={f.img}
                      alt={f.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  <div
                    className="font-cormorant font-semibold text-[18px]"
                    style={{ color: "var(--gf-gold)" }}
                  >
                    {f.label}
                  </div>
                  <div
                    className="font-montserrat text-[10px]"
                    style={{ color: "var(--gf-text-light)" }}
                  >
                    {f.sub}
                  </div>
                </div>
              ); })}
            </div>
            <p
              className="text-center font-montserrat text-[11px] mt-4"
              style={{ color: "var(--gf-text-light)" }}
            >
              <Icon
                name="Leaf"
                size={11}
                style={{
                  color: "var(--gf-gold)",
                  display: "inline",
                  marginRight: 4,
                }}
              />
              {t.export.packagingNote}
            </p>
          </div>

          {/* ── Why Partners Choose Us ── */}
          <div
            className="reveal"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 10,
              padding: "24px 28px",
            }}
          >
            <div className="text-center mb-5">
              <span
                className="font-montserrat font-bold text-[11px] uppercase tracking-widest"
                style={{ color: "var(--gf-text-light)" }}
              >
                {t.export.whyUs}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {t.export.whyItems.map((label, i) => {
                const whyIcons = ["Leaf", "Truck", "Package", "Globe", "Headphones"];
                return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Icon
                    name={whyIcons[i]}
                    size={26}
                    style={{ color: "var(--gf-dark)", strokeWidth: 1.1 }}
                  />
                  <span
                    className="font-montserrat font-bold text-[10px] uppercase tracking-wide"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {label}
                  </span>
                </div>
                );
              })}
            </div>
          </div>

          {/* ── Bottom trust bar ── */}
          <div
            className="mt-8 py-5 px-6 flex flex-wrap justify-around gap-6 reveal"
            style={{ background: "var(--gf-dark)", borderRadius: 10 }}
          >
            {t.export.trustBar.map((label, i) => {
              const trustIcons = ["Leaf", "ShieldCheck", "FileText", "Globe", "ClipboardList"];
              return (
              <div key={i} className="flex items-center gap-2.5">
                <Icon
                  name={trustIcons[i]}
                  size={18}
                  style={{ color: "var(--gf-gold)" }}
                />
                <span className="font-montserrat font-bold text-[11px] uppercase tracking-wider text-white">
                  {label}
                </span>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CERTIFICATIONS ═══════════════ */}
      <section
        id="certifications"
        className="py-20"
        style={{ background: "var(--gf-cream-2)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10 reveal">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span
                style={{
                  display: "block",
                  width: 36,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
              <span
                style={{
                  color: "var(--gf-gold)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {t.certifications.sectionLabel}
              </span>
              <span
                style={{
                  display: "block",
                  width: 36,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
            </div>
            <h2
              className="font-cormorant font-light"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                color: "var(--gf-dark)",
              }}
            >
              {t.certifications.h2}
            </h2>
          </div>

          {/* ── Main row: единый белый блок EU cert + Packaging ── */}
          <div
            className="reveal mb-4"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              className="cert-inner-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr" }}
            >
              {/* Left: EU Organic */}
              <div
                style={{
                  padding: "28px 28px 28px",
                  borderRight: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {/* EU badge row */}
                <div
                  className="flex items-center gap-3 mb-5"
                  style={{
                    background: "var(--gf-cream)",
                    borderRadius: 8,
                    padding: "12px 14px",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <img
                    src="https://cdn.poehali.dev/files/e0686aa0-2df7-454a-b318-5e843ea52142.png"
                    alt="EU Organic"
                    style={{
                      width: 40,
                      height: 32,
                      objectFit: "contain",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontSize: 12,
                        color: "var(--gf-dark)",
                      }}
                    >
                      {t.certifications.euTitle}
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 10,
                        color: "var(--gf-text-light)",
                        marginTop: 1,
                      }}
                    >
                      {t.certifications.euSub}
                    </div>
                  </div>
                </div>

                {/* Checkmarks */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  {t.certifications.euChecks.map((item, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: "#3d7a3d",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon
                          name="Check"
                          size={10}
                          style={{ color: "#fff" }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 12,
                          color: "var(--gf-text)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Organic list */}
                <div
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    paddingTop: 14,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "var(--gf-dark)",
                      marginBottom: 8,
                    }}
                  >
                    {t.certifications.organicAvailableFor}
                  </div>
                  {(t.certifications.organicAvailableList as string[]).map((p, i) => (
                    <div
                      key={i}
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 12,
                        color: "var(--gf-text-light)",
                        marginBottom: 4,
                        display: "flex",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: "var(--gf-gold)" }}>•</span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Packaging & Supply */}
              <div style={{ padding: "28px 32px 28px" }}>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--gf-dark)",
                    marginBottom: 4,
                  }}
                >
                  {t.certifications.packagingSupplyTitle}
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 12,
                    color: "var(--gf-text-light)",
                    marginBottom: 32,
                  }}
                >
                  {t.certifications.packagingSupplySub}
                </div>

                <div
                  className="cert-packaging-icons"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 24,
                  }}
                >
                  {(t.certifications.packagingSupplyItems as { title: string; size: string; desc: string }[]).map((p, i) => {
                    const icons = ["Package", "Boxes", "Container", "Truck"];
                    const item = { icon: icons[i], title: p.title, size: p.size, desc: p.desc };
                    return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          border: "1.5px solid rgba(0,0,0,0.1)",
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 4,
                        }}
                      >
                        <Icon
                          name={item.icon}
                          size={24}
                          style={{ color: "var(--gf-dark)", strokeWidth: 1.1 }}
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: 700,
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          color: "var(--gf-dark)",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                          fontSize: 17,
                          fontWeight: 600,
                          color: "var(--gf-gold)",
                          lineHeight: 1.25,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.size}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 11,
                          color: "var(--gf-text-light)",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  ); })}
                </div>
              </div>
            </div>
          </div>

          {/* ── USDA Coming Soon ── */}
          <div
            className="reveal mb-4"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 10,
              overflow: "hidden",
              padding: "24px 28px",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <img
                src="https://cdn.poehali.dev/files/138b276f-d17d-42ca-ac90-e76889009b9a.png"
                alt="USDA Organic"
                style={{
                  width: 72,
                  height: 72,
                  objectFit: "contain",
                  flexShrink: 0,
                  opacity: 0.55,
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--gf-dark)",
                    }}
                  >
                    {t.certifications.usdaTitle}
                  </div>
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#b07d2a",
                      background: "rgba(176,125,42,0.10)",
                      border: "1px solid rgba(176,125,42,0.25)",
                      borderRadius: 4,
                      padding: "2px 8px",
                    }}
                  >
                    {t.certifications.usdaBadge}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 12,
                    color: "var(--gf-text-light)",
                    lineHeight: 1.6,
                    maxWidth: 560,
                  }}
                >
                  {t.certifications.usdaText}
                </div>
              </div>
            </div>
          </div>

          {/* ── From Field to Your Business ── */}
          <div className="reveal">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span
                style={{
                  display: "block",
                  width: 36,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
              <span
                style={{
                  color: "var(--gf-gold)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {t.certifications.fieldLabel}
              </span>
              <span
                style={{
                  display: "block",
                  width: 36,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
            </div>

            {/* 5-image strip with numbered labels */}
            <div className="overflow-x-auto -mx-2 px-2">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, minmax(140px, 1fr))",
                  gap: 8,
                  height: 220,
                  minWidth: 600,
                }}
              >
                {[
                  "https://cdn.poehali.dev/files/82314d50-2676-4645-a5e6-e829f18b0d3b.jpg",
                  "https://cdn.poehali.dev/files/58745ea4-18ff-44b1-b480-4571abaed50e.jpg",
                  "https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg",
                  "https://cdn.poehali.dev/files/0f193f1f-14c9-4f20-a6fb-9416edc6ee23.jpg",
                  "https://cdn.poehali.dev/files/0f193f1f-14c9-4f20-a6fb-9416edc6ee23.jpg",
                ].map((img, i) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      borderRadius: 8,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img}
                      alt={t.certifications.fieldTiles[i]}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    {/* Dark overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(14,26,15,0.85) 0%, rgba(14,26,15,0.1) 60%)",
                      }}
                    />
                    {/* Number badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--gf-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontSize: 13,
                        color: "#0e1a0f",
                      }}
                    >
                      {i + 1}
                    </div>
                    {/* Label */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        right: 10,
                      }}
                    >
                      <div
                        style={{
                          color: "#fff",
                          fontFamily: "Montserrat",
                          fontSize: 10,
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {t.certifications.fieldTiles[i]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PRIVATE LABEL ═══════════════ */}
      <section
        id="private-label"
        className="py-20"
        style={{ background: "var(--gf-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* ── Row 1: Left text + Right 2x2 grid ── */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8 reveal">
            {/* Left: text */}
            <div
              className="flex flex-col justify-between"
              style={{ background: "var(--gf-cream)", paddingRight: 8 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    style={{
                      color: "var(--gf-gold)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {t.privateLabel.sectionLabel}
                  </span>
                  <span
                    style={{
                      display: "block",
                      width: 32,
                      height: 1,
                      background: "var(--gf-gold)",
                    }}
                  />
                </div>
                <h2
                  className="font-cormorant leading-tight mb-5"
                  style={{
                    fontSize: "clamp(42px, 5vw, 68px)",
                    color: "var(--gf-dark)",
                    fontWeight: 400,
                  }}
                >
                  {t.privateLabel.h2a}
                  <br />
                  <span
                    style={{ color: "var(--gf-gold)", fontStyle: "italic" }}
                  >
                    {t.privateLabel.h2b}
                  </span>
                </h2>
                <p
                  className="font-montserrat text-[14px] leading-relaxed mb-7"
                  style={{ color: "var(--gf-text-light)" }}
                >
                  {t.privateLabel.p}
                </p>

                {/* 5 features */}
                <div className="grid grid-cols-3 gap-x-5 gap-y-5 mb-8">
                  {(t.privateLabel.packagingDesignFeatures as string[]).map((label, i) => {
                    const featureIcons = ["LayoutTemplate", "Tag", "Layers", "Store", "Leaf"];
                    const f = { icon: featureIcons[i], label };
                    return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center gap-1.5"
                    >
                      <Icon
                        name={f.icon}
                        size={22}
                        style={{ color: "var(--gf-dark)", strokeWidth: 1.2 }}
                      />
                      <span
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 10,
                          color: "var(--gf-text-light)",
                          lineHeight: 1.3,
                        }}
                      >
                        {f.label}
                      </span>
                    </div>
                  ); })}
                </div>
              </div>

              <button
                className="btn-outline-dark self-start"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.privateLabel.requestBtn}{" "}
                <Icon name="ArrowRight" size={15} />
              </button>
            </div>

            {/* Right: 2x2 photo+info grid */}
            <div className="grid grid-cols-2 gap-3">
              {t.privateLabel.features.map((feat, i) => {
                const plImgs = [
                  "https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg",
                  "https://cdn.poehali.dev/files/de1e27a0-f677-4f7c-b4f6-f54a3d8c5abc.jpg",
                  "https://cdn.poehali.dev/files/6ebe549e-c65d-458a-9a25-7388c52a2e06.jpg",
                  "https://cdn.poehali.dev/files/98d43280-321a-4078-bb4e-2cd8a7e71f5e.jpg",
                ];
                const plIcons = ["ShoppingBag", "Package2", "Container", "Tag"];
                const c = { img: plImgs[i], icon: plIcons[i], title: feat.title, size: feat.size, desc: feat.desc };
                return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 8,
                    overflow: "hidden",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      height: 140,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={c.img}
                      alt={c.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.06)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                  {/* Info */}
                  <div style={{ padding: "14px 14px 12px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "var(--gf-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon
                          name={c.icon}
                          size={14}
                          style={{ color: "var(--gf-gold)" }}
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "Cormorant Garamond, serif",
                          fontSize: 16,
                          fontWeight: 600,
                          color: "var(--gf-dark)",
                        }}
                      >
                        {c.title}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--gf-gold)",
                        marginBottom: 3,
                      }}
                    >
                      {c.size}
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 11,
                        color: "var(--gf-text-light)",
                        lineHeight: 1.4,
                      }}
                    >
                      {c.desc}
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>

          {/* ── Row 2: Our Private Label Process ── */}
          <div
            className="reveal"
            style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 32 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span
                style={{
                  display: "block",
                  width: 36,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
              <span
                style={{
                  color: "var(--gf-gold)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {t.privateLabel.ourProcess}
              </span>
              <span
                style={{
                  display: "block",
                  width: 36,
                  height: 1,
                  background: "var(--gf-gold)",
                }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {t.privateLabel.steps.map((stepTitle, i) => {
                const plStepIcons = ["Wheat", "Palette", "ShieldCheck", "Factory", "Ship"];
                const plStepDescs = t.privateLabel.stepDescs as string[];
                return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "var(--gf-dark)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name={plStepIcons[i]}
                        size={18}
                        style={{ color: "var(--gf-gold)" }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: 36,
                        fontWeight: 300,
                        color: "var(--gf-dark)",
                        lineHeight: 1,
                      }}
                    >
                      {i + 1}
                    </div>
                    {i < 4 && (
                      <Icon
                        name="ArrowRight"
                        size={14}
                        style={{
                          color: "var(--gf-gold)",
                          opacity: 0.4,
                          display: "none",
                        }}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--gf-dark)",
                      marginBottom: 6,
                    }}
                  >
                    {stepTitle}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 11,
                      color: "var(--gf-text-light)",
                      lineHeight: 1.4,
                    }}
                  >
                    {plStepDescs[i]}
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* ── Row 3: Why Trust Us — 2×2 cards ── */}
          <div className="mt-8 reveal">
            <div className="text-center mb-6">
              <h3
                className="font-cormorant"
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 400,
                  color: "var(--gf-dark)",
                }}
              >
                {t.privateLabel.trustTitle}
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(t.privateLabel.trustItems as { title: string; desc: string }[]).map((c, i) => {
                const trustIcons = ["Wheat", "ShieldCheck", "Tag", "FileText"];
                const trustImgs = [
                  "https://cdn.poehali.dev/files/9e62a3ec-bd8c-4bf7-a996-eb835bef4401.jpg",
                  "https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg",
                  "https://cdn.poehali.dev/files/98d43280-321a-4078-bb4e-2cd8a7e71f5e.jpg",
                  "https://cdn.poehali.dev/files/6ebe549e-c65d-458a-9a25-7388c52a2e06.jpg",
                ];
                const item = { icon: trustIcons[i], img: trustImgs[i], title: c.title, desc: c.desc };
                return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ height: 130, overflow: "hidden" }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.06)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                  <div style={{ padding: "16px 16px 18px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <Icon
                        name={item.icon}
                        size={15}
                        style={{ color: "var(--gf-gold)", flexShrink: 0 }}
                      />
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: 700,
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: "var(--gf-dark)",
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 11,
                        color: "var(--gf-text-light)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ); })}
            </div>
          </div>

          {/* ── Row 4: Bottom CTA ── */}
          <div
            className="mt-6 reveal"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 10,
              padding: "24px 28px",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "var(--gf-dark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    name="Wheat"
                    size={22}
                    style={{ color: "var(--gf-gold)", strokeWidth: 1.2 }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: 22,
                      fontWeight: 400,
                      color: "var(--gf-dark)",
                      marginBottom: 2,
                    }}
                  >
                    {t.privateLabel.ctaTitle}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 12,
                      color: "var(--gf-text-light)",
                    }}
                  >
                    {t.privateLabel.ctaSub}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <button
                  className="btn-gold"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.privateLabel.ctaBtn} <Icon name="ArrowRight" size={16} />
                </button>
                <div
                  className="font-montserrat text-[10px] text-right"
                  style={{ color: "var(--gf-text-light)" }}
                >
                  gavrilovfoods.export@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════ GALLERY ═══════════════ */}
               • 
      <section id="gallery" className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* ── Row 1: Hero banner ── */}
          <div className="reveal mb-4">
            {/* Top: hero image with text overlay */}
            <div
              style={{
                position: "relative",
                borderRadius: "10px 10px 0 0",
                overflow: "hidden",
                height: 200,
              }}
            >
              <img
                src={HERO_IMG}
                alt="From Farm to Export"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(14,26,15,0.92) 0%, rgba(14,26,15,0.65) 55%, rgba(14,26,15,0.2) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 44px",
                }}
              >
                <div style={{ maxWidth: 560 }}>
                  <h2
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "clamp(26px, 3vw, 40px)",
                      fontWeight: 400,
                      color: "#fff",
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    {t.gallery.h2a}{" "}
                    <span
                      style={{ color: "var(--gf-gold)", fontStyle: "italic" }}
                    >
                      {t.gallery.h2b}
                    </span>
                  </h2>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.65,
                      maxWidth: 440,
                    }}
                  >
                    {t.gallery.p}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: 4 white stat boxes */}
            <div
              className="gallery-stats-4col"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                background: "var(--gf-cream-2)",
                borderRadius: "0 0 10px 10px",
                border: "1px solid rgba(0,0,0,0.07)",
                borderTop: "none",
              }}
            >
              {t.gallery.stats.map((s, i) => {
                const statIcons = ["Wheat", "Warehouse", "Settings", "Globe"];
                return (
                <div
                  key={i}
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <Icon
                    name={statIcons[i]}
                    size={32}
                    style={{
                      color: "var(--gf-dark)",
                      strokeWidth: 1.2,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "var(--gf-gold)",
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 11,
                        color: "var(--gf-text-light)",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        marginTop: 3,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>

          {/* ── Row 2: 5-step process + 5 large photos ── */}
          <div className="reveal mb-4">
            {/* Step labels with arrows between */}
            <div
              className="gallery-steps-auto"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr auto 1fr",
                gap: "0 8px",
                marginBottom: 8,
                alignItems: "start",
              }}
            >
              {t.gallery.steps.map((s, i) => ({ ...s, num: i + 1 })).flatMap((s, i) => {
                const card = (
                  <div
                    key={`step-${i}`}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "var(--gf-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontSize: 11,
                        color: "#0e1a0f",
                      }}
                    >
                      {s.num}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: 700,
                          fontSize: 11,
                          color: "var(--gf-dark)",
                          marginBottom: 3,
                        }}
                      >
                        {s.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 10,
                          color: "var(--gf-text-light)",
                          lineHeight: 1.4,
                        }}
                      >
                        {s.desc}
                      </div>
                    </div>
                  </div>
                );
                if (i < 4) {
                  return [
                    card,
                    <div
                      key={`arrow-${i}`}
                      className="gallery-step-arrow"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        paddingTop: 7,
                      }}
                    >
                      <Icon
                        name="ArrowRight"
                        size={16}
                        style={{ color: "var(--gf-gold)" }}
                      />
                    </div>,
                  ];
                }
                return [card];
              })}
            </div>

            {/* Large photos row */}
            <div
              className="gallery-photos-row"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5,1fr)",
                gap: 4,
                height: 200,
              }}
            >
              {[
                "https://cdn.poehali.dev/files/f587c14f-6edc-4915-9546-56750cc65d65.jpg", // buckwheat field
                "https://cdn.poehali.dev/files/4e59b4e6-7b82-41a5-aa17-1e88022f4ea5.jpg", // green field
                "https://cdn.poehali.dev/files/58745ea4-18ff-44b1-b480-4571abaed50e.jpg", // processing facility
                "https://cdn.poehali.dev/files/6d95a4e4-3a28-40a8-868f-f1e65151ade3.jpg", // big bags storage
                "https://cdn.poehali.dev/files/0f193f1f-14c9-4f20-a6fb-9416edc6ee23.jpg", // truck with big bags
              ].map((src, i) => (
                <div key={i} style={{ borderRadius: 6, overflow: "hidden" }}>
                  <img
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              ))}
            </div>

            {/* Small photos row */}
            <div
              className="gallery-photos-small-row"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5,1fr)",
                gap: 4,
                marginTop: 4,
                height: 110,
              }}
            >
              {[
                "https://cdn.poehali.dev/files/ba04f7da-b43f-4f37-8145-e14b56221773.jpg", // Fendt tractor
                "https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg", // packaging machine
                "https://cdn.poehali.dev/files/1da39392-8a8b-444d-ac48-cf1f2927deea.jpg", // grain dryer
                "https://cdn.poehali.dev/files/da2cf99e-0ede-40d1-9533-e4434ebcdf01.jpg", // bags on pallets
                "https://cdn.poehali.dev/files/ccd75ed3-8a64-4361-adc0-67abf9de6f0f.jpg", // bags warehouse
              ].map((src, i) => (
                <div key={i} style={{ borderRadius: 6, overflow: "hidden" }}>
                  <img
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Row 3: Why Buyers Trust — full-width dark panel ── */}
          <div
            className="reveal"
            style={{
              background: "var(--gf-dark)",
              borderRadius: 10,
              padding: "32px 36px",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  fontWeight: 400,
                  color: "#fff",
                  margin: 0,
                }}
              >
                {t.privateLabel.whyBuyersTitle}
              </h3>
              <button
                className="btn-gold"
                style={{ fontSize: 11, padding: "10px 20px", flexShrink: 0 }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.privateLabel.whyBuyersBtn} <Icon name="ArrowRight" size={13} />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {(t.privateLabel.whyBuyersItems as { title: string; desc: string }[]).map((wb, i) => {
                const whyBuyersIcons = ["Wheat", "ShieldCheck", "ScanLine", "Leaf", "Globe"];
                const t2 = { icon: whyBuyersIcons[i], title: wb.title, desc: wb.desc };
                return (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 8,
                    padding: "16px 14px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon
                    name={t2.icon}
                    size={18}
                    style={{
                      color: "var(--gf-gold)",
                      marginBottom: 8,
                      strokeWidth: 1.3,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "rgba(255,255,255,0.75)",
                      marginBottom: 4,
                    }}
                  >
                    {t2.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.4,
                    }}
                  >
                    {t2.desc}
                  </div>
                </div>
              ); })}
            </div>
          </div>

          {/* ── Row 4: Bottom trust strip ── */}
          <div
            className="gallery-trust-5col reveal mt-6"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: 0,
              background: "var(--gf-cream)",
              borderRadius: 8,
            }}
          >
            {t.gallery.trustItems.map((item, i) => {
              const trustItemIcons = ["Wheat", "Package", "Leaf", "FileText", "Tractor"];
              return (
              <div
                key={i}
                style={{
                  padding: "20px 18px",
                  borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <Icon
                  name={trustItemIcons[i]}
                  size={26}
                  style={{
                    color: "var(--gf-dark)",
                    strokeWidth: 1.1,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 11,
                      color: "var(--gf-dark)",
                      marginBottom: 3,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 11,
                      color: "var(--gf-text-light)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ ANTAD EXPO 2026 ═══════════════ */}
      <section id="antad" style={{ background: "var(--gf-dark)", padding: "72px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="reveal grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-center"
          >
            {/* Left: text */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(201,151,58,0.1)",
                  border: "1px solid rgba(201,151,58,0.25)",
                  borderRadius: 4,
                  padding: "5px 12px",
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 13 }}>🇲🇽</span>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gf-gold)",
                  }}
                >
                  {t.antad.badge}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(30px, 4vw, 52px)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                {t.antad.h2a}
                <br />
                <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>{t.antad.h2b}</span>
              </h2>

              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  maxWidth: 520,
                  marginBottom: 28,
                }}
              >
                {t.antad.p}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px 32px",
                  marginBottom: 32,
                }}
              >
                {t.antad.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--gf-gold)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/79037901795?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20meeting%20at%20ANTAD%20Expo%202026"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--gf-gold)",
                  color: "#0e1a0f",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: 6,
                  padding: "14px 24px",
                }}
              >
                <Icon name="MessageCircle" size={16} />
                {t.antad.ctaBtn}
              </a>
            </div>

            {/* Right: info card */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,151,58,0.2)",
                borderRadius: 10,
                padding: "32px 28px",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gf-gold)",
                  marginBottom: 16,
                }}
              >
                {t.antad.discuss}
              </div>
              {t.antad.discussItems.map((label, i) => {
                const discussIcons = ["Leaf", "Wheat", "Tag", "Package", "Ship"];
                return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <Icon name={discussIcons[i]} size={15} style={{ color: "var(--gf-gold)", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {label}
                  </span>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" style={{ background: "var(--gf-cream)" }}>
        {/* ── Hero top: title + truck image ── */}
        <div
          className="contact-hero-section"
          style={{ position: "relative", minHeight: 280, overflow: "hidden" }}
        >
          <img
            src="https://cdn.poehali.dev/files/e5bbdd87-0b54-459a-ae6e-68a3aa59bbe0.jpg"
            alt="Owner in grain field"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            className="contact-hero-overlay"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(245,240,232,1) 0%, rgba(245,240,232,0.95) 50%, rgba(245,240,232,0.5) 80%, transparent 100%)",
            }}
          />
          <div
            className="max-w-7xl mx-auto px-6"
            style={{
              position: "relative",
              zIndex: 1,
              paddingTop: 48,
              paddingBottom: 32,
            }}
          >
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(36px, 5vw, 66px)",
                fontWeight: 400,
                color: "var(--gf-dark)",
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              {t.contact.requestHeading}
              <br />
              <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>
                {t.contact.requestHeadingItalic}
              </span>
            </h2>
            <div
              style={{
                width: 40,
                height: 2,
                background: "var(--gf-gold)",
                marginBottom: 14,
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: 14,
                color: "var(--gf-dark)",
                lineHeight: 1.65,
                maxWidth: 420,
              }}
            >
              {t.contact.requestSubtitle}
            </p>
          </div>
        </div>

        {/* ── 4 contact info blocks ── */}
        <div
          style={{
            background: "var(--gf-cream-2)",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <div
            className="contact-info-bar max-w-7xl mx-auto px-6"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 0,
            }}
          >
            {[
              {
                icon: "Phone",
                label: t.contact.contactPhoneLabel,
                value: "+7 903 790 17 95",
                sub: t.contact.contactPhoneHours,
                href: "tel:+79037901795",
              },
              {
                icon: "Mail",
                label: t.contact.contactEmailLabel,
                value: "gavrilovfoods.export@gmail.com",
                sub: t.contact.contactEmailNote,
                href: "mailto:gavrilovfoods.export@gmail.com",
              },
              {
                icon: "MapPin",
                label: t.contact.contactOriginLabel,
                value: t.contact.contactOriginValue,
                sub: t.contact.contactOriginNote,
              },
              {
                icon: "Globe",
                label: t.contact.contactMarketsLabel,
                value: null,
                sub: null,
                markets: true,
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 24px",
                  borderRight: i < 3 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--gf-dark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    name={c.icon}
                    size={17}
                    style={{ color: "var(--gf-gold)" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--gf-text-light)",
                      marginBottom: 3,
                    }}
                  >
                    {c.label}
                  </div>
                  {c.markets ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      {(t.contact.contactMarkets as string[]).map((market, mi) => (
                        <div
                          key={mi}
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: 13,
                            color: "var(--gf-dark)",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          {market}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {"href" in c && c.href ? (
                        <a
                          href={c.href}
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: 13,
                            fontWeight: 600,
                            color: "var(--gf-dark)",
                            marginBottom: 2,
                            textDecoration: "none",
                            display: "block",
                          }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: 13,
                            fontWeight: 600,
                            color: "var(--gf-dark)",
                            marginBottom: 2,
                          }}
                        >
                          {c.value}
                        </div>
                      )}
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 11,
                          color: "var(--gf-text-light)",
                        }}
                      >
                        {c.sub}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main form block ── */}
        <div style={{ background: "var(--gf-dark)", padding: "40px 0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <h3
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 32,
                fontWeight: 400,
                color: "#fff",
                marginBottom: 24,
              }}
            >
              {t.contact.sendRequest}
            </h3>

            <div
              className="contact-form-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
              }}
            >
              {/* Column 1 */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  { label: t.contact.formName, type: "text", placeholder: t.contact.formNamePlaceholder },
                  {
                    label: t.contact.formEmail,
                    type: "email",
                    placeholder: t.contact.formEmailPlaceholder,
                  },
                  {
                    label: t.contact.formPhone,
                    type: "tel",
                    placeholder: t.contact.formPhonePlaceholder,
                  },
                  {
                    label: t.contact.formCompany,
                    type: "text",
                    placeholder: t.contact.formCompanyPlaceholder,
                  },
                ].map((f, i) => (
                  <div key={i}>
                    <label
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--gf-gold)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#fff",
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  {
                    label: t.contact.formProduct,
                    type: "select",
                    placeholder: t.contact.selectProduct,
                    opts: t.contact.productOpts as string[],
                  },
                  {
                    label: t.contact.formPackaging,
                    type: "select",
                    placeholder: t.contact.selectPackaging,
                    opts: t.contact.packagingOpts as string[],
                  },
                  {
                    label: t.contact.formVolume,
                    type: "select",
                    placeholder: t.contact.selectVolume,
                    opts: t.contact.volumeOpts as string[],
                  },
                  {
                    label: t.contact.formDestination,
                    type: "text",
                    placeholder: t.contact.formDestinationPlaceholder,
                  },
                ].map((f, i) => (
                  <div key={i}>
                    <label
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--gf-gold)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      {f.label}
                    </label>
                    {f.type === "select" ? (
                      <select
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(255,255,255,0.6)",
                          fontFamily: "Montserrat",
                          fontSize: 13,
                          outline: "none",
                          cursor: "pointer",
                          appearance: "auto",
                          boxSizing: "border-box",
                        }}
                      >
                        <option value="" style={{ background: "#1a2e1b" }}>
                          {f.placeholder}
                        </option>
                        {f.opts?.map((o) => (
                          <option
                            key={o}
                            value={o}
                            style={{ background: "#1a2e1b" }}
                          >
                            {o}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "#fff",
                          fontFamily: "Montserrat",
                          fontSize: 13,
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Column 3: textarea + trust icons */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--gf-gold)",
                      display: "block",
                      marginBottom: 5,
                    }}
                  >
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    placeholder={t.contact.formMessagePlaceholder}
                    rows={7}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      outline: "none",
                      resize: "none",
                      boxSizing: "border-box",
                      lineHeight: 1.6,
                    }}
                  />
                </div>
                {/* 4 trust icons */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 8,
                    textAlign: "center",
                  }}
                >
                  {(t.contact.trustIcons as string[]).map((label, i) => {
                    const trustIconNames = ["ShieldCheck", "Truck", "DollarSign", "Handshake"];
                    const ti = { icon: trustIconNames[i], label };
                    return (
                    <div key={i}>
                      <Icon
                        name={ti.icon}
                        size={22}
                        style={{
                          color: "rgba(255,255,255,0.5)",
                          strokeWidth: 1.2,
                        }}
                      />
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 9,
                          color: "rgba(255,255,255,0.35)",
                          marginTop: 4,
                          lineHeight: 1.3,
                        }}
                      >
                        {ti.label}
                      </div>
                    </div>
                  ); })}
                </div>
              </div>
            </div>

            {/* Checkbox agreement */}
            <div
              style={{
                marginTop: 16,
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <div
                onClick={() => setAgreed(!agreed)}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 3,
                  border: `1.5px solid ${agreed ? "var(--gf-gold)" : "rgba(255,255,255,0.3)"}`,
                  background: agreed ? "var(--gf-gold)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  marginTop: 1,
                  transition: "all 0.2s",
                }}
              >
                {agreed && (
                  <Icon name="Check" size={11} style={{ color: "#0e1a0f" }} />
                )}
              </div>
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                }}
              >
                {t.contact.privacyText
                  .replace("{privacyLink}", "§PRIVACY§")
                  .replace("{termsLink}", "§TERMS§")
                  .split(/(§PRIVACY§|§TERMS§)/)
                  .map((part, i) => {
                    if (part === "§PRIVACY§") return <a key={i} href="/privacy-policy" target="_blank" style={{ color: "var(--gf-gold)", textDecoration: "underline" }}>{t.contact.privacyLinkText}</a>;
                    if (part === "§TERMS§") return <a key={i} href="/terms" target="_blank" style={{ color: "var(--gf-gold)", textDecoration: "underline" }}>{t.contact.termsLinkText}</a>;
                    return part;
                  })}
              </span>
            </div>

            {/* CTA buttons */}
            <div
              className="contact-cta-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginTop: 14,
              }}
            >
              <button
                className="btn-gold"
                style={{
                  justifyContent: "center",
                  fontSize: 13,
                  padding: "14px 24px",
                  opacity: agreed ? 1 : 0.4,
                  cursor: agreed ? "pointer" : "not-allowed",
                }}
                disabled={!agreed}
                title={
                  !agreed
                    ? t.contact.formPrivacyNote
                    : ""
                }
              >
                {t.contact.formSubmitBtn} <Icon name="ArrowRight" size={16} />
              </button>
              <a
                href={agreed ? "https://wa.me/79037901795" : undefined}
                onClick={!agreed ? (e) => e.preventDefault() : undefined}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 24px",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  opacity: agreed ? 1 : 0.4,
                  cursor: agreed ? "pointer" : "not-allowed",
                }}
              >
                <Icon
                  name="MessageCircle"
                  size={18}
                  style={{ color: "#25D366" }}
                />
                {t.contact.whatsappExport}
              </a>
            </div>
          </div>
        </div>

        {/* ── 5 feature badges ── */}
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {(t.contact.featureBadges as { title: string; desc: string }[]).map((badge, i) => {
              const badgeIcons = ["", "Package", "Tag", "FileText", "Clock"];
              const badgeImg = "https://cdn.poehali.dev/files/e0686aa0-2df7-454a-b318-5e843ea52142.png";
              return (
              <div
                key={i}
                style={{
                  padding: "16px 16px",
                  borderRight: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                {i === 0 ? (
                  <img
                    src={badgeImg}
                    alt="EU Organic"
                    style={{
                      width: 32,
                      height: 26,
                      objectFit: "contain",
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                  />
                ) : (
                  <Icon
                    name={badgeIcons[i]}
                    size={24}
                    style={{
                      color: "var(--gf-dark)",
                      strokeWidth: 1.1,
                      flexShrink: 0,
                    }}
                  />
                )}
                <div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--gf-dark)",
                      marginBottom: 3,
                    }}
                  >
                    {badge.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      color: "var(--gf-text-light)",
                      lineHeight: 1.4,
                    }}
                  >
                    {badge.desc}
                  </div>
                </div>
              </div>
              ); })}
          </div>
        </div>

        {/* ── 4 wide photos strip ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            height: 200,
          }}
        >
          {[
            "https://cdn.poehali.dev/files/943c789b-d4ed-418a-a36d-f3c15e7272ea.jpg", // owner in field
            "https://cdn.poehali.dev/files/e9c61409-13fb-4c7a-91bf-0b7e85bbb328.jpg", // processing facility
            "https://cdn.poehali.dev/files/8342efe6-766d-48cb-a2c1-e34bb5840c42.jpg", // big bags storage
            "https://cdn.poehali.dev/files/67bac509-ee17-498f-b58e-8f09c4af0a50.jpg", // truck with big bags
          ].map((src, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <img
                src={src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer style={{ background: "var(--gf-dark)" }}>
        {/* Main footer grid */}
        <div
          className="max-w-7xl mx-auto px-6"
          style={{ paddingTop: 48, paddingBottom: 32 }}
        >
          <div
            className="footer-main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr 0.8fr",
              gap: 40,
            }}
          >
            {/* Col 1: Logo + about */}
            <div>
              <div className="text-white mb-4">
                <Logo />
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                {t.footer.brandTagline}
                <br />
                {(t.footer.brandFeatures as string[])[0]}
                <br />
                {(t.footer.brandFeatures as string[])[1]}
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 4,
                }}
              >
                {t.footer.brandLocation}
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 20,
                }}
              >
                {t.footer.brandMission.split('\n')[0]}
                <br />
                {t.footer.brandMission.split('\n')[1]}
              </div>
              {/* Social icons */}
              <div style={{ display: "flex", gap: 10 }}>
                <a
                  href="https://wa.me/79037901795"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    name="MessageCircle"
                    size={15}
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  />
                </a>
                <a
                  href="mailto:gavrilovfoods.export@gmail.com"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    name="Mail"
                    size={15}
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  />
                </a>
              </div>
            </div>

            {/* Col 2: Quick links */}
            <div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 16,
                }}
              >
                {t.footer.quickLinks}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {(t.footer.quickLinksItems as string[]).map((l, i) => {
                  const hrefs = [
                    "#about",
                    "#products",
                    "#organic",
                    "#export",
                    "#certifications",
                    "#private-label",
                    "#gallery",
                    "#contact",
                  ];
                  return (
                    <button
                      key={i}
                      onClick={() => scrollTo(hrefs[i])}
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                      }
                    >
                      {l}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Col 3: Export markets */}
            <div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 16,
                }}
              >
                {t.footer.exportMarketsLabel}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {(t.footer.exportMarketsItems as string[]).map((market, mi) => {
                  const flags = ["🇪🇺", "🇨🇳"];
                  const names = ["Europe", "China"];
                  return (
                  <div
                    key={mi}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 12px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 6,
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{flags[mi]}</span>
                    <span
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 13,
                        color: "#fff",
                      }}
                    >
                      {names[mi]}
                    </span>
                  </div>
                  );
                })}
              </div>
            </div>

            {/* Col 4: Contact */}
            <div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 16,
                }}
              >
                {t.footer.contactLabel}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <a
                  href="tel:+79037901795"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                  }}
                >
                  <Icon
                    name="Phone"
                    size={15}
                    style={{ color: "var(--gf-gold)", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      color: "#fff",
                    }}
                  >
                    +7 903 790 17 95
                  </span>
                </a>
                <a
                  href="mailto:gavrilovfoods.export@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                  }}
                >
                  <Icon
                    name="Mail"
                    size={15}
                    style={{ color: "var(--gf-gold)", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    gavrilovfoods.export@gmail.com
                  </span>
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon
                    name="MapPin"
                    size={15}
                    style={{ color: "var(--gf-gold)", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Smolensk Region, Russia
                  </span>
                </div>
              </div>
              <a
                href="https://wa.me/79037901795"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "11px 18px",
                  background: "#25D366",
                  color: "#fff",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 12,
                  textDecoration: "none",
                  borderRadius: 4,
                  marginBottom: 10,
                }}
              >
                <Icon name="MessageCircle" size={16} />
                {t.footer.whatsappExport}
              </a>
              <a
                href="/docs/catalog.pdf"
                download
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "11px 18px",
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: 12,
                  width: "100%",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                <Icon name="Download" size={15} />
                {t.footer.downloadCatalog}
              </a>
            </div>

            {/* Col 5: grain photo */}
            <div
              className="footer-photo-col"
              style={{ borderRadius: 8, overflow: "hidden" }}
            >
              <img
                src={PRODUCTS_IMG}
                alt="Grains"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "14px 0",
          }}
        >
          <div
            className="footer-bottom max-w-7xl mx-auto px-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat",
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
              }}
            >© 2026 Gavrilov Foods</div>
            <div style={{ display: "flex", gap: 24 }}>
              <a
                href="/privacy-policy"
                target="_blank"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                target="_blank"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                }}
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}