import About from "@/components/About";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Locale, translations } from "@/lib/translations";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const safeLocale: Locale = locale === "de" ? "de" : "en";
  const t = translations[safeLocale];

  return (
    <main>
      {/* Hero */}
      <Hero locale={safeLocale} />

      {/* Services */}
      <Services locale={safeLocale} />

      {/* About (Preview Version) */}
      <About locale={safeLocale} />

      {/* Legal Status */}
      <section id="legal-status" className="section">
        <div className="container-custom">
          <h2 className="section-title">{t.legalStatus.title}</h2>
          <p className="section-text">{t.legalStatus.text}</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section alt">
        <div className="container-custom text-center">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-text mb-6">{t.contact.text}</p>

          <Link href={`/${safeLocale}/contact`} className="btn-primary">
            {t.nav.requestConsult}
          </Link>
        </div>
      </section>
    </main>
  );
}