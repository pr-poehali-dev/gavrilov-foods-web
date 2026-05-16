import { useEffect } from "react";
import Icon from "@/components/ui/icon";

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", background: "var(--gf-cream)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "var(--gf-dark)", padding: "20px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="https://cdn.poehali.dev/files/98580a98-5226-4433-8666-a0e8765c865c.png"
              alt="Gavrilov Organic Foods"
              style={{ height: 46, width: "auto", objectFit: "contain" }}
            />
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
          Terms & Conditions
        </h1>
        <div style={{ fontSize: 13, color: "var(--gf-text-light)", marginBottom: 40 }}>Last updated: May 2025 &nbsp;|&nbsp; Gavrilov Foods, Smolensk Region, Russia</div>

        <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 10, padding: "40px 44px", lineHeight: 1.8 }}>

          {[
            {
              title: "1. General Provisions",
              text: `These Terms & Conditions ("Terms") govern the use of the Gavrilov Foods website and any export inquiries, commercial communications, or transactions initiated through it. By accessing our website or submitting an inquiry, you confirm that you have read, understood, and agree to be bound by these Terms.\n\nGavrilov Foods is an agricultural export company registered in the Smolensk Region, Russia, engaged in the production, processing and export of grain products.`
            },
            {
              title: "2. Use of the Website",
              text: `You may use this website solely for lawful purposes related to exploring our products and services or initiating a legitimate export inquiry. You agree not to:\n\n• Use the website for any fraudulent or unlawful purpose\n• Transmit any unsolicited commercial communications (spam)\n• Attempt to gain unauthorised access to any part of the website\n• Use automated tools to scrape or collect data from the website\n\nWe reserve the right to restrict or terminate access to the website at our discretion without notice.`
            },
            {
              title: "3. Export Inquiries and Offers",
              text: `Submitting an inquiry form on our website does not constitute a binding contract. All information provided in response to an inquiry — including prices, volumes, packaging options, and delivery timelines — constitutes a non-binding commercial offer unless explicitly stated otherwise in a signed written agreement.\n\nFinal terms of any sale are governed by a separate written contract (purchase agreement) signed by both parties.`
            },
            {
              title: "4. Product Information",
              text: `We strive to provide accurate and up-to-date product information, including specifications, certification availability, minimum order quantities (MOQ), and packaging options. However, product availability, prices, and certification status may change without notice.\n\nAll product images are for illustrative purposes only. Actual product appearance may vary depending on batch, season, and packaging format.`
            },
            {
              title: "5. Pricing and Payment",
              text: `All prices quoted by Gavrilov Foods are indicative and subject to change based on market conditions, exchange rates, and logistics factors. A fixed price is only guaranteed once a formal purchase agreement has been executed.\n\nPayment terms are defined in the individual sales contract and may include advance payment, letter of credit (L/C), or other methods agreed upon by both parties.`
            },
            {
              title: "6. Delivery and Logistics",
              text: `Delivery terms (Incoterms), transport routes, container types (20 ft / 40 ft FCL), and estimated delivery timelines are discussed and confirmed individually for each order. Gavrilov Foods is not liable for delays caused by force majeure events, port congestion, customs clearance, or other factors beyond our reasonable control.`
            },
            {
              title: "7. Quality and Certification",
              text: `Gavrilov Foods guarantees that all exported products meet the quality specifications agreed upon in the purchase contract. EU Organic certification is available for selected products (Buckwheat, Green Buckwheat, Buckwheat Flour, Oat Flakes). Phytosanitary certificates, quality certificates, and other required export documents are provided as part of the standard shipment package.\n\nClaims regarding product quality must be submitted in writing within 14 calendar days of receiving the goods, supported by laboratory analysis from an accredited testing facility.`
            },
            {
              title: "8. Intellectual Property",
              text: `All content on this website — including text, images, logos, product photography, and design — is the intellectual property of Gavrilov Foods or its licensed suppliers. You may not reproduce, distribute, modify, or create derivative works from any website content without prior written consent from Gavrilov Foods.`
            },
            {
              title: "9. Limitation of Liability",
              text: `To the maximum extent permitted by applicable law, Gavrilov Foods shall not be liable for:\n\n• Any indirect, incidental, or consequential damages arising from the use of this website\n• Losses resulting from delays, errors, or omissions in product or pricing information\n• Damages caused by force majeure events affecting delivery or production\n\nOur total liability in connection with any claim arising from these Terms shall not exceed the value of the specific order in dispute.`
            },
            {
              title: "10. Confidentiality",
              text: `Any commercial information exchanged between Gavrilov Foods and a prospective or existing buyer — including pricing, volumes, and terms — is considered confidential and shall not be disclosed to third parties without prior written consent, except as required by law.`
            },
            {
              title: "11. Governing Law and Dispute Resolution",
              text: `These Terms are governed by the laws of the Russian Federation. Any disputes arising from or in connection with these Terms shall be resolved through good-faith negotiations. If negotiations fail within 30 days, disputes shall be submitted to the competent court or arbitration body as agreed by both parties in the purchase contract.`
            },
            {
              title: "12. Changes to These Terms",
              text: `We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the website after any changes constitutes acceptance of the revised Terms.`
            },
            {
              title: "13. Contact",
              text: `For questions regarding these Terms & Conditions, please contact us:\n\nEmail: gavrilovfoods.export@gmail.com\nPhone: +7 903 790 17 95\nAddress: Smolensk Region, Russia`
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
          <a href="/privacy-policy" style={{ fontFamily: "Montserrat", fontSize: 12, color: "var(--gf-gold)", textDecoration: "underline" }}>
            ← Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}