import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

// Real farm photos — Gavrilov Organic Foods
const HERO_IMG =
  "https://cdn.poehali.dev/files/4b5a57a3-7cdf-406e-8457-7140c7ed102e.jpg"; // buckwheat field in bloom
const PRODUCTS_IMG =
  "https://cdn.poehali.dev/files/f11386c9-4001-4940-9b3c-a7cd36827549.jpg"; // big bags in warehouse
const FACTORY_IMG =
  "https://cdn.poehali.dev/files/3bb96d82-4e91-49da-a437-a8e84c943f7e.jpg"; // processing equipment

const REF_CONTACT =
  "https://cdn.poehali.dev/files/943c789b-d4ed-418a-a36d-f3c15e7272ea.jpg"; // owner in field
const REF_PRIVATE =
  "https://cdn.poehali.dev/files/98d43280-321a-4078-bb4e-2cd8a7e71f5e.jpg"; // packaged goods on pallets
const REF_PROCESS =
  "https://cdn.poehali.dev/files/6b617da2-3106-4871-b5ff-2d574abb7a34.jpg"; // sowing in field
const REF_EXPORT =
  "https://cdn.poehali.dev/files/431dd6c0-d618-4737-aaca-53e45662be51.jpg"; // KAMAZ truck

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
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/49906ef7-211c-4d64-beae-004e3518ef74.jpg",
  },
  {
    name: "GREEN BUCKWHEAT",
    organic: true,
    packaging: "25 / 50 kg bags or big bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/bb689ed8-ee56-4684-b396-e560a076588f.jpg",
  },
  {
    name: "BUCKWHEAT FLOUR",
    organic: true,
    packaging: "25 kg bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/5aa6f984-f5f5-4f4e-afe2-85e236e0a871.jpg",
  },
  {
    name: "OAT FLAKES",
    organic: true,
    packaging: "25 kg bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/4e313381-f7ae-4934-8263-19f31994775f.jpg",
  },
  {
    name: "FLAXSEED",
    organic: true,
    packaging: "25 / 50 kg bags or big bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/6221103e-8fac-42c6-acda-82f48776aa1b.jpg",
  },
  {
    name: "RED LENTILS",
    organic: false,
    packaging: "25 / 50 kg bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/22e07f78-6ce7-4769-a3ff-370062a13ca2.jpg",
  },
  {
    name: "YELLOW PEAS",
    organic: false,
    packaging: "25 / 50 kg bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/98344303-4a85-427d-9dca-54dc796d32cd.jpg",
  },
  {
    name: "CHICKPEAS",
    organic: false,
    packaging: "25 / 50 kg bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/99258109-655c-4c20-a367-ff9baefaa524.jpg",
  },
  {
    name: "GREEN PEAS",
    organic: false,
    packaging: "25 / 50 kg bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/0f6296ad-99b5-4123-9acc-3349c6210930.jpg",
  },
  {
    name: "WHEAT",
    organic: false,
    packaging: "25 / 50 kg bags or big bags",
    moq: "from 1 MT",
    img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/d8ce42e3-3088-4de2-83f1-662af34b4f05.jpg",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Own Farmland",
    desc: "10,000 ha of fertile fields. Full control from seed to harvest.",
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
    title: "FCL Container Supply",
    size: "20ft / 40ft",
    desc: "Full container shipments for safe and efficient delivery.",
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
    src: "https://cdn.poehali.dev/files/3bb96d82-4e91-49da-a437-a8e84c943f7e.jpg",
    label: "Processing",
  },
  {
    src: "https://cdn.poehali.dev/files/431dd6c0-d618-4737-aaca-53e45662be51.jpg",
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

export default function Index() {
  useScrollReveal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [agreed, setAgreed] = useState(false);

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
            <button
              className="btn-gold text-[11px] py-2.5 px-5"
              onClick={() => scrollTo("#contact")}
            >
              Request a Quote
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
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-white/80 hover:text-white font-montserrat text-sm uppercase tracking-widest transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <button
                className="btn-gold mt-2"
                onClick={() => scrollTo("#contact")}
              >
                Request a Quote
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

        {/* Main hero image block */}
        <div
          style={{
            position: "relative",
            minHeight: "calc(100vh - 64px)",
            overflow: "hidden",
          }}
        >
          <img
            src="https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/6341fdb7-7079-43b0-b75c-5c9825af902a.jpg"
            alt="Gavrilov Foods grain silos"
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
                Farm to Export
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
                EU Certified
                <br />
                <span style={{ color: "var(--gf-gold)" }}>
                  Organic & Conventional
                </span>
                <br />
                Grain Supplier
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
                Reliable Russian grains, pulses & oilseeds for international
                markets.
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
                {[
                  "EU Organic Certified",
                  "Direct from Producer",
                  "Flexible Logistics",
                  "Full Export Support",
                  "Bulk & Private Label",
                  "Quality You Can Trust",
                ].map((item, i) => (
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
                  View Products <Icon name="ArrowRight" size={16} />
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
                >Request a Quote</button>
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
                    EU Organic Certified
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.4,
                    }}
                  >
                    Full traceability
                    <br />
                    Farm → Processing → Export
                  </div>
                </div>
              </div>

              {/* 4 stats */}
              {[
                { icon: "Tractor", val: "10,000+ ha", label: "Farmland" },
                {
                  icon: "Warehouse",
                  val: "10,000 – 15,000 MT",
                  label: "Annual Production",
                },
                {
                  icon: "Ship",
                  val: "5,000 – 10,000 MT",
                  label: "Annual Export Volume",
                },
                {
                  icon: "Globe",
                  val: "EXPORT MARKETS",
                  label: "Europe & China",
                },
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
              <div className="section-label mb-6">About Us</div>
              <h2
                className="font-cormorant font-light leading-tight mb-6"
                style={{
                  fontSize: "clamp(36px, 4vw, 58px)",
                  color: "var(--gf-dark)",
                }}
              >
                From Farm to Export —<br />
                <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>
                  Full Control
                </span>{" "}
                at Every Stage
              </h2>
              <p
                className="text-[15px] leading-relaxed mb-5"
                style={{ color: "var(--gf-text-light)" }}
              >
                Gavrilov Foods is a vertically integrated agricultural company
                based in the Smolensk Region, Russia. We own 10,000 hectares of
                farmland, operate modern processing facilities and deliver
                premium grains to importers worldwide.
              </p>
              <p
                className="text-[15px] leading-relaxed mb-8"
                style={{ color: "var(--gf-text-light)" }}
              >
                Every shipment is backed by full traceability, EU organic
                certification options, and a dedicated export team that responds
                within 24 hours.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "MapPin", label: "Smolensk Region, Russia" },
                  { icon: "Globe", label: "EU Export Documentation" },
                  { icon: "Phone", label: "+7 903 790 17 95" },
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
                    Modern Equipment
                  </div>
                  <div className="text-white/60 text-xs mt-0.5 font-montserrat">
                    Processing 200g – 1000kg formats
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
                Proof of Scale
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
              Real numbers behind every shipment
            </h2>
            <p
              className="text-sm font-montserrat"
              style={{ color: "var(--gf-text-light)" }}
            >
              Transparent volumes. Reliable supply. Global reach.
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
                    Production
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div
                      className="font-cormorant text-[28px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      10,000 ha
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      own farmland – full field-to-shelf control
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      10,000–15,000 MT
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      annual grain & pulse output
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      200 MT / mo
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      processing capacity – groats, flour, flakes
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      5,000 m²
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      own warehouse & storage facilities
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
                  src="https://cdn.poehali.dev/files/4b5a57a3-7cdf-406e-8457-7140c7ed102e.jpg"
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
                    Export
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div
                      className="font-cormorant text-[28px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      3+ regions
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      China, Europe, Serbia & growing
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      5,000–10,000 MT
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      annual export volume
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
                    Packaging
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div
                      className="font-cormorant text-[28px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      250 g – 5 kg
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      retail packs, private label available
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      25 / 50 kg
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      standard bags for trade & distribution
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      500–1,000 kg
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      big bags for bulk & industrial buyers
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
                    MOQ & Orders
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div
                      className="font-cormorant text-[28px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      1 MT
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      minimum order quantity
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-cormorant text-[22px] font-semibold leading-none"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      20 / 40 ft
                    </div>
                    <div
                      className="text-[12px] font-montserrat mt-0.5"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      full container options available
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
                  src="https://cdn.poehali.dev/files/4c755ac3-62a0-4ed1-b83b-e53189373f3f.jpg"
                  alt="Kirovets tractor"
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
          <div className="grid lg:grid-cols-2">
            {/* Left content */}
            <div className="py-16 px-6 lg:px-12 reveal-left">
              <div
                className="text-[10px] font-bold uppercase tracking-widest mb-4 font-montserrat"
                style={{ color: "var(--gf-gold)" }}
              >
                Logistics & Infrastructure
              </div>
              <h2
                className="font-cormorant font-light leading-tight mb-5"
                style={{
                  fontSize: "clamp(34px, 4vw, 56px)",
                  color: "var(--gf-dark)",
                }}
              >
                From field
                <br />
                to your warehouse
              </h2>
              <p
                className="text-[14px] leading-relaxed mb-10 max-w-sm font-montserrat"
                style={{ color: "var(--gf-text-light)" }}
              >
                We control every step of the supply chain to ensure quality,
                traceability and on-time delivery.
              </p>

              {/* 4 features */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  {
                    icon: "Warehouse",
                    title: "Own Storage",
                    desc: "Modern elevators and warehouses with capacity for safe storage.",
                  },
                  {
                    icon: "Factory",
                    title: "Processing",
                    desc: "Advanced equipment for cleaning, sorting and processing grains and pulses.",
                  },
                  {
                    icon: "ShieldCheck",
                    title: "Quality Control",
                    desc: "In-house lab testing at every stage to meet international standards.",
                  },
                  {
                    icon: "Truck",
                    title: "Reliable Logistics",
                    desc: "Experienced team and trusted partners for worldwide delivery.",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <Icon
                      name={f.icon}
                      size={40}
                      style={{ color: "var(--gf-dark)", strokeWidth: 1 }}
                    />
                    <div
                      className="font-montserrat font-bold text-[11px] uppercase tracking-wider"
                      style={{ color: "var(--gf-dark)" }}
                    >
                      {f.title}
                    </div>
                    <div
                      className="text-[11px] leading-relaxed font-montserrat"
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
                Work With Us <Icon name="ArrowRight" size={16} />
              </button>
            </div>

            {/* Right: full-bleed truck image */}
            <div className="relative reveal-right" style={{ minHeight: 420 }}>
              <img
                src="https://cdn.poehali.dev/files/28640fc0-8124-4c4f-94ca-37bdb050f058.jpg"
                alt="John Deere tractor in field"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, var(--gf-cream) 0%, transparent 30%)",
                }}
              />
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
                Our Products
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
              Wide range of grains, pulses
              <br />
              and oilseeds for global markets
            </h2>
            <p
              className="text-sm"
              style={{
                color: "var(--gf-text-light)",
                fontFamily: "Montserrat",
              }}
            >
              Carefully selected. Consistent quality. Flexible supply.
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
                    {p.name}
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
                        {p.organic ? "Organic available" : "Conventional"}
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
                    <span
                      className="text-[11px] font-montserrat"
                      style={{ color: "var(--gf-text-light)" }}
                    >
                      MOQ{" "}
                    </span>
                    <span
                      className="text-[12px] font-bold font-montserrat"
                      style={{ color: "var(--gf-gold)" }}
                    >
                      {p.moq}
                    </span>
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
              {[
                {
                  icon: "ShieldCheck",
                  title: "Premium Quality",
                  desc: "Strict quality control at every stage",
                },
                {
                  icon: "Package",
                  title: "Flexible Packaging",
                  desc: "Retail packs, bags, big bags and bulk",
                },
                {
                  icon: "Tag",
                  title: "Private Label",
                  desc: "We produce under your brand",
                },
                {
                  icon: "Truck",
                  title: "Stable Supply",
                  desc: "Reliable volumes and on-time delivery",
                },
                {
                  icon: "FileText",
                  title: "Document Support",
                  desc: "Full export documentation support",
                },
                {
                  icon: "DollarSign",
                  title: "Competitive Prices",
                  desc: "Best value for long-term partnerships",
                },
              ].map((f, i) => (
                <div key={i} className="flex flex-col items-start gap-2">
                  <Icon
                    name={f.icon}
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
              ))}
            </div>
          </div>

          {/* Supply chain block */}
          <div
            className="mt-8 grid lg:grid-cols-2 gap-0 reveal"
            style={{ border: "1px solid rgba(0,0,0,0.07)" }}
          >
            {/* Left text */}
            <div
              className="p-8 flex flex-col justify-between"
              style={{ background: "#fff" }}
            >
              <div>
                <div
                  className="text-[10px] font-bold uppercase tracking-widest mb-3 font-montserrat"
                  style={{ color: "var(--gf-gold)" }}
                >
                  From Field to Shipment
                </div>
                <h3
                  className="font-cormorant font-semibold leading-tight mb-4"
                  style={{
                    fontSize: "clamp(26px, 3vw, 38px)",
                    color: "var(--gf-dark)",
                  }}
                >
                  Full control of the supply chain
                </h3>
                <p
                  className="text-[13px] leading-relaxed mb-6"
                  style={{
                    color: "var(--gf-text-light)",
                    fontFamily: "Montserrat",
                  }}
                >
                  We control every step — from farming and processing to storage
                  and delivery. This ensures consistent quality, traceability
                  and reliability for our partners worldwide.
                </p>
              </div>
              <button
                className="btn-outline-dark self-start"
                onClick={() =>
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More About Us <Icon name="ArrowRight" size={15} />
              </button>
            </div>

            {/* Right: 4 image tiles */}
            <div className="grid grid-cols-2">
              {[
                {
                  img: HERO_IMG,
                  icon: "Wheat",
                  label: "Our Fields",
                  desc: "Carefully managed for quality and yield",
                },
                {
                  img: FACTORY_IMG,
                  icon: "Settings",
                  label: "Processing",
                  desc: "Modern equipment for cleaning and sorting",
                },
                {
                  img: PRODUCTS_IMG,
                  icon: "Package",
                  label: "Storage",
                  desc: "Safe storage in our warehouses",
                },
                {
                  img: "https://ybvgdlhrldbkfqiccxxo.supabase.co/storage/v1/object/public/1/remaing.jpg",
                  icon: "Truck",
                  label: "Shipment",
                  desc: "Reliable logistics to global destinations",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="relative aspect-square img-zoom overflow-hidden"
                >
                  <img
                    src={t.img}
                    alt={t.label}
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.7 }}
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(14,26,15,0.85) 0%, transparent 60%)",
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center mb-2"
                      style={{
                        background: "rgba(201,151,58,0.25)",
                        border: "1px solid var(--gf-gold)",
                      }}
                    >
                      <Icon
                        name={t.icon}
                        size={13}
                        style={{ color: "var(--gf-gold)" }}
                      />
                    </div>
                    <div className="text-white font-bold text-[11px] uppercase tracking-wide font-montserrat">
                      {t.label}
                    </div>
                    <div className="text-white/60 text-[10px] font-montserrat leading-tight mt-0.5">
                      {t.desc}
                    </div>
                  </div>
                </div>
              ))}
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
                  Download Product Catalog
                </div>
                <div
                  className="text-[13px]"
                  style={{
                    color: "var(--gf-text-light)",
                    fontFamily: "Montserrat",
                  }}
                >
                  Get detailed specifications, packaging options, MOQ and
                  availability.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <button
                className="btn-gold"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Icon name="Download" size={16} />
                Download Catalog PDF
              </button>
              <span
                className="text-[10px] font-montserrat"
                style={{ color: "var(--gf-text-light)" }}
              >
                PDF • Updated regularly
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
                    Organic & Conventional
                  </div>
                  <h2
                    className="font-cormorant font-semibold text-white leading-tight mb-4"
                    style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
                  >
                    Organic &<br />
                    <span
                      style={{ color: "var(--gf-gold)", fontStyle: "italic" }}
                    >
                      Conventional Options
                    </span>
                  </h2>
                  <div
                    className="w-10 h-0.5 mb-5"
                    style={{ background: "var(--gf-gold)" }}
                  />
                  <p className="text-white/65 text-[14px] leading-relaxed max-w-xs font-montserrat">
                    We meet your needs with flexibility and care at every step.
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
                    Organic & Conventional options available —<br />
                    we meet your needs with flexibility and care.
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
                  Certified Organic
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
                Healthy products —<br />
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>
                  healthy planet
                </span>
              </h2>

              {/* Checkmarks */}
              <div className="space-y-3">
                {[
                  "EU Organic Certified",
                  "Traceable from field to final product",
                  "Sustainable farming practices",
                  "Available in organic grains, pulses and oilseeds",
                ].map((item, i) => (
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
                    EU Organic Certified
                  </div>
                  <div
                    className="text-[12px] font-montserrat"
                    style={{ color: "var(--gf-text-light)" }}
                  >
                    Available in organic grains, pulses and oilseeds
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
                Our Organic Products
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
              {[
                {
                  name: "BUCKWHEAT",
                  packaging: "25 kg / 50 kg / Big Bag",
                  img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/49906ef7-211c-4d64-beae-004e3518ef74.jpg",
                },
                {
                  name: "GREEN BUCKWHEAT",
                  packaging: "25 kg / 50 kg / Big Bag",
                  img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/bb689ed8-ee56-4684-b396-e560a076588f.jpg",
                },
                {
                  name: "BUCKWHEAT FLOUR",
                  packaging: "25 kg bags",
                  img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/5aa6f984-f5f5-4f4e-afe2-85e236e0a871.jpg",
                },
                {
                  name: "OAT FLAKES",
                  packaging: "25 kg / 50 kg / Big Bag",
                  img: "https://cdn.poehali.dev/projects/bed04f59-906c-4fa3-a533-f927837f2657/files/4e313381-f7ae-4934-8263-19f31994775f.jpg",
                },
              ].map((p, i) => (
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
                        Organic
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
                      MOQ from 1 MT
                    </div>
                  </div>
                </div>
              ))}

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
                    Conventional Range
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
                    We also supply a wide range of conventional grains, pulses
                    and oilseeds. Consistent quality. Reliable supply.
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
                  View All Products <Icon name="ArrowRight" size={13} />
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
                    From Field to Your Table
                  </span>
                </div>
                <p
                  className="text-[13px] font-montserrat"
                  style={{ color: "var(--gf-text-light)" }}
                >
                  Full control of the supply chain ensures consistent quality,
                  traceability and reliability.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2">
              {/* Left: 5 icons */}
              <div
                className="p-6 grid grid-cols-3 sm:grid-cols-5 gap-4 items-start border-r"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}
              >
                {[
                  {
                    icon: "Sun",
                    title: "10,000 ha",
                    desc: "own farmland full control",
                  },
                  {
                    icon: "Tractor",
                    title: "Carefully",
                    desc: "cultivated and harvested",
                  },
                  {
                    icon: "Factory",
                    title: "Modern",
                    desc: "processing facilities",
                  },
                  {
                    icon: "ScanLine",
                    title: "Strict quality",
                    desc: "control at every stage",
                  },
                  {
                    icon: "Ship",
                    title: "Reliable",
                    desc: "logistics to global markets",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <Icon
                      name={f.icon}
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
                ))}
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
                    {
                      img: "https://cdn.poehali.dev/files/4b5a57a3-7cdf-406e-8457-7140c7ed102e.jpg",
                      label: "FARMLAND",
                    },
                    {
                      img: "https://cdn.poehali.dev/files/3bb96d82-4e91-49da-a437-a8e84c943f7e.jpg",
                      label: "CLEANING & PROCESSING",
                    },
                    {
                      img: "https://cdn.poehali.dev/files/f11386c9-4001-4940-9b3c-a7cd36827549.jpg",
                      label: "BIG BAG PACKAGING",
                    },
                    {
                      img: "https://cdn.poehali.dev/files/6ebe549e-c65d-458a-9a25-7388c52a2e06.jpg",
                      label: "LOADING & SHIPPING",
                    },
                    {
                      img: "https://cdn.poehali.dev/files/0ef79656-d415-44e0-82f1-f24accc00604.jpg",
                      label: "GLOBAL DELIVERY",
                    },
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="relative img-zoom overflow-hidden"
                      style={{ height: 180 }}
                    >
                      <img
                        src={t.img}
                        alt={t.label}
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
                          {t.label}
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
                  Download Organic Certificate / Specification
                </div>
                <div
                  className="text-[12px] font-montserrat"
                  style={{ color: "var(--gf-text-light)" }}
                >
                  Get documentation, specifications and availability for organic
                  products.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <a
                href="/docs/organic-cert.pdf"
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
                Download Documents
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
                  "linear-gradient(to right, rgba(14,26,15,0.96) 0%, rgba(14,26,15,0.7) 55%, transparent 100%)",
              }}
            />
            <div className="relative z-10 p-10 md:p-14 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
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
                  Our Process
                </span>
                <Icon
                  name="Leaf"
                  size={14}
                  style={{ color: "var(--gf-gold)" }}
                />
              </div>
              <h2
                className="font-cormorant font-bold text-white leading-none mb-5"
                style={{
                  fontSize: "clamp(44px, 7vw, 84px)",
                  letterSpacing: "-0.01em",
                }}
              >
                FROM FIELD
                <br />
                TO EXPORT
              </h2>
              <p className="text-white/60 text-[14px] leading-relaxed mb-8 max-w-sm font-montserrat">
                We control every stage of production to ensure consistent
                quality, traceability and reliability for our partners.
              </p>
              {/* 4 pillars */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: "Leaf",
                    title: "Organic Fields",
                    desc: "Fertile land and careful cultivation",
                  },
                  {
                    icon: "ShieldCheck",
                    title: "Quality Control",
                    desc: "Field inspections and strict standards",
                  },
                  {
                    icon: "Settings",
                    title: "Modern Equipment",
                    desc: "Advanced machinery and technologies",
                  },
                  {
                    icon: "Globe",
                    title: "Global Supply",
                    desc: "Reliable logistics and on-time delivery",
                  },
                ].map((p, i) => (
                  <div key={i}>
                    <Icon
                      name={p.icon}
                      size={26}
                      style={{
                        color: "var(--gf-gold)",
                        strokeWidth: 1.3,
                        marginBottom: 8,
                      }}
                    />
                    <div className="font-montserrat font-bold text-[10px] uppercase tracking-widest text-white mb-1">
                      {p.title}
                    </div>
                    <div className="text-white/45 text-[11px] font-montserrat leading-snug">
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Our Activities ── */}
          <div className="mb-10 reveal">
            <div className="flex items-center justify-center gap-4 mb-6">
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
                Our Activities
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

            <div className="grid grid-cols-3 gap-3" style={{ height: 320 }}>
              {/* Left — combine */}
              <div
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src="https://cdn.poehali.dev/files/a6468418-4211-4d99-84c8-c706aca290f7.jpg"
                  alt="Combine harvester"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              {/* Center — fields */}
              <div
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={HERO_IMG}
                  alt="Fields"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              {/* Right — two stacked */}
              <div className="grid grid-rows-2 gap-3" style={{ height: 320 }}>
                <div
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={PRODUCTS_IMG}
                    alt="Big bags storage"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div
                  style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src="https://cdn.poehali.dev/files/da2cf99e-0ede-40d1-9533-e4434ebcdf01.jpg"
                    alt="Grain warehouse"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── 6-step process ── */}
          <div
            className="mb-10 reveal"
            style={{
              background: "var(--gf-cream)",
              borderRadius: 12,
              padding: "32px 28px",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  num: "01",
                  title: "Farming",
                  desc: "Cultivation of healthy and strong crops on fertile fields.",
                },
                {
                  num: "02",
                  title: "Harvesting",
                  desc: "Timely harvesting with modern agricultural machinery.",
                },
                {
                  num: "03",
                  title: "Processing",
                  desc: "Cleaning, sorting and quality control.",
                },
                {
                  num: "04",
                  title: "Storage",
                  desc: "Safe storage in clean and well-maintained facilities.",
                },
                {
                  num: "05",
                  title: "Packaging",
                  desc: "Flexible packaging solutions for different market needs.",
                },
                {
                  num: "06",
                  title: "Export",
                  desc: "Reliable logistics and global supply.",
                },
              ].map((s, i) => (
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

          {/* ── 3 bottom cards ── */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                img: "https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg", // packaging machine
                title: "Advanced Packaging",
                desc: "Modern equipment allows us to pack products from 200 g to 1000 g with high accuracy and product protection.",
                btn: "Learn More",
                target: "#products",
              },
              {
                img: "https://cdn.poehali.dev/files/98d43280-321a-4078-bb4e-2cd8a7e71f5e.jpg", // packaged goods
                title: "Flexible Solutions",
                desc: "We offer a wide range of packaging formats and private label options to support your brand.",
                btn: "Learn More",
                target: "#private-label",
              },
              {
                img: "https://cdn.poehali.dev/files/91652dc2-54a9-47e7-8b5f-fb8ec843b284.jpg", // big bags storage
                title: "Large Volumes",
                desc: "Our storage facilities and strong production capacity ensure stable supply and consistent quality.",
                btn: "Contact Us",
                target: "#contact",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="reveal"
                data-delay={String(i * 80)}
                style={{
                  background: "var(--gf-cream)",
                  borderRadius: 10,
                  border: "1px solid rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Fixed-height image, no absolute positioning */}
                <div style={{ height: 220, overflow: "hidden", flexShrink: 0 }}>
                  <img
                    src={c.img}
                    alt={c.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div
                    className="font-montserrat font-bold text-[12px] uppercase tracking-widest mb-2"
                    style={{ color: "var(--gf-dark)" }}
                  >
                    {c.title}
                  </div>
                  <p
                    className="text-[12px] leading-relaxed font-montserrat mb-5"
                    style={{ color: "var(--gf-text-light)", flex: 1 }}
                  >
                    {c.desc}
                  </p>
                  <button
                    className="btn-outline-dark text-[11px] py-2.5 px-5"
                    style={{ alignSelf: "flex-start" }}
                    onClick={() =>
                      document
                        .querySelector(c.target)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {c.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom trust bar ── */}
          <div
            className="mt-8 py-5 px-6 flex flex-wrap justify-around gap-6 reveal"
            style={{ background: "var(--gf-dark)", borderRadius: 10 }}
          >
            {[
              { icon: "Leaf", label: "100% Organic Certified" },
              { icon: "FlaskConical", label: "Lab Tested Quality" },
              { icon: "ShieldCheck", label: "Food Safety Standards" },
              { icon: "Truck", label: "On-Time Delivery" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <Icon
                  name={b.icon}
                  size={18}
                  style={{ color: "var(--gf-gold)" }}
                />
                <span className="font-montserrat font-bold text-[11px] uppercase tracking-wider text-white">
                  {b.label}
                </span>
              </div>
            ))}
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
                Certifications
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
              Quality You Can Trust
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
                      EU Organic Certified
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 10,
                        color: "var(--gf-text-light)",
                        marginTop: 1,
                      }}
                    >
                      European Organic Certification
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
                  {[
                    "EU Organic Certified",
                    "Traceable from field to final product",
                    "Sustainable farming practices",
                    "Available for selected products only",
                  ].map((item, i) => (
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
                    Organic available for:
                  </div>
                  {[
                    "Buckwheat",
                    "Green Buckwheat",
                    "Buckwheat Flour",
                    "Oat Flakes",
                  ].map((p, i) => (
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
                  Packaging & Supply
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 12,
                    color: "var(--gf-text-light)",
                    marginBottom: 32,
                  }}
                >
                  Flexible solutions for different needs
                </div>

                <div
                  className="cert-packaging-icons"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 24,
                  }}
                >
                  {[
                    {
                      icon: "Package",
                      title: "Retail Packaging",
                      size: "250 g – 5 kg",
                      desc: "Custom options available",
                    },
                    {
                      icon: "Boxes",
                      title: "Industrial Packaging",
                      size: "25 kg / 50 kg bags",
                      desc: "High quality packaging",
                    },
                    {
                      icon: "Container",
                      title: "Bulk Supply",
                      size: "500 – 1,000 kg\nBig Bags",
                      desc: "For large volume orders",
                    },
                    {
                      icon: "Truck",
                      title: "Container Shipping",
                      size: "20 ft / 40 ft",
                      desc: "Safe and secure delivery",
                    },
                  ].map((p, i) => (
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
                          name={p.icon}
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
                        {p.title}
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
                        {p.size}
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 11,
                          color: "var(--gf-text-light)",
                          lineHeight: 1.4,
                        }}
                      >
                        {p.desc}
                      </div>
                    </div>
                  ))}
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
                From Field to Your Business
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
            <div className="grid grid-cols-5 gap-2" style={{ height: 200 }}>
              {[
                {
                  img: "https://cdn.poehali.dev/files/82314d50-2676-4645-a5e6-e829f18b0d3b.jpg",
                  num: 1,
                  label: "Carefully selected organic fields",
                },
                {
                  img: "https://cdn.poehali.dev/files/3bb96d82-4e91-49da-a437-a8e84c943f7e.jpg",
                  num: 2,
                  label: "Modern cleaning & processing",
                },
                {
                  img: "https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg",
                  num: 3,
                  label: "Quality packaging & labeling",
                },
                {
                  img: "https://cdn.poehali.dev/files/431dd6c0-d618-4737-aaca-53e45662be51.jpg",
                  num: 4,
                  label: "Reliable logistics & delivery",
                },
                {
                  img: "https://cdn.poehali.dev/files/74b2aea6-bad4-4065-98fb-2a8f79de5cfd.jpg",
                  num: 5,
                  label: "Export-ready shipments",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    borderRadius: 8,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={t.img}
                    alt={t.label}
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
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                      fontSize: 11,
                      color: "#fff",
                    }}
                  >
                    {t.num}
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
                      {t.label}
                    </div>
                  </div>
                </div>
              ))}
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
                    Private Label
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
                  Your Brand,
                  <br />
                  <span
                    style={{ color: "var(--gf-gold)", fontStyle: "italic" }}
                  >
                    Our Quality
                  </span>
                </h2>
                <p
                  className="font-montserrat text-[14px] leading-relaxed mb-7"
                  style={{ color: "var(--gf-text-light)" }}
                >
                  From concept to shelf-ready packaging — we produce premium
                  grain products under your brand for retailers, distributors
                  and private importers worldwide.
                </p>

                {/* 5 features */}
                <div className="grid grid-cols-3 gap-x-5 gap-y-5 mb-8">
                  {[
                    {
                      icon: "LayoutTemplate",
                      label: "Custom packaging design",
                    },
                    { icon: "Tag", label: "Your brand, your label" },
                    { icon: "Layers", label: "All product types available" },
                    { icon: "Store", label: "Retail & wholesale volumes" },
                    {
                      icon: "Leaf",
                      label: "EU Organic certification possible",
                    },
                  ].map((f, i) => (
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
                  ))}
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
                Request Private Label Proposal{" "}
                <Icon name="ArrowRight" size={15} />
              </button>
            </div>

            {/* Right: 2x2 photo+info grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  img: "https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg", // packaging machine TEKO
                  icon: "ShoppingBag",
                  title: "Retail Packaging",
                  size: "250 g – 5 kg",
                  desc: "Custom design and printing options for your brand.",
                },
                {
                  img: "https://cdn.poehali.dev/files/de1e27a0-f677-4f7c-b4f6-f54a3d8c5abc.jpg", // big bags in storage
                  icon: "Package2",
                  title: "Big Bags",
                  size: "500 – 1,000 kg",
                  desc: "Industrial bulk packaging for large volume supply.",
                },
                {
                  img: "https://cdn.poehali.dev/files/431dd6c0-d618-4737-aaca-53e45662be51.jpg", // KAMAZ truck
                  icon: "Container",
                  title: "FCL Container Supply",
                  size: "20 ft / 40 ft",
                  desc: "Full container shipments for safe and efficient delivery.",
                },
                {
                  img: "https://cdn.poehali.dev/files/98d43280-321a-4078-bb4e-2cd8a7e71f5e.jpg", // packed goods on pallets
                  icon: "Tag",
                  title: "Private Label",
                  size: "Concept → Shelf-ready",
                  desc: "From product selection to ready-to-sell packaging.",
                },
              ].map((c, i) => (
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
              ))}
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
                Our Private Label Process
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
              {[
                {
                  icon: "Wheat",
                  num: 1,
                  title: "Product Selection",
                  desc: "Choose from our wide range of grains, pulses and oilseeds.",
                },
                {
                  icon: "Palette",
                  num: 2,
                  title: "Packaging & Design",
                  desc: "We create packaging design that represents your brand.",
                },
                {
                  icon: "ShieldCheck",
                  num: 3,
                  title: "Certification & Labeling",
                  desc: "EU Organic certification available. All labeling requirements covered.",
                },
                {
                  icon: "Factory",
                  num: 4,
                  title: "Production & Quality Control",
                  desc: "Modern facilities and strict quality control at every stage.",
                },
                {
                  icon: "Ship",
                  num: 5,
                  title: "Container Shipment",
                  desc: "Full container loads delivered to your port on time.",
                },
              ].map((s, i) => (
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
                        name={s.icon}
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
                      {s.num}
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
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 11,
                      color: "var(--gf-text-light)",
                      lineHeight: 1.4,
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Row 3: Reliable Partner dark block + 4 photos ── */}
          <div
            className="grid md:grid-cols-5 gap-0 mt-8 reveal"
            style={{ borderRadius: 10, overflow: "hidden" }}
          >
            {/* Dark left */}
            <div
              style={{
                background: "var(--gf-dark)",
                padding: "32px 28px",
                gridColumn: "span 1",
              }}
            >
              <h3
                className="font-cormorant text-white leading-tight mb-6"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  fontWeight: 400,
                }}
              >
                Reliable Partner for Your Brand
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: "Wheat",
                    val: "10,000 ha",
                    sub: "Own farmland",
                    desc: "Full control over raw materials",
                  },
                  {
                    icon: "ShieldCheck",
                    val: "Consistent",
                    sub: "Quality",
                    desc: "Strict standards and laboratory control",
                  },
                  {
                    icon: "Globe",
                    val: "Export",
                    sub: "Experience",
                    desc: "Exporting to Europe and China",
                  },
                  {
                    icon: "Handshake",
                    val: "Long-term",
                    sub: "Cooperation",
                    desc: "Flexible approach and personal care",
                  },
                ].map((s, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: "var(--gf-gold)",
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                        marginBottom: 1,
                      }}
                    >
                      {s.sub}
                    </div>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: 10,
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.3,
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 photos */}
            {[
              "https://cdn.poehali.dev/files/4b5a57a3-7cdf-406e-8457-7140c7ed102e.jpg", // own fields — 10,000 ha
              "https://cdn.poehali.dev/files/e43ef89f-fe22-4c5d-9966-3f78245a4cee.jpg", // packaging machine — quality
              "https://cdn.poehali.dev/files/431dd6c0-d618-4737-aaca-53e45662be51.jpg", // KAMAZ — export experience
              "https://cdn.poehali.dev/files/98d43280-321a-4078-bb4e-2cd8a7e71f5e.jpg", // packed pallets — long-term
            ].map((img, i) => (
              <div key={i} style={{ overflow: "hidden", minHeight: 260 }}>
                <img
                  src={img}
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
                    Let's create something great together
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 12,
                      color: "var(--gf-text-light)",
                    }}
                  >
                    Tell us about your needs and we will prepare a custom
                    solution for your business.
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
                  Get Your Custom Offer <Icon name="ArrowRight" size={16} />
                </button>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 10,
                    color: "var(--gf-text-light)",
                    textAlign: "right",
                  }}
                >
                  info@gavrilovfoods.com &nbsp;•&nbsp; www.gavrilovfoods.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ GALLERY ═══════════════ */}
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
                    From Farm to Export —{" "}
                    <span
                      style={{ color: "var(--gf-gold)", fontStyle: "italic" }}
                    >
                      Full Control at Every Stage
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
                    We own our farmland, control the entire production process
                    and ensure reliable quality behind every shipment.
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
              {[
                { icon: "Wheat", val: "10,000 ha", label: "Own Farmland" },
                {
                  icon: "Warehouse",
                  val: "5,000 m²",
                  label: "Warehouse Capacity",
                },
                {
                  icon: "Settings",
                  val: "Modern",
                  label: "Processing Equipment",
                },
                {
                  icon: "Globe",
                  val: "Export-Ready",
                  label: "Packaging & Logistics",
                },
              ].map((s, i) => (
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
                    name={s.icon}
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
              ))}
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
              {[
                {
                  num: 1,
                  title: "Own Farmland",
                  desc: "Fertile fields and sustainable farming practices.",
                },
                {
                  num: 2,
                  title: "Harvesting",
                  desc: "Modern machinery and experienced team.",
                },
                {
                  num: 3,
                  title: "Cleaning & Processing",
                  desc: "Advanced cleaning, sorting and product processing.",
                },
                {
                  num: 4,
                  title: "Storage & Export Packaging",
                  desc: "Safe storage and strong export packaging.",
                },
                {
                  num: 5,
                  title: "Container Loading & Export",
                  desc: "Careful loading and on-time delivery to global markets.",
                },
              ].flatMap((s, i) => {
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
                "https://cdn.poehali.dev/files/4b5a57a3-7cdf-406e-8457-7140c7ed102e.jpg", // buckwheat field
                "https://cdn.poehali.dev/files/155c8c27-6d57-4864-911f-cac81473d289.jpg", // buckwheat field 2
                "https://cdn.poehali.dev/files/3bb96d82-4e91-49da-a437-a8e84c943f7e.jpg", // John Deere
                "https://cdn.poehali.dev/files/f11386c9-4001-4940-9b3c-a7cd36827549.jpg", // big bags
                "https://cdn.poehali.dev/files/431dd6c0-d618-4737-aaca-53e45662be51.jpg", // KAMAZ
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

          {/* ── Row 3: Dark trust block + 4 wide photos ── */}
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr 1fr 1fr 1fr",
              gap: 4,
              borderRadius: 10,
              overflow: "hidden",
              minHeight: 220,
            }}
          >
            {/* Dark left: Why Buyers Trust */}
            <div
              style={{
                background: "var(--gf-dark)",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "#fff",
                    marginBottom: 16,
                  }}
                >
                  Why Buyers Trust Gavrilov Foods
                </h3>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {[
                    {
                      icon: "Wheat",
                      title: "Own Farmland",
                      desc: "Full control from seed to Harvest",
                    },
                    {
                      icon: "ShieldCheck",
                      title: "Quality & Safety",
                      desc: "Modern equipment and strict quality control.",
                    },
                    {
                      icon: "ScanLine",
                      title: "Full Traceability",
                      desc: "Transparent and traceable supply chain.",
                    },
                    {
                      icon: "Globe",
                      title: "Export Experience",
                      desc: "Reliable export packaging and logistics.",
                    },
                    {
                      icon: "Leaf",
                      title: "EU Organic Available",
                      desc: "Certified organic products for global markets.",
                    },
                  ].map((t, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <Icon
                        name={t.icon}
                        size={13}
                        style={{
                          color: "var(--gf-gold)",
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          {t.title}{" "}
                        </span>
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: 10,
                            color: "rgba(255,255,255,0.35)",
                          }}
                        >
                          {t.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="btn-gold"
                style={{ marginTop: 16, fontSize: 11, padding: "10px 16px" }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Request a Quote <Icon name="ArrowRight" size={13} />
              </button>
            </div>

            {/* 4 wide photos */}
            {[
              "https://cdn.poehali.dev/files/51ae26bd-c7fe-480a-9f36-813ad383270f.jpg", // Kirovets tractor + truck
              "https://cdn.poehali.dev/files/8d03071c-03b0-44e5-a0b2-f9c3e6caf88e.jpg", // owner with Kirovets
              "https://cdn.poehali.dev/files/adfab279-52dd-4dc8-beb1-1d55cb2b0a2f.jpg", // sowing machine
              "https://cdn.poehali.dev/files/3efd98e0-a84f-449a-aebd-9379d7fa092e.jpg", // BTZ tractor
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
            {[
              {
                icon: "ShieldCheck",
                title: "Reliable Supply",
                desc: "Stable volumes and on-time delivery.",
              },
              {
                icon: "Award",
                title: "Certified Quality",
                desc: "EU Organic certification available.",
              },
              {
                icon: "Package",
                title: "Flexible Solutions",
                desc: "Custom packaging for your brand.",
              },
              {
                icon: "Globe",
                title: "Global Standards",
                desc: "We meet international food safety standards.",
              },
              {
                icon: "Handshake",
                title: "Long-term Partnership",
                desc: "Built on trust, quality and transparency.",
              },
            ].map((t, i) => (
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
                  name={t.icon}
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
                    {t.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 11,
                      color: "var(--gf-text-light)",
                      lineHeight: 1.4,
                    }}
                  >
                    {t.desc}
                  </div>
                </div>
              </div>
            ))}
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
              Request
              <br />
              <span style={{ color: "var(--gf-gold)", fontStyle: "italic" }}>
                Request a Quote
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
              Tell us about your needs and our export team will send you a
              competitive offer <strong>within 24 hours.</strong>
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
                label: "Phone / WhatsApp",
                value: "+7 903 790 17 95",
                sub: "Mon – Fri: 9:00 – 18:00 (MSK)",
                href: "tel:+79037901795",
              },
              {
                icon: "Mail",
                label: "Email",
                value: "gavrilovfoods.export@gmail.com",
                sub: "We reply within 24 hours",
                href: "mailto:gavrilovfoods.export@gmail.com",
              },
              {
                icon: "MapPin",
                label: "Location",
                value: "Smolensk Region, Russia",
                sub: "EU export documentation available",
              },
              {
                icon: "Globe",
                label: "Export Markets",
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
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 13,
                          color: "var(--gf-dark)",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        🇪🇺 Europe
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontSize: 13,
                          color: "var(--gf-dark)",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        🇨🇳 China
                      </div>
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
              Send us your request
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
                  { label: "Name *", type: "text", placeholder: "Your name" },
                  {
                    label: "Email *",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                  {
                    label: "Phone / WhatsApp *",
                    type: "tel",
                    placeholder: "+1 000 000 0000",
                  },
                  {
                    label: "Company *",
                    type: "text",
                    placeholder: "Company name",
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
                    label: "Product of Interest *",
                    type: "select",
                    placeholder: "Select product",
                    opts: [
                      "Buckwheat",
                      "Green Buckwheat",
                      "Buckwheat Flour",
                      "Oat Flakes",
                      "Red Lentils",
                      "Yellow Peas",
                      "Chickpeas",
                      "Wheat",
                    ],
                  },
                  {
                    label: "Packaging Type *",
                    type: "select",
                    placeholder: "Select packaging",
                    opts: [
                      "250g – 5kg retail bags",
                      "25 / 50 kg bags",
                      "500–1000 kg Big Bags",
                      "20 ft container",
                      "40 ft container",
                    ],
                  },
                  {
                    label: "Estimated Volume *",
                    type: "select",
                    placeholder: "Select volume",
                    opts: [
                      "1–5 MT",
                      "5–20 MT",
                      "20–100 MT",
                      "100+ MT",
                      "Full container (FCL)",
                    ],
                  },
                  {
                    label: "Destination Country *",
                    type: "text",
                    placeholder: "e.g. Germany, UAE, Brazil",
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
                    Message *
                  </label>
                  <textarea
                    placeholder="Volume, packaging, destination country, any specific requirements..."
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
                  {[
                    { icon: "ShieldCheck", label: "Quality You Can Trust" },
                    { icon: "Truck", label: "On-Time Delivery" },
                    { icon: "DollarSign", label: "Competitive Prices" },
                    { icon: "Handshake", label: "Long-term Partnership" },
                  ].map((t, i) => (
                    <div key={i}>
                      <Icon
                        name={t.icon}
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
                        {t.label}
                      </div>
                    </div>
                  ))}
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
                I agree to the{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  style={{
                    color: "var(--gf-gold)",
                    textDecoration: "underline",
                  }}
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms"
                  target="_blank"
                  style={{
                    color: "var(--gf-gold)",
                    textDecoration: "underline",
                  }}
                >
                  Terms & Conditions
                </a>{" "}
                of Gavrilov Foods and consent to the processing of my personal
                data for export inquiry purposes.
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
                    ? "Please accept the Privacy Policy and Terms to continue"
                    : ""
                }
              >
                Request Export Offer <Icon name="ArrowRight" size={16} />
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
                WhatsApp Export Manager
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
            {[
              {
                img: "https://cdn.poehali.dev/files/e0686aa0-2df7-454a-b318-5e843ea52142.png",
                isImg: true,
                title: "EU Organic Certified",
                desc: "Certified organic products for global markets.",
              },
              {
                icon: "Package",
                title: "MOQ from 1 MT",
                desc: "Flexible minimum order quantity from 1 MT.",
              },
              {
                icon: "Tag",
                title: "Private Label",
                desc: "Custom packaging and private label solutions.",
              },
              {
                icon: "FileText",
                title: "Export Support",
                desc: "Full documentation and logistics support at every step.",
              },
              {
                icon: "Clock",
                title: "Fast Response",
                desc: "We reply within 24 hours on business days.",
              },
            ].map((b, i) => (
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
                {b.isImg ? (
                  <img
                    src={
                      (
                        b as {
                          img: string;
                          isImg: boolean;
                          title: string;
                          desc: string;
                        }
                      ).img
                    }
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
                    name={
                      (b as { icon: string; title: string; desc: string }).icon
                    }
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
                    {b.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      color: "var(--gf-text-light)",
                      lineHeight: 1.4,
                    }}
                  >
                    {b.desc}
                  </div>
                </div>
              </div>
            ))}
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
            "https://cdn.poehali.dev/files/3bb96d82-4e91-49da-a437-a8e84c943f7e.jpg", // John Deere
            "https://cdn.poehali.dev/files/de1e27a0-f677-4f7c-b4f6-f54a3d8c5abc.jpg", // big bags
            "https://cdn.poehali.dev/files/431dd6c0-d618-4737-aaca-53e45662be51.jpg", // KAMAZ
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
                Farm-to-export grain supplier
                <br />
                Organic grains, pulses & oilseeds
                <br />
                EU-certified production
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
                Smolensk Region, Russia
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 20,
                }}
              >
                Working with importers worldwide
                <br />
                to deliver quality and value.
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
                Quick Links
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  "About Us",
                  "Our Products",
                  "Organic",
                  "Export",
                  "Certifications",
                  "Private Label",
                  "Gallery",
                  "Contact",
                ].map((l, i) => {
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
                Export Markets
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 12px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 6,
                  }}
                >
                  <span style={{ fontSize: 18 }}>🇪🇺</span>
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      color: "#fff",
                    }}
                  >
                    Europe
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 12px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 6,
                  }}
                >
                  <span style={{ fontSize: 18 }}>🇨🇳</span>
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      color: "#fff",
                    }}
                  >
                    China
                  </span>
                </div>
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
                Contact
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
                WhatsApp Export Manager
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
                Download Catalog PDF
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
            >
              © 2024 Gavrilov Foods
            </div>
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