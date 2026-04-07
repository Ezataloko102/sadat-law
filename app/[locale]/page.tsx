import Hero from "@/components/Hero";
import Link from "next/link";
import { Locale, translations } from "@/lib/translations";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = translations[locale];

  return (
    <>
      <Hero locale={locale} />

      <section id="services" className="section">
        <h2>{t.servicesOverview.title}</h2>

        <div className="cards">
          <div className="card">
            <h3>{t.servicesOverview.card1Title}</h3>
            <p>{t.servicesOverview.card1Text}</p>
            <Link href={`/${locale}/contact`}>
              {t.servicesOverview.card1Btn}
            </Link>
          </div>

          <div className="card">
            <h3>{t.servicesOverview.card2Title}</h3>
            <p>{t.servicesOverview.card2Text}</p>
            <Link href={`/${locale}/contact`}>
              {t.servicesOverview.card2Btn}
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <h2>{t.about.title}</h2>
        <p>{t.about.text}</p>
      </section>

      <section id="legal-status" className="section">
        <h2>{t.legalStatus.title}</h2>
        <p>{t.legalStatus.text}</p>
      </section>

      <section id="contact" className="section alt">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.text}</p>

        <Link href={`/${locale}/contact`} className="primary-btn">
          {t.nav.requestConsult}
        </Link>
      </section>
    </>
  );
}