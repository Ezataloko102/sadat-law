import Link from "next/link";

type AboutProps = {
  locale: "en" | "de";
};

const content = {
  en: {
    kicker: "About",
    title: "Welcome to Sadat Legal Services & Consulting",
    short:
      "Mir Elhamuddin Sadat is an Afghan jurist with advanced academic qualifications in law and extensive professional experience in legal advisory, foreign law, and international legal work.",
    btn: "Read More",
  },
  de: {
    kicker: "Über uns",
    title: "Willkommen bei Sadat Legal Services & Consulting",
    short:
      "Mir Elhamuddin Sadat ist ein afghanischer Jurist mit fundierter akademischer Ausbildung und umfassender praktischer Erfahrung in rechtlicher Beratung, ausländischem Recht und internationaler juristischer Tätigkeit.",
    btn: "Mehr erfahren",
  },
};

export default function About({ locale }: AboutProps) {
  const t = content[locale];

  return (
    <section id="about" className="about-preview-section">
      <div className="about-preview-container">
        <div className="about-preview-card">
          <span className="about-kicker">{t.kicker}</span>

          <h2 className="about-preview-title">{t.title}</h2>

          <p className="about-preview-text">{t.short}</p>

          <Link href={`/${locale}/about`} className="about-preview-btn">
            {t.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}