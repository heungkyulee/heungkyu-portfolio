"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// 화면에 들어온 요소에 한 번만 is-in을 붙입니다. 숨김 상태는 html.js 아래에서만 적용되어
// 스크립트가 없으면 내용이 그대로 보입니다.
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll("[data-shutter], [data-step], [data-item]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }
    // 관찰 결과가 한 번도 오지 않는 환경(일부 백그라운드 탭 등)에서는 전부 보여 줍니다.
    let heard = false;
    const failsafe = window.setTimeout(() => {
      if (!heard) targets.forEach((el) => el.classList.add("is-in"));
    }, 1500);
    const io = new IntersectionObserver(
      (entries) => {
        heard = true;
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    targets.forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });
    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
