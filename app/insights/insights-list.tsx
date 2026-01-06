"use client";

import Link from "next/link";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { useI18n } from "@/components/i18n-provider";
import { ArrowRight } from "lucide-react";

export default function InsightsList() {
  const { t } = useI18n();

  return (
    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-0">
          {PORTFOLIO_DATA.insights.map((insight, index) => (
            <div
              key={insight.id}
              className="border-t border-zinc-900/80 py-10"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-baseline">
                <span className="text-xs font-mono text-zinc-500 w-32 flex-shrink-0">
                  {insight.date}
                </span>

                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-200 leading-tight">
                    <Link
                      href={`/insights/${insight.id}`}
                      className="hover:text-white transition-colors"
                    >
                      {t(insight.title)}
                    </Link>
                  </h2>

                  <p className="text-zinc-400 leading-relaxed max-w-2xl">
                    {t(insight.summary)}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/insights/${insight.id}`}
                      className="inline-flex items-center text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
                      aria-label={`${t(insight.title)} 읽기`}
                    >
                      {t({ ko: "인사이트 읽기", en: "Read insight" })}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {PORTFOLIO_DATA.insights.length > 0 && (
            <div className="border-t border-zinc-900/80" />
          )}
        </div>
      </div>
    </section>
  );
}


