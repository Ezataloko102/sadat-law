type ServicesProps = {
  locale: "en" | "de";
};

const content = {
  en: {
    badge: "Services",
    title: "Professional Legal & Administrative Support",
    intro:
      "We provide out-of-court legal services in Afghan civil and administrative law under the German Legal Services Act (RDG), as well as structured administrative support for immigration-related procedures in Germany.",

    legalTag: "Foreign Law",
    legalTitle: "Legal Services – Foreign Law",
    legalDesc:
      "Afghan civil and administrative law services provided out-of-court in accordance with the German Legal Services Act (RDG).",
    legalBtn: "Request Consultation",
    legalDisclaimer:
      "Services are provided out-of-court in accordance with the German Legal Services Act (RDG). No representation before German courts or authorities is provided.",

    adminTag: "Non-Legal Support",
    adminTitle: "Immigration & Administrative Support",
    adminDesc:
      "We provide structured administrative support for individuals navigating immigration-related procedures in Germany. Our services focus on organization, preparation, and guidance, ensuring clarity and efficiency at every step.",
    adminForTitle: "Who This Service Is For",
    adminBtn: "Get Administrative Support",
    adminDisclaimer:
      "This service provides administrative support only and does not constitute legal advice or legal representation.",

    vercel: "Optimized for modern deployment with Vercel.",

    areas: [
      {
        title: "Family Law",
        sub: "Familienrecht",
        items: [
          "Pre-marriage legal consultation",
          "Marriage registration and documentation",
          "Marital financial agreements",
          "Divorce, dowry, and financial claims",
          "Legal opinions based on Afghan law",
        ],
      },
      {
        title: "Inheritance & Estate",
        sub: "Erbrecht & Nachlass",
        items: [
          "Determination of heirs",
          "Distribution of inheritance",
          "Drafting and execution of wills",
          "Inheritance tax considerations",
          "Death certificates and official confirmations",
        ],
      },
      {
        title: "Real Estate & Property Law",
        sub: "Immobilien- & Grundstücksrecht",
        items: [
          "Ownership documents and title deeds",
          "Property transfer and registration",
          "Buying and selling property",
          "Lease agreements and rental matters",
          "Ownership disputes and claims",
        ],
      },
      {
        title: "Consular & Administrative Matters",
        sub: "Konsularische & administrative Angelegenheiten",
        items: [
          "Identity documentation matters",
          "Passport, national ID and Tazkira matters",
          "Powers of attorney",
          "Certificates of single status",
          "Other official documents",
        ],
      },
      {
        title: "Commercial, Civil & Financial Matters",
        sub: "Handels-, Zivil- & Finanzangelegenheiten",
        items: [
          "Domestic and international commercial contracts",
          "Company registration, changes, and dissolution",
          "Resolution of commercial disputes",
          "Cross-border trade advisory",
          "Property transactions and claims recovery",
        ],
      },
    ],

    supportItems: [
      "Individuals navigating immigration procedures",
      "Applicants needing structured administrative support",
      "Clients seeking clarity in documentation and processes",
    ],
  },

  de: {
    badge: "Dienstleistungen",
    title: "Professionelle rechtliche und administrative Unterstützung",
    intro:
      "Wir bieten außergerichtliche Rechtsdienstleistungen im afghanischen Zivil- und Verwaltungsrecht gemäß RDG sowie strukturierte administrative Unterstützung für Einwanderungsverfahren in Deutschland.",

    legalTag: "Ausländisches Recht",
    legalTitle: "Rechtsdienstleistungen – Ausländisches Recht",
    legalDesc:
      "Dienstleistungen im afghanischen Zivil- und Verwaltungsrecht, außergerichtlich gemäß dem Rechtsdienstleistungsgesetz (RDG).",
    legalBtn: "Beratung anfordern",
    legalDisclaimer:
      "Alle Dienstleistungen werden außergerichtlich gemäß RDG erbracht. Eine Vertretung vor deutschen Gerichten oder Behörden wird nicht angeboten.",

    adminTag: "Nicht-Rechtsdienstleistung",
    adminTitle: "Einwanderungs- & Verwaltungsunterstützung",
    adminDesc:
      "Wir bieten strukturierte administrative Unterstützung für Personen, die Einwanderungsverfahren in Deutschland durchlaufen. Der Fokus liegt auf Organisation, Vorbereitung und Anleitung, um Klarheit und Effizienz in allen Schritten sicherzustellen.",
    adminForTitle: "Für wen dieser Service geeignet ist",
    adminBtn: "Administrative Unterstützung erhalten",
    adminDisclaimer:
      "Dieser Service bietet ausschließlich administrative Unterstützung und stellt keine Rechtsberatung oder rechtliche Vertretung dar.",

    vercel: "Optimiert für modernes Deployment mit Vercel.",

    areas: [
      {
        title: "Familienrecht",
        sub: "Family Law",
        items: [
          "Rechtsberatung vor der Eheschließung",
          "Registrierung und Dokumentation der Ehe",
          "Eheverträge und finanzielle Vereinbarungen",
          "Scheidung, Mitgift und finanzielle Ansprüche",
          "Rechtsgutachten basierend auf afghanischem Recht",
        ],
      },
      {
        title: "Erbrecht & Nachlass",
        sub: "Inheritance & Estate",
        items: [
          "Erbenfeststellung",
          "Erbaufteilung",
          "Erstellung und Umsetzung von Testamenten",
          "Beratung zu Erbschaftssteuern",
          "Sterbeurkunden und offizielle Bestätigungen",
        ],
      },
      {
        title: "Immobilien- & Grundstücksrecht",
        sub: "Real Estate & Property Law",
        items: [
          "Eigentumsnachweise und Grundbuchurkunden",
          "Eigentumsübertragungen und Registrierung",
          "Kauf und Verkauf von Immobilien",
          "Mietverträge und mietrechtliche Angelegenheiten",
          "Eigentumsstreitigkeiten",
        ],
      },
      {
        title: "Konsularische & administrative Angelegenheiten",
        sub: "Consular & Administrative Matters",
        items: [
          "Identitätsdokumente",
          "Pass, Personalausweis und Tazkira",
          "Vollmachten",
          "Ledigkeitsbescheinigungen",
          "Weitere offizielle Dokumente",
        ],
      },
      {
        title: "Handels-, Zivil- & Finanzangelegenheiten",
        sub: "Commercial, Civil & Financial Matters",
        items: [
          "Nationale und internationale Handelsverträge",
          "Unternehmensregistrierung, Änderungen und Auflösung",
          "Beilegung von Handelsstreitigkeiten",
          "Beratung zu grenzüberschreitenden Handelsvorschriften",
          "Immobiliengeschäfte und Forderungseinzug",
        ],
      },
    ],

    supportItems: [
      "Personen, die Einwanderungsverfahren durchlaufen",
      "Antragsteller, die strukturierte administrative Unterstützung benötigen",
      "Kunden, die Klarheit bei Dokumenten und Prozessen wünschen",
    ],
  },
};

export default function Services({ locale }: ServicesProps) {
  const t = content[locale];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-badge">{t.badge}</span>
          <h2 className="services-title">{t.title}</h2>
          <p className="services-text">{t.intro}</p>
        </div>

        <div className="services-grid">
          <div className="service-card-large">
            <div className="service-tag">{t.legalTag}</div>

            <h3 className="service-heading">{t.legalTitle}</h3>
            <p className="service-desc">{t.legalDesc}</p>

            <div className="practice-list">
              {t.areas.map((area) => (
                <div className="practice-box" key={area.title}>
                  <h4>
                    {area.title}
                    <span>{area.sub}</span>
                  </h4>

                  <ul>
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="disclaimer-box">{t.legalDisclaimer}</div>

            <div className="service-actions">
              <a href="#contact" className="service-btn">
                {t.legalBtn}
              </a>
            </div>
          </div>

          <div className="service-card-side">
            <div className="service-tag dark">{t.adminTag}</div>

            <h3 className="service-heading">{t.adminTitle}</h3>
            <p className="service-desc">{t.adminDesc}</p>

            <div className="service-focus-box">
              <h4>{t.adminForTitle}</h4>

              <ul className="support-list">
                {t.supportItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-actions">
              <a href="#contact" className="service-btn">
                {t.adminBtn}
              </a>

              <a
                href="https://wa.me/491706683291"
                target="_blank"
                rel="noreferrer"
                className="service-btn outline"
              >
                WhatsApp
              </a>
            </div>

            <div className="disclaimer-box dark">{t.adminDisclaimer}</div>
          </div>
        </div>

        <p className="vercel-note">{t.vercel}</p>
      </div>
    </section>
  );
}