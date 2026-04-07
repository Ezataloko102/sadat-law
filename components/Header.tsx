"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Locale, translations } from "@/lib/translations";

type Props = {
  locale: Locale;
};

const languageOptions = {
  en: {
    short: "EN",
    flag: "/images/flag-en.png",
  },
  de: {
    short: "DE",
    flag: "/images/flag-de.png",
  },
};

export default function Header({ locale }: Props) {
  const pathname = usePathname();

  const safeLocale: Locale = locale === "de" ? "de" : "en";
  const t = translations[safeLocale];
  const currentLang = languageOptions[safeLocale];

  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const getLocalizedPath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;

    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${targetLocale}`;
    }

    if (segments[0] === "en" || segments[0] === "de") {
      segments[0] = targetLocale;
      return `/${segments.join("/")}`;
    }

    return `/${targetLocale}`;
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link href={`/${safeLocale}`} className="logo">
          <Image
            src="/images/logo.png"
            alt="Sadat Legal Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
          <Link href={`/${safeLocale}`}>{t.nav.home}</Link>
          <Link href={`/${safeLocale}#services`}>{t.nav.services}</Link>
          <Link href={`/${safeLocale}#about`}>{t.nav.aboutUs}</Link>

          <div className="lang-dropdown" ref={langRef}>
            <button
              type="button"
              className="lang-trigger"
              onClick={() => setLangOpen((prev) => !prev)}
            >
              <Image
                src={currentLang.flag}
                alt={currentLang.short}
                width={18}
                height={12}
                className="flag-img"
              />
              <span className="lang-label">{currentLang.short}</span>
              <span className={`lang-arrow ${langOpen ? "open" : ""}`}>▾</span>
            </button>

            {langOpen && (
              <div className="lang-menu">
                <Link
                  href={getLocalizedPath("en")}
                  className={`lang-item ${safeLocale === "en" ? "active" : ""}`}
                  onClick={() => setLangOpen(false)}
                >
                  <Image
                    src="/images/flag-en.png"
                    alt="EN"
                    width={18}
                    height={12}
                  />
                  <span>EN</span>
                </Link>

                <Link
                  href={getLocalizedPath("de")}
                  className={`lang-item ${safeLocale === "de" ? "active" : ""}`}
                  onClick={() => setLangOpen(false)}
                >
                  <Image
                    src="/images/flag-de.png"
                    alt="DE"
                    width={18}
                    height={12}
                  />
                  <span>DE</span>
                </Link>
              </div>
            )}
          </div>

          <Link href={`/${safeLocale}/contact`} className="consult-btn">
            {t.nav.requestConsult}
          </Link>
        </nav>
      </div>
    </header>
  );
}