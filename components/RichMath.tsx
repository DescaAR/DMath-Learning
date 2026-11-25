"use client";

import katex from "katex";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { translateRichText } from "@/lib/i18n";

import { tokenizeMath } from "@/lib/math-tokenizer";

function renderTex(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, {
    throwOnError: false,
    displayMode,
    strict: "ignore",
    trust: false,
    output: "htmlAndMathml",
  });
}

export function InlineMath({ tex }: { tex: string }) {
  return (
    <span
      className="math-inline"
      data-no-translate
      dangerouslySetInnerHTML={{ __html: renderTex(tex, false) }}
    />
  );
}

export function DisplayMath({ tex }: { tex: string }) {
  return (
    <span
      className="math-block"
      data-no-translate
      dangerouslySetInnerHTML={{ __html: renderTex(tex, true) }}
    />
  );
}

export function RichMath({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const { language } = useLanguage();
  const localized = translateRichText(children, language);
  const tokens = tokenizeMath(localized);

  return (
    <span className={className} data-no-translate>
      {tokens.map((token, index): ReactNode => {
        if (token.kind === "display") {
          return <DisplayMath key={index} tex={token.value} />;
        }
        if (token.kind === "inline") {
          return <InlineMath key={index} tex={token.value} />;
        }
        return <span key={index}>{token.value}</span>;
      })}
    </span>
  );
}
