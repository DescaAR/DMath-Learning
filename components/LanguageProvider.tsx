"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  translatePlainText,
  translateRichText,
  type Language,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (text: string) => string;
  tr: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "id",
  setLanguage: () => undefined,
  toggleLanguage: () => undefined,
  t: (text) => text,
  tr: (text) => text,
});

const textOriginals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Record<string, string>>();

function shouldSkipNode(node: Text) {
  const parent = node.parentElement;
  if (!parent) return true;
  if (
    parent.closest(
      "script, style, code, pre, textarea, .katex, .katex-display, [data-no-translate]"
    )
  ) {
    return true;
  }
  return false;
}

function translateTextNode(node: Text, language: Language) {
  if (shouldSkipNode(node) || !node.nodeValue?.trim()) return;

  if (language === "id") {
    const original = textOriginals.get(node);
    if (original !== undefined && node.nodeValue !== original) {
      node.nodeValue = original;
    }
    return;
  }

  const current = node.nodeValue;
  const stored = textOriginals.get(node);
  const expected = stored !== undefined ? translatePlainText(stored, "en") : undefined;

  let original = stored;
  if (
    original === undefined ||
    (current !== original && current !== expected)
  ) {
    original = current;
    textOriginals.set(node, original);
  }

  const translated = translatePlainText(original, "en");
  if (translated !== current) node.nodeValue = translated;
}

function translateAttributes(element: Element, language: Language) {
  const names = ["placeholder", "title", "aria-label"];
  let originals = attributeOriginals.get(element);

  if (!originals) {
    originals = {};
    attributeOriginals.set(element, originals);
  }

  for (const name of names) {
    const current = element.getAttribute(name);
    if (!current) continue;

    if (language === "id") {
      if (originals[name] !== undefined && current !== originals[name]) {
        element.setAttribute(name, originals[name]);
      }
      continue;
    }

    const stored = originals[name];
    const expected = stored !== undefined ? translatePlainText(stored, "en") : undefined;
    if (stored === undefined || (current !== stored && current !== expected)) {
      originals[name] = current;
    }
    element.setAttribute(name, translatePlainText(originals[name], "en"));
  }
}

function applyLanguage(root: ParentNode, language: Language) {
  if (typeof document === "undefined") return;

  if (root instanceof Element) translateAttributes(root, language);

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT
  );

  let current: Node | null = walker.currentNode;
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) {
      translateTextNode(current as Text, language);
    } else if (current.nodeType === Node.ELEMENT_NODE) {
      translateAttributes(current as Element, language);
    }
    current = walker.nextNode();
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dmath-language");
      if (saved === "en" || saved === "id") {
        setLanguageState(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    const run = () => applyLanguage(document.body, language);
    run();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData" && mutation.target.nodeType === Node.TEXT_NODE) {
          translateTextNode(mutation.target as Text, language);
          continue;
        }

        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node as Text, language);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            applyLanguage(node as Element, language);
          }
        }
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem("dmath-language", next);
    } catch {}
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "id" ? "en" : "id");
  }, [language, setLanguage]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: (text) => translatePlainText(text, language),
      tr: (text) => translateRichText(text, language),
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
