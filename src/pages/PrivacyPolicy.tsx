import { useEffect } from "react";
import Icon from "@/components/ui/icon";

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", background: "var(--gf-cream)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "var(--gf-dark)", padding: "20px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--gf-gold)", background: "var(--gf-dark)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Wheat" size={16} style={{ color: "var(--gf-gold)" }} />
            </div>
            <div>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: 16, color: "#fff", lineHeight: 1 }}>GAVRILOV</div>
              <div style={{ fontFamily: "Montserrat", fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>FOODS</div>
            </div>
          </a>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 13 }}>
            <Icon name="ArrowLeft" size={15} />
            Back to site
          </a>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ marginBottom: 8, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gf-gold)", fontWeight: 700 }}>Legal</div>
        <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: "var(--gf-dark)", marginBottom: 8, lineHeight: 1.1 }}>
          Privacy Policy
        </h1>
        <div style={{ fontSize: 13, color: "var(--gf-text-light)", marginBottom: 40 }}>Last updated: May 2025 &nbsp;|&nbsp; Gavrilov Foods, Smolensk Region, Russia</div>

        <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 10, padding: "40px 44px", lineHeight: 1.8 }}>

          {[
            {
              title: "1. Introduction",
              text: `Gavrilov Foods ("we", "our", "us") is committed to protecting the privacy of our business partners, website visitors and anyone who submits an inquiry through our website. This Privacy Policy explains what personal data we collect, how we use it, and your rights in relation to it. By using our website or submitting an inquiry form, you agree to the practices described in this Policy.`
            },
            {
              title: "2. Data Controller",
              text: `The data controller responsible for your personal data is:\n\nGavrilov Foods\nSmolensk Region, Russia\nEmail: gavrilovfoods.export@gmail.com\nPhone: +7 903 790 17 95`
            },
            {
              title: "3. What Data We Collect",
              text: `When you submit an export inquiry form on our website, we may collect the following personal data:\n\n• Full name\n• Company name\n• Email address\n• Phone number / WhatsApp\n• Destination country\n• Product interest and estimated volume\n• Message content\n\nWe do not collect sensitive personal data (such as health information, political opinions, etc.).`
            },
            {
              title: "4. How We Use Your Data",
              text: `We use your personal data solely for the following purposes:\n\n• To respond to your export inquiry\n• To prepare and send a commercial offer\n• To communicate with you regarding your order or request\n• To comply with legal obligations\n\nWe do not use your data for automated decision-making or profiling. We do not sell your personal data to third parties.`
            },
            {
              title: "5. Legal Basis for Processing",
              text: `We process your personal data based on:\n\n• Your explicit consent provided by ticking the checkbox in our inquiry form (Article 6(1)(a) GDPR)\n• The performance of a contract or pre-contractual measures at your request (Article 6(1)(b) GDPR)\n• Our legitimate interests in responding to business inquiries (Article 6(1)(f) GDPR)`
            },
            {
              title: "6. Data Retention",
              text: `We retain your personal data for as long as necessary to fulfil the purposes for which it was collected — typically no longer than 3 years after our last communication. After this period, your data is securely deleted or anonymised.`
            },
            {
              title: "7. Data Sharing",
              text: `We may share your data with:\n\n• Trusted logistics and documentation partners (only as necessary to fulfil your order)\n• IT service providers who host or maintain our website (under strict data processing agreements)\n• Legal and regulatory authorities if required by law\n\nAll third parties are required to process your data in compliance with applicable data protection laws.`
            },
            {
              title: "8. International Transfers",
              text: `Our business operations are based in Russia. If you are located in the European Union or another jurisdiction, your data may be transferred internationally. We ensure appropriate safeguards are in place in accordance with applicable data protection law.`
            },
            {
              title: "9. Your Rights",
              text: `Depending on your location, you may have the following rights regarding your personal data:\n\n• Right of access — obtain a copy of the data we hold about you\n• Right to rectification — request correction of inaccurate data\n• Right to erasure — request deletion of your data ("right to be forgotten")\n• Right to restriction — request limited processing of your data\n• Right to data portability — receive your data in a structured format\n• Right to withdraw consent — at any time, without affecting prior processing\n• Right to object — to processing based on legitimate interests\n• Right to lodge a complaint — with a supervisory data protection authority\n\nTo exercise any of these rights, contact us at: gavrilovfoods.export@gmail.com`
            },
            {
              title: "10. Cookies",
              text: `Our website may use essential technical cookies to ensure its correct functioning. We do not use advertising or tracking cookies without your consent. For detailed information on cookies, please refer to your browser's help section.`
            },
            {
              title: "11. Security",
              text: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction or alteration. However, no internet transmission is completely secure, and we cannot guarantee absolute security.`
            },
            {
              title: "12. Changes to This Policy",
              text: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The updated version will be posted on this page with a revised "Last updated" date. We encourage you to review this Policy periodically.`
            },
            {
              title: "13. Contact Us",
              text: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:\n\nEmail: gavrilovfoods.export@gmail.com\nPhone: +7 903 790 17 95\nAddress: Smolensk Region, Russia`
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gf-dark)", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ display: "inline-block", width: 3, height: 16, background: "var(--gf-gold)", borderRadius: 2, flexShrink: 0 }} />
                {section.title}
              </h2>
              <p style={{ fontFamily: "Montserrat", fontSize: 13, color: "var(--gf-text-light)", whiteSpace: "pre-line", margin: 0 }}>
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, padding: "20px 24px", background: "var(--gf-dark)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "Montserrat", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            © 2024 Gavrilov Foods · gavrilovfoods.export@gmail.com
          </div>
          <a href="/terms" style={{ fontFamily: "Montserrat", fontSize: 12, color: "var(--gf-gold)", textDecoration: "underline" }}>
            Terms & Conditions →
          </a>
        </div>
      </div>
    </div>
  );
}
