"use client";
import type { ReactNode } from "react";

// Compatibility for archived bilingual lesson components. Indonesian only.
// No browser translation, observer, preference storage, or language switching.
type Language = "id" | "en";
type LanguageContextValue = {
 language: Language;
 setLanguage: (language: Language) => void;
 toggleLanguage: () => void;
 t: (text: string) => string;
 tr: (text: string) => string;
};
const value: LanguageContextValue = {
 language: "id",
 setLanguage: () => undefined,
 toggleLanguage: () => undefined,
 t: (text) => text,
 tr: (text) => text,
};
export function LanguageProvider({children}:{children:ReactNode}){return <>{children}</>;}
export function useLanguage():LanguageContextValue{return value;}
