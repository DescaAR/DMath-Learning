"use client";

import katex from "katex";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { translateRichText } from "@/lib/i18n";

type MathToken =
  | { kind: "text"; value: string }
  | { kind: "inline"; value: string }
  | { kind: "display"; value: string };

function renderTex(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, {
    throwOnError: false,
    displayMode,
    strict: "ignore",
    trust: false,
    output: "htmlAndMathml",
  });
}

function isEscaped(input: string, index: number) {
  let slashes = 0;
  for (let i = index - 1; i >= 0 && input[i] === "\\"; i -= 1) slashes += 1;
  return slashes % 2 === 1;
}

function findClosingDollar(input: string, start: number, double: boolean) {
  const marker = double ? "$$" : "$";
  for (let i = start; i < input.length; i += 1) {
    if (input.startsWith(marker, i) && !isEscaped(input, i)) return i;
  }
  return -1;
}

function tokenizeMath(input: string): MathToken[] {
  const tokens: MathToken[] = [];
  let textBuffer = "";

  function flushText() {
    if (!textBuffer) return;
    tokens.push({ kind: "text", value: textBuffer });
    textBuffer = "";
  }

  for (let i = 0; i < input.length; ) {
    if (input.startsWith("$$", i) && !isEscaped(input, i)) {
      const end = findClosingDollar(input, i + 2, true);
      if (end !== -1) {
        flushText();
        tokens.push({ kind: "display", value: input.slice(i + 2, end).trim() });
        i = end + 2;
        continue;
      }
    }

    if (input[i] === "$" && !isEscaped(input, i)) {
      const end = findClosingDollar(input, i + 1, false);
      if (end !== -1) {
        flushText();
        tokens.push({ kind: "inline", value: input.slice(i + 1, end).trim() });
        i = end + 1;
        continue;
      }
    }

    if (input.startsWith("\\(", i)) {
      const end = input.indexOf("\\)", i + 2);
      if (end !== -1) {
        flushText();
        tokens.push({ kind: "inline", value: input.slice(i + 2, end).trim() });
        i = end + 2;
        continue;
      }
    }

    if (input.startsWith("\\[", i)) {
      const end = input.indexOf("\\]", i + 2);
      if (end !== -1) {
        flushText();
        tokens.push({ kind: "display", value: input.slice(i + 2, end).trim() });
        i = end + 2;
        continue;
      }
    }

    textBuffer += input[i];
    i += 1;
  }

  flushText();
  return tokens;
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
