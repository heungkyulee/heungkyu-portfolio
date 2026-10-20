"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n-provider";

// 1949년 교환원 교육 영화의 12초 무음 반복. 움직임 줄이기 설정이면 멈춘 채로 시작하고, 언제든 멈출 수 있습니다.
export function FilmLoop({
  className = "",
  controlsClassName = "",
  showCaption = true,
}: {
  className?: string;
  controlsClassName?: string;
  showCaption?: boolean;
}) {
  const { t } = useI18n();
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.current?.pause();
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className={`overflow-clip bg-surface ${className}`}>
      <video
        ref={video}
        className="h-full w-full object-cover [filter:brightness(0.5)_contrast(1.05)]"
        src="/archive/switchboard-loop.mp4"
        poster="/archive/switchboard-poster.jpg"
        autoPlay
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        muted
        loop
        playsInline
        aria-label={t({ ko: "전화 교환대에서 회선을 연결하는 교환원들, 1949년 교육 영화", en: "Operators connecting lines at a switchboard, from a 1949 training film" })}
      />
      <div className={`wrap absolute inset-x-0 bottom-[var(--margin)] flex items-center gap-4 ${controlsClassName}`}>
        <button type="button" onClick={toggle} className="t-small min-h-10 bg-bg px-3 text-ink transition-colors hover:bg-surface-2">
          {playing ? t({ ko: "영상 멈춤", en: "Pause film" }) : t({ ko: "영상 재생", en: "Play film" })}
        </button>
        {showCaption && (
          <p className="t-small bg-bg px-3 py-2 text-ink-soft">
            {t({ ko: "전화 교환원 교육 영화, 1949년", en: "Telephone operator training film, 1949" })}
          </p>
        )}
      </div>
    </div>
  );
}
