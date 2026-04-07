"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Locale } from "@/lib/translations";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState("");
  const [error, setError] = useState("");

  const t =
    locale === "de"
      ? {
          title: "Kontakt",
          intro:
            "Senden Sie uns eine Nachricht und wir melden uns so schnell wie möglich bei Ihnen.",
          name: "Ihr Name (*)",
          email: "Ihre E-Mail (*)",
          phone: "Ihre Telefonnummer",
          select: "Dienst auswählen",
          service1:
            "Rechtsdienstleistungen – Ausländisches Recht (Zivil- & Verwaltungsrecht – Afghanistan, RDG)",
          service2:
            "Einwanderungs- & Verwaltungsunterstützung (Freiberuflich / Nicht-Rechtsdienstleistung)",
          message: "Ihre Nachricht",
          sending: "Wird gesendet...",
          send: "Senden",
          success: "Nachricht erfolgreich gesendet ✅",
          fail: "Fehler beim Senden",
          selectError: "Bitte wählen Sie einen Dienst aus",
        }
      : {
          title: "Contact us",
          intro:
            "Send us a message and we will get back to you as soon as possible.",
          name: "Your name (*)",
          email: "Your email (*)",
          phone: "Your phone number",
          select: "Select service",
          service1:
            "Legal Services – Foreign Law (Civil & Administrative – Afghanistan, RDG)",
          service2:
            "Immigration & Administrative Support (Freiberuflich / Non-Legal)",
          message: "Your message",
          sending: "Sending...",
          send: "Send",
          success: "Message sent successfully ",
          fail: "Error sending message",
          selectError: "Please select a service",
        };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.service) {
      setError(t.selectError);
      return;
    }

    setLoading(true);
    setDone("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || t.fail);
      }

      setDone(t.success);
      setForm(initialForm);
    } catch (err: any) {
      setError(err.message || t.fail);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="contact-page">
      <div className="contact-overlay" />
      <div className="contact-box">
        <h1 className="fade-up">{t.title}</h1>

        <p className="contact-intro fade-up fade-up-delay-1">{t.intro}</p>

        <form
          onSubmit={handleSubmit}
          className="contact-form-page fade-up fade-up-delay-2"
        >
          <input
            name="name"
            type="text"
            placeholder={t.name}
            required
            value={form.name}
            onChange={handleChange}
            disabled={loading}
          />

          <input
            name="email"
            type="email"
            placeholder={t.email}
            required
            value={form.email}
            onChange={handleChange}
            disabled={loading}
          />

          <div className="contact-row">
            <input
              name="phone"
              type="text"
              placeholder={t.phone}
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
            />

            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="" disabled>
                {t.select}
              </option>

              <option value={t.service1}>{t.service1}</option>
              <option value={t.service2}>{t.service2}</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder={t.message}
            rows={6}
            required
            value={form.message}
            onChange={handleChange}
            disabled={loading}
          />

          <button type="submit" disabled={loading}>
            {loading ? t.sending : t.send}
          </button>

          {done && <p className="success fade-up">{done}</p>}
          {error && <p className="error fade-up">{error}</p>}
        </form>
      </div>
    </main>
  );
}