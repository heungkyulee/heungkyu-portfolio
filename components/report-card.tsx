"use client";

import { useI18n } from "@/components/i18n-provider";
import type { L } from "@/app/data/portfolio";

// Foli가 일을 끝낸 뒤 담당자에게 보내는 결과 보고(예시). 제품 화면 조각이라 data-ui로 표시합니다.
export function ReportCard({ title, text, className = "", large = false }: { title: L; text: L; className?: string; large?: boolean }) {
  const { t } = useI18n();
  return (
    <div data-ui className={`bg-surface-2 ${large ? "p-[clamp(1.5rem,4vw,3.5rem)]" : "p-[clamp(1.25rem,2.4vw,2rem)]"} ${className}`}>
      <p className={`${large ? "t-head" : "t-lead"} flex items-center gap-3 font-semibold text-ink`}>
        <svg aria-hidden="true" viewBox="0 0 20 20" className={`${large ? "size-[0.7em]" : "size-5"} shrink-0 text-ink`}>
          <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        {t(title)}
      </p>
      <p className={`${large ? "t-lead mt-6" : "t-body mt-3"} text-ink-soft`}>{t(text)}</p>
    </div>
  );
}
