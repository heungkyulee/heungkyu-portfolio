"use client";

import { useRef, useState } from "react";

// 밀어서 요청: 끝까지 밀면 메일 작성 창이 열립니다. 키보드로는 버튼을 눌러 바로 엽니다.
export function SlideToSend({ href, label, button }: { href: string; label: string; button: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [max, setMax] = useState(1);
  const [dragging, setDragging] = useState(false);
  const start = useRef(0);
  const knob = 72;

  const onDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    const tr = trackRef.current!.getBoundingClientRect();
    start.current = e.clientX - x;
    setMax(tr.width - knob);
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (dragging) setX(Math.min(Math.max(e.clientX - start.current, 0), max));
  };
  const onUp = () => {
    setDragging(false);
    if (x >= max * 0.9) {
      setX(max);
      window.location.href = href;
      window.setTimeout(() => setX(0), 1200);
    } else setX(0);
  };
  const progress = max > 1 ? x / max : 0;
  const ease = dragging ? "none" : "transform 650ms var(--ease-spring), width 650ms var(--ease-spring)";

  return (
    <div ref={trackRef} className="relative h-[72px] w-[min(26rem,88vw)] overflow-hidden rounded-full bg-[#141414]">
      <div className="absolute inset-y-0 left-0 rounded-full bg-white" style={{ width: x + knob, transition: ease }} />
      <span className="pointer-events-none absolute inset-0 grid place-items-center pl-14 text-[16px] font-semibold text-[#8a8a8a]" style={{ opacity: 1 - progress * 1.8 }}>
        {label}
      </span>
      <button
        type="button"
        aria-label={button}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onClick={(e) => {
          if (e.detail === 0) window.location.href = href;
        }}
        className="absolute left-0 top-0 grid h-[72px] w-[72px] touch-none place-items-center rounded-full bg-white text-[#040404]"
        style={{ transform: `translateX(${x}px)`, transition: ease }}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-6 w-6">
          <path d="M2 12h18M13 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
