"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function RecordTable() {
  const { t, language } = useI18n();

  return (
    <div className="t-lead">
      {PORTFOLIO_DATA.timeline.map((group, i) => (
        <div key={group.year} data-item style={{ ["--i" as string]: i }} className="mt-16 first:mt-0">
          <h3 className="t-lead mb-5 font-semibold text-accent num">
            {language === "en" && group.yearEn ? group.yearEn : group.year}
          </h3>
          <table className="w-full border-collapse">
            <tbody>
              {group.items.map((item) => {
                const what = t(item.what);
                return (
                  <tr key={item.what.ko} className="align-baseline max-md:flex max-md:flex-wrap max-md:pb-5">
                    <th scope="row" className="w-full py-1.5 pr-6 text-left font-normal text-ink md:w-[34%]">
                      {item.href ? (
                        item.href.startsWith("http") ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="link link--under">
                            {what}
                          </a>
                        ) : (
                          <Link href={item.href} className="link link--under">
                            {what}
                          </Link>
                        )
                      ) : (
                        what
                      )}
                    </th>
                    <td className="py-1.5 pr-6 text-ink-soft max-md:t-small max-md:py-0 max-md:pr-2 md:w-[22%]">
                      {t(item.kind)}
                    </td>
                    <td className="py-1.5 pr-6 text-muted max-md:t-small max-md:py-0 md:w-[30%]">{t(item.where)}</td>
                    <td className="py-1.5 text-right text-muted max-md:t-small max-md:ml-auto max-md:py-0 num">
                      {item.when}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
