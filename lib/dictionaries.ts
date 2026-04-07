export const dictionaries = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      cta: 'Book Consultation',
    },
    hero: {
      kicker: 'Trusted Legal Support',
      title: 'Strong legal guidance for individuals and businesses',
      description:
        'We provide clear, strategic and reliable legal services with a strong focus on client protection, business law and dispute resolution.',
      primaryButton: 'Get Legal Advice',
      secondaryButton: 'Explore Services',
      stats: [
        { value: '12+', label: 'Years of legal experience' },
        { value: '500+', label: 'Clients advised successfully' },
        { value: '98%', label: 'Client satisfaction rate' },
        { value: '24/7', label: 'Fast response for urgent matters' },
      ],
    },
    services: {
      kicker: 'Practice Areas',
      title: 'Legal solutions tailored to your needs',
      description:
        'Our firm supports clients with practical advice, careful representation and focused legal strategy.',
      items: [
        {
          title: 'Corporate Law',
          text: 'Legal support for company formation, contracts, compliance and business structuring.',
        },
        {
          title: 'Family Law',
          text: 'Sensitive and professional support in divorce, custody and family-related legal matters.',
        },
        {
          title: 'Real Estate Law',
          text: 'Advice on property purchases, lease agreements, disputes and title-related matters.',
        },
        {
          title: 'Litigation',
          text: 'Strong representation in negotiations, court proceedings and dispute resolution matters.',
        },
      ],
    },
    about: {
      kicker: 'Why Choose Us',
      title: 'Professional, transparent and client-focused legal service',
      description:
        'We combine legal knowledge with practical business understanding to deliver efficient, honest and results-oriented advice.',
      points: [
        'Clear communication at every step',
        'Reliable and confidential case handling',
        'Personal attention for every client',
        'Strategic planning for complex matters',
      ],
    },
    contact: {
      kicker: 'Contact Us',
      title: 'Speak with our legal team today',
      description:
        'Send us a message to discuss your case, business question or legal concern. We will get back to you as soon as possible.',
      form: {
        name: 'Your name',
        email: 'Your email',
        message: 'Tell us about your case',
        button: 'Send Message',
      },
    },
  },
  de: {
    nav: {
      services: 'Leistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      cta: 'Beratung buchen',
    },
    hero: {
      kicker: 'Verlässliche Rechtsberatung',
      title: 'Starke rechtliche Unterstützung für Privatpersonen und Unternehmen',
      description:
        'Wir bieten klare, strategische und verlässliche Rechtsberatung mit Fokus auf Mandantenschutz, Wirtschaftsrecht und Streitbeilegung.',
      primaryButton: 'Rechtsberatung anfragen',
      secondaryButton: 'Leistungen ansehen',
      stats: [
        { value: '12+', label: 'Jahre juristische Erfahrung' },
        { value: '500+', label: 'Erfolgreich beratene Mandanten' },
        { value: '98%', label: 'Mandantenzufriedenheit' },
        { value: '24/7', label: 'Schnelle Reaktion bei dringenden Fällen' },
      ],
    },
    services: {
      kicker: 'Tätigkeitsbereiche',
      title: 'Juristische Lösungen passend zu Ihrem Bedarf',
      description:
        'Unsere Kanzlei unterstützt Mandanten mit praktischer Beratung, sorgfältiger Vertretung und gezielter juristischer Strategie.',
      items: [
        {
          title: 'Gesellschaftsrecht',
          text: 'Rechtliche Unterstützung bei Gründung, Verträgen, Compliance und Unternehmensstruktur.',
        },
        {
          title: 'Familienrecht',
          text: 'Einfühlsame und professionelle Begleitung bei Scheidung, Sorgerecht und familiären Rechtsfragen.',
        },
        {
          title: 'Immobilienrecht',
          text: 'Beratung zu Immobilienkauf, Mietverträgen, Streitigkeiten und Eigentumsfragen.',
        },
        {
          title: 'Prozessführung',
          text: 'Starke Vertretung bei Verhandlungen, Gerichtsverfahren und Streitbeilegung.',
        },
      ],
    },
    about: {
      kicker: 'Warum wir',
      title: 'Professioneller, transparenter und mandantenorientierter Rechtsservice',
      description:
        'Wir verbinden juristisches Fachwissen mit praktischem Geschäftsverständnis und liefern effiziente, ehrliche und zielorientierte Beratung.',
      points: [
        'Klare Kommunikation in jedem Schritt',
        'Verlässliche und vertrauliche Fallbearbeitung',
        'Persönliche Betreuung für jeden Mandanten',
        'Strategische Planung für komplexe Angelegenheiten',
      ],
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Sprechen Sie noch heute mit unserem Rechtsteam',
      description:
        'Senden Sie uns eine Nachricht zu Ihrem Fall, Ihrer geschäftlichen Frage oder Ihrem rechtlichen Anliegen. Wir melden uns schnellstmöglich zurück.',
      form: {
        name: 'Ihr Name',
        email: 'Ihre E-Mail',
        message: 'Beschreiben Sie Ihr Anliegen',
        button: 'Nachricht senden',
      },
    },
  },
} as const;

export type Locale = keyof typeof dictionaries;

export function isValidLocale(locale: string): locale is Locale {
  return locale === 'en' || locale === 'de';
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
