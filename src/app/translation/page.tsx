import { TranslationClient } from "@/client/translation";
import { useSSRTranslation } from "@/translations/i18n";

export default function TranslationPage() {
  const { t } = useSSRTranslation();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 p-4 border rounded-lg">
        <h2 className="text-xl">Server component translation</h2>
        <span>
          Note: Update{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            useSSRTranslation()
          </code>{" "}
          to{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            useSSRTranslation(&apos;es&apos;)
          </code>{" "}
          to see the changes
        </span>
        <div className="flex flex-col gap-2">
          <span>{t("home.hi")}</span>
          <span>{t("home.welcomeMessage")}</span>
        </div>
      </div>
      <TranslationClient />
    </div>
  );
}
