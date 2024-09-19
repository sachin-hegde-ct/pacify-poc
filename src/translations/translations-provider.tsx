"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { ReactNode } from "react";
import { useSSRTranslation } from "./i18n";

type TranslationsProviderProps = {
  children: ReactNode;
  locale?: string;
};

export default function TranslationsProvider({
  children,
  locale = "en",
}: TranslationsProviderProps) {
  const i18n = createInstance();

  useSSRTranslation(locale, i18n);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
