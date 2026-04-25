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
  en: { short: "EN", flag: "/images/flag-en.png" },
  de: { short: "DE", flag: "/images/flag-de.png" },
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
    const handleScroll = () => setScrolled(window.scrollY > 24);

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
    const savedScroll = sessionStorage.getItem("scroll-position");

    if (savedScroll) {
      setTimeout(() => {
        window.scrollTo(0, Number(savedScroll));
        sessionStorage.removeItem("scroll-position");
      }, 50);
    }

    setMobileMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const saveScrollPosition = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("scroll-position", String(window.scrollY));
    }
  };

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

  const navItems = [
    { label: t.nav.home, href: `/${safeLocale}` },
    { label: t.nav.aboutUs, href: `/${safeLocale}#about` },
    { label: t.nav.services, href: `/${safeLocale}#services` },
    { label: "Insights", href: `/${safeLocale}#insights` },
    { label: "Resources", href: `/${safeLocale}#resources` },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-shell">
        <div className="header-inner">
          <Link href={`/${safeLocale}`} className="logo" aria-label="Go to homepage">
            <Image
              src="/images/logo.png"
              alt="Sadat Legal Logo"
              width={170}
              height={56}
              priority
            />
          </Link>

          <nav className="desktop-nav">
            <div className="nav-links">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="header-actions">
              <div className="lang-dropdown" ref={langRef}>
                <button
                  type="button"
                  className="lang-trigger"
                  onClick={() => setLangOpen((prev) => !prev)}
                  aria-label="Select language"
                >
                  <span className="globe-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18" />
                      <path d="M12 3a15 15 0 0 1 0 18" />
                      <path d="M12 3a15 15 0 0 0 0 18" />
                    </svg>
                  </span>

                  <span className="lang-label">{currentLang.short}</span>
                  <span className={`lang-arrow ${langOpen ? "open" : ""}`}>▾</span>
                </button>

                {langOpen && (
                  <div className="lang-menu">
                    <Link
                      href={getLocalizedPath("en")}
                      className={`lang-item ${safeLocale === "en" ? "active" : ""}`}
                      onClick={saveScrollPosition}
                    >
                      <Image
                        src="/images/flag-en.png"
                        alt="EN"
                        width={18}
                        height={12}
                        className="flag-img"
                      />
                      <span>English</span>
                    </Link>

                    <Link
                      href={getLocalizedPath("de")}
                      className={`lang-item ${safeLocale === "de" ? "active" : ""}`}
                      onClick={saveScrollPosition}
                    >
                      <Image
                        src="/images/flag-de.png"
                        alt="DE"
                        width={18}
                        height={12}
                        className="flag-img"
                      />
                      <span>Deutsch</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link href={`/${safeLocale}/contact`} className="consult-btn">
                {t.nav.requestConsult}
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </nav>

          <button
            type="button"
            className={`menu-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-panel ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-link">
                {item.label}
              </Link>
            ))}

            <div className="mobile-lang-row">
              <Link
                href={getLocalizedPath("en")}
                className="mobile-lang-btn"
                onClick={saveScrollPosition}
              >
                EN
              </Link>

              <Link
                href={getLocalizedPath("de")}
                className="mobile-lang-btn"
                onClick={saveScrollPosition}
              >
                DE
              </Link>
            </div>

            <Link href={`/${safeLocale}/contact`} className="consult-btn mobile-consult-btn">
              {t.nav.requestConsult}
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}