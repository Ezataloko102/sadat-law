import Image from "next/image";
import Link from "next/link";
import { Locale, translations } from "@/lib/translations";

export default function Hero({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const phone = "491706683291";
  const whatsappLink = `https://wa.me/${phone}`;

  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/images/hero.jpg"
          alt="Sadat Legal"
          fill
          priority
          className="bg-img"
        />
        <div className="overlay" />
      </div>

      <div className="hero-content">
        <div className="line" />

        <div>
          <p className="hero-name">{t.hero.name}</p>
          <h1>{t.hero.degree}</h1>

          <p className="hero-subtitle" style={{ whiteSpace: "pre-line" }}>
            {t.hero.subtitle}
          </p>

          <p>{t.hero.intro}</p>

          <div className="hero-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn whatsapp-hover-btn"
            >
              <span>{t.hero.cta1}</span>

              <Image
                src="/images/Whatsapp.png"
                alt="WhatsApp"
                width={18}
                height={18}
                className="whatsapp-hover-icon"
              />
            </a>

            <Link href={`/${locale}/contact`} className="secondary-btn">
              {t.hero.cta2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}