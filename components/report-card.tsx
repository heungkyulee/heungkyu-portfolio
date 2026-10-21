"use client";

import { useI18n } from "@/components/i18n-provider";
import type { L } from "@/app/data/portfolio";

// Foli가 일을 끝낸 뒤 담당자에게 보내는 결과 보고(예시). 제품 화면 조각이라 data-ui로 표시합니다.
export function ReportCard({ title, text, className = "" }: { title: L; text: L; className?: string }) {
  const { t } = useI18n();
  return (
    <div data-ui className={`rounded-3xl bg-surface-2 p-[clamp(1.5rem,3vw,2.25rem)] ${className}`}>
      <p className="t-lead flex items-center gap-3 font-bold text-ink">
        <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-bg">
          <svg viewBox="0 0 20 20" className="size-4">
            <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" />
          </svg>
        </span>
        {t(title)}
      </p>
      <p className="t-body mt-3 text-ink-soft">{t(text)}</p>
    </div>
  );
}
