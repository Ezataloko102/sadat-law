export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      aboutUs: "About Us",
      legalStatus: "Legal Status",
      contact: "Contact",
      requestConsult: "Contact Now",    },

    hero: {
      name: "Elhamuddin Sadat",
      degree: "LL.M (Master of Laws)",
      subtitle:
        "Legal Services & Consulting\nForeign Law (Civil & Administrative – Afghanistan, RDG) • Immigration Support",
      intro:
        "Professional legal insight combined with practical administrative support. Clear, structured, and client-focused services for Afghan clients and beyond.",
      cta1: "Contact via WhatsApp",
      cta2: "Request a Free Consultation",
    },

    servicesOverview: {
      title: "Services Overview",
      card1Title: "Legal Services – Foreign Law (RDG)",
      card1Text:
        "Out-of-court consultation, analysis, and document drafting. Specializing in Afghan civil and administrative law.",
      card1Btn: "Learn More",
      card2Title: "Immigration & Administrative Support",
      card2Text:
        "Assistance with forms, documents, and procedural guidance. Fully administrative, non-legal support.",
      card2Btn: "Get Support",
    },

    about: {
      title: "About Us",
      text:
        "Mir Elhamuddin Sadat is an Afghan jurist with advanced academic qualifications in law and extensive professional experience.",
    },

    legalStatus: {
      title: "Legal Status",
      text:
        "We provide legal services in the field of foreign law, specifically Afghan civil and administrative law, in accordance with the German Legal Services Act (RDG). Services are limited to out-of-court matters.",
    },

    contact: {
      title: "Contact",
      text: "We will respond with clear next steps.",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      aboutUs: "Über uns",
      legalStatus: "Rechtlicher Status",
      contact: "Kontakt",
      requestConsult: "Jetzt kontaktieren",
    },

    hero: {
      name: "Elhamuddin Sadat",
      degree: "LL.M (Master of Laws)",
      subtitle:
        "Rechtsdienstleistungen & Beratung\nAusländisches Recht (Zivil- & Verwaltungsrecht – Afghanistan, RDG) • Einwanderungsunterstützung",
      intro:
        "Professionelle rechtliche Expertise kombiniert mit praktischer administrativer Unterstützung. Klare, strukturierte und kundenorientierte Dienstleistungen für afghanische Kunden und darüber hinaus.",
      cta1: "Kontakt über WhatsApp",
      cta2: "Kostenlose Beratung anfordern",
    },

    servicesOverview: {
      title: "Überblick über die Dienstleistungen",
      card1Title: "Rechtsdienstleistungen – Ausländisches Recht (RDG)",
      card1Text:
        "Außergerichtliche Beratung, Analyse und Dokumentenerstellung. Spezialisierung auf afghanisches Zivil- und Verwaltungsrecht.",
      card1Btn: "Mehr erfahren",
      card2Title: "Einwanderungs- & Verwaltungsunterstützung",
      card2Text:
        "Unterstützung bei Formularen, Dokumenten und Prozessanleitungen. Vollständig administrativ, keine rechtliche Vertretung.",
      card2Btn: "Unterstützung erhalten",
    },

    about: {
      title: "Über uns",
      text:
        "Mir Elhamuddin Sadat ist ein Afghanischer Jurist mit fundierter akademischer Ausbildung im Bereich der Rechtswissenschaften sowie umfassender praktischer Erfahrung.",
    },

    legalStatus: {
      title: "Rechtlicher Status",
      text:
        "Wir erbringen Rechtsdienstleistungen im Bereich des ausländischen Rechts (Zivil- und Verwaltungsrecht Afghanistans) gemäß dem deutschen Rechtsdienstleistungsgesetz (RDG). Die Dienstleistungen beschränken sich auf außergerichtliche Angelegenheiten.",
    },

    contact: {
      title: "Kontakt",
      text: "Wir antworten mit klaren nächsten Schritten.",
    },
  },
} as const;

export type Locale = keyof typeof translations;