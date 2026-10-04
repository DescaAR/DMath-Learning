"use client";

import { Fragment } from "react";
import { RichMath } from "@/components/RichMath";

const SIMPLE_GREEK: Record<string, string> = {
  "\\alpha": "α",
  "\\beta": "β",
  "\\gamma": "γ",
  "\\delta": "δ",
  "\\epsilon": "ε",
  "\\varepsilon": "ε",
  "\\zeta": "ζ",
  "\\eta": "η",
  "\\theta": "θ",
  "\\vartheta": "ϑ",
  "\\iota": "ι",
  "\\kappa": "κ",
  "\\lambda": "λ",
  "\\mu": "μ",
  "\\nu": "ν",
  "\\xi": "ξ",
  "\\pi": "π",
  "\\rho": "ρ",
  "\\sigma": "σ",
  "\\tau": "τ",
  "\\upsilon": "υ",
  "\\phi": "φ",
  "\\varphi": "φ",
  "\\chi": "χ",
  "\\psi": "ψ",
  "\\omega": "ω",
  "\\Gamma": "Γ",
  "\\Delta": "Δ",
  "\\Theta": "Θ",
  "\\Lambda": "Λ",
  "\\Xi": "Ξ",
  "\\Pi": "Π",
  "\\Sigma": "Σ",
  "\\Phi": "Φ",
  "\\Psi": "Ψ",
  "\\Omega": "Ω",
};

export function HeadingMath({ children }: { children: string }) {
  const parts = children.split(/(\$(?!\$).*?(?<!\\)\$)/g).filter(Boolean);

  return (
    <span className="heading-math">
      {parts.map((part, index) => {
        if (!(part.startsWith("$") && part.endsWith("$"))) {
          return <Fragment key={index}>{part}</Fragment>;
        }

        const expression = part.slice(1, -1).trim();
        const glyph = SIMPLE_GREEK[expression];

        if (glyph) {
          const uppercase = expression.length > 1 && /[A-Z]/.test(expression[1]);
          return (
            <span
              className={
                "heading-math-symbol " +
                (uppercase ? "heading-math-symbol-upright" : "heading-math-symbol-italic")
              }
              key={index}
              aria-label={expression.slice(1)}
            >
              {glyph}
            </span>
          );
        }

        return (
          <RichMath className="heading-math-complex" key={index}>
            {part}
          </RichMath>
        );
      })}
    </span>
  );
}
