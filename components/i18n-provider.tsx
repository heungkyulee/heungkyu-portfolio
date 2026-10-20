"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { Language } from "@/app/data/portfolio";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (content: { ko: string; en: string } | string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// 선택한 언어는 브라우저에 저장합니다. 저장소를 쓸 수 없으면(사생활 보호 모드 등) 이 탭에서만 기억합니다.
const listeners = new Set<() => void>();
let memory: Language | null = null;

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function getSnapshot(): Language {
  if (memory) return memory;
  try {
    return localStorage.getItem("language") === "en" ? "en" : "ko";
  } catch {
    return "ko";
  }
}

function setLanguage(lang: Language) {
  memory = lang;
  try {
    localStorage.setItem("language", lang);
  } catch {}
  listeners.forEach((cb) => cb());
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, () => "ko" as Language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (content: { ko: string; en: string } | string) => {
    if (typeof content === "string") return content;
    return content[language];
  };

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
