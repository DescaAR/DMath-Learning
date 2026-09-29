"use client";

import katex from "katex";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { translateRichText } from "@/lib/i18n";

function renderTex(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, { throwOnError: false, displayMode, strict: "ignore", trust: false });
}

export function InlineMath({ tex }: { tex: string }) {
  return <span className="math-inline" data-no-translate dangerouslySetInnerHTML={{ __html: renderTex(tex, false) }} />;
}

export function DisplayMath({ tex }: { tex: string }) {
  return <span className="math-block" data-no-translate dangerouslySetInnerHTML={{ __html: renderTex(tex, true) }} />;
}

export function RichMath({ children, className = "" }: { children: string; className?: string }) {
  const { language } = useLanguage();
  const localized = translateRichText(children, language);
  const tokenRegex = /(\\$\\$[\\s\\S]+?\\$\\$|\\$[^$\\n]+?\\$)/g;
  const pieces = localized.split(tokenRegex);

  return (
    <span className={className} data-no-translate>
      {pieces.map((piece, index): ReactNode => {
        if (piece.startsWith("$$") && piece.endsWith("$$")) return <DisplayMath key={index} tex={piece.slice(2, -2).trim()} />;
        if (piece.startsWith("$") && piece.endsWith("$")) return <InlineMath key={index} tex={piece.slice(1, -1).trim()} />;
        return piece;
      })}
    </span>
  );
}
