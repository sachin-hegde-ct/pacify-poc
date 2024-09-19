import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-[family-name:var(--font-geist-mono)]">
        Pacify POC
      </h1>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Translation using{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            react-i18next
          </code>{" "}
          and{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            i18next
          </code>
          .
        </li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/translation"
        >
          Translation
        </Link>
      </div>
    </>
  );
}
