import { Locale } from "@/lib/translations";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const content = {
  en: {
    title: "About",
    introTitle: "Welcome to Sadat Legal Services & Consulting office",
    intro:
      "Mir Elhamuddin Sadat is an Afghan jurist with advanced academic qualifications in law and extensive professional experience. After graduating from the Faculty of Law and Political Science at Kabul University, he completed his Master of Laws (LL.M) in Public Law at a reputable public university in Turkey and has also pursued part of his doctoral studies in law.",
    sections: [
      {
        title: "Professional Experience",
        text:
          "Throughout his professional career, he has been engaged in providing legal defense and legal advisory services to various national and international companies, gaining valuable practical experience across multiple areas of law. He is also a member of international legal networks as well as the Afghanistan Independent Bar Association, currently in exile.",
      },
      {
        title: "International Activities",
        text:
          "He is the founder of Divan Law Firm in Afghanistan, recognized as one of the top legal service offices in the country with extensive international connections. In Europe, Mir Elhamuddin Sadat has been registered as the first Afghan jurist in the official register of out-of-court legal service providers in the field of foreign law at the Federal Office of Justice of Germany under the RDG.",
      },
      {
        title: "Academic & Media Engagement",
        text:
          "He has been actively engaged in the academic field of law and has published approximately 20 articles in national and international journals. In addition, he has participated in various national and international media as a legal and political expert and has delivered talks on international platforms, including TEDx.",
      },
      {
        title: "Languages",
        text: "Persian (Dari) • Pashto • English • Turkish • German",
      },
    ],
  },

  de: {
    title: "Über uns",
    introTitle: "Willkommen bei Sadat Legal Services & Consulting",
    intro:
      "Mir Elhamuddin Sadat ist ein afghanischer Jurist mit fundierter akademischer Ausbildung im Bereich der Rechtswissenschaften sowie umfassender praktischer Erfahrung. Nach dem Abschluss seines Studiums an der Fakultät für Rechts- und Politikwissenschaften der Universität Kabul absolvierte er einen Master of Laws (LL.M) im öffentlichen Recht an einer staatlichen Universität in der Türkei und setzte seine juristische Qualifikation im Rahmen eines Promotionsstudiums teilweise fort.",
    sections: [
      {
        title: "Berufserfahrung",
        text:
          "Im Laufe seiner beruflichen Tätigkeit war er in der rechtlichen Beratung und Begleitung von nationalen und internationalen Unternehmen tätig und konnte dabei wertvolle praktische Erfahrungen in verschiedenen Bereichen des Zivil- und Verwaltungsrechts sammeln. Darüber hinaus ist er in internationalen juristischen Netzwerken aktiv und mit der afghanischen Anwaltschaft, derzeit im Exil, verbunden.",
      },
      {
        title: "Internationale Tätigkeit",
        text:
          "Er ist Gründer eines Rechtsdienstleistungsbüros in Afghanistan, Divan Law Firm, mit internationaler Ausrichtung und Erfahrung in grenzüberschreitenden rechtlichen Fragestellungen. In Deutschland ist Mir Elhamuddin Sadat als erster afghanischer Jurist nach dem Rechtsdienstleistungsgesetz im Bereich der Rechtsdienstleistungen im Gebiet des ausländischen Rechts registriert.",
      },
      {
        title: "Akademische & mediale Tätigkeit",
        text:
          "Er ist zudem im akademischen Bereich des Rechts aktiv und hat bislang rund 20 Beiträge in nationalen und internationalen Fachzeitschriften veröffentlicht. Darüber hinaus ist er als Experte für Recht und Politikwissenschaft in verschiedenen nationalen und internationalen Medien aufgetreten und hat unter anderem auf internationalen Plattformen wie TEDx Vorträge gehalten.",
      },
      {
        title: "Sprachen",
        text: "Persisch (Dari) • Paschtu • Englisch • Türkisch • Deutsch",
      },
    ],
  },
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const safeLocale: Locale = locale === "de" ? "de" : "en";
  const t = content[safeLocale];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-page-container">
          <span className="about-kicker">{t.title}</span>
          <h1>{t.introTitle}</h1>
          <p>{t.intro}</p>
        </div>
      </section>

      <section className="about-details">
        <div className="about-page-container">
          <div className="about-detail-grid">
            {t.sections.map((section) => (
              <article className="about-detail-card" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}