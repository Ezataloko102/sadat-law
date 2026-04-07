import { ReactNode } from "react";
import Header from "@/components/Header";
import { Locale } from "@/lib/translations";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      {children}
    </>
  );
}