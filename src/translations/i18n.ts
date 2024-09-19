import { createInstance, i18n } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Translations } from "@/translations";

const i18nConfig = {
  locales: ["en", "es"],
  defaultLocale: "en",
};

export const useSSRTranslation = (locale = "en", i18nInstance?: i18n) => {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(LanguageDetector).use(initReactI18next).init({
    lng: locale,
    resources: Translations,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
};
