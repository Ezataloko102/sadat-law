"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Locale, translations } from "@/lib/translations";

export default function Hero({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const phone = "491706683291";
  const whatsappLink = `https://wa.me/${phone}`;

  const slides = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <Image
              src={slide}
              alt={`Hero Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="bg-img"
            />
          </div>
        ))}

        <div className="overlay" />
      </div>

      <div className="hero-content">

        <div className="hero-text-wrap">
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

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}