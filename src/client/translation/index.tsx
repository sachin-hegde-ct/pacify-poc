"use client";

import { ToggleSwitchComponent } from "@/components/toggle-switch";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const TranslationClient = () => {
  const [selectedLocale, setSelectedLocale] = useState("en");

  const { t, i18n } = useTranslation();

  const languageChangeHandler = () => {
    i18n.changeLanguage(selectedLocale === "en" ? "es" : "en");
    setSelectedLocale((currentLocale) =>
      currentLocale === "en" ? "es" : "en"
    );
  };

  return (
    <div className="flex flex-col gap-12">
      <ToggleSwitchComponent
        prefix="English"
        suffix="Spanish"
        onToggle={languageChangeHandler}
      />
      <div className="flex flex-col gap-4 p-4 border rounded-lg">
        <h2 className="text-xl">Client component translation</h2>
        <div className="flex flex-col gap-2">
          <span>{t("home.hi")}</span>
          <span>{t("home.welcomeMessage")}</span>
        </div>
      </div>
    </div>
  );
};
