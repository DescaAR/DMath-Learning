const SIMPLE_INLINE_MATH: ReadonlyArray<readonly [string, string]> = [
  ["$\\alpha$", "α"],
  ["$\\beta$", "β"],
  ["$\\gamma$", "γ"],
  ["$\\delta$", "δ"],
  ["$\\epsilon$", "ε"],
  ["$\\varepsilon$", "ε"],
  ["$\\zeta$", "ζ"],
  ["$\\eta$", "η"],
  ["$\\theta$", "θ"],
  ["$\\vartheta$", "ϑ"],
  ["$\\iota$", "ι"],
  ["$\\kappa$", "κ"],
  ["$\\lambda$", "λ"],
  ["$\\mu$", "μ"],
  ["$\\nu$", "ν"],
  ["$\\xi$", "ξ"],
  ["$\\pi$", "π"],
  ["$\\rho$", "ρ"],
  ["$\\sigma$", "σ"],
  ["$\\tau$", "τ"],
  ["$\\upsilon$", "υ"],
  ["$\\phi$", "φ"],
  ["$\\varphi$", "φ"],
  ["$\\chi$", "χ"],
  ["$\\psi$", "ψ"],
  ["$\\omega$", "ω"],
  ["$\\Gamma$", "Γ"],
  ["$\\Delta$", "Δ"],
  ["$\\Theta$", "Θ"],
  ["$\\Lambda$", "Λ"],
  ["$\\Xi$", "Ξ"],
  ["$\\Pi$", "Π"],
  ["$\\Sigma$", "Σ"],
  ["$\\Phi$", "Φ"],
  ["$\\Psi$", "Ψ"],
  ["$\\Omega$", "Ω"],
  ["$\\infty$", "∞"],
  ["$\\emptyset$", "∅"],
  ["$\\varnothing$", "∅"],
  ["$\\mathbb R$", "ℝ"],
  ["$\\mathbb{R}$", "ℝ"],
  ["$\\mathbb C$", "ℂ"],
  ["$\\mathbb{C}$", "ℂ"],
  ["$\\mathbb Z$", "ℤ"],
  ["$\\mathbb{Z}$", "ℤ"],
  ["$\\mathbb N$", "ℕ"],
  ["$\\mathbb{N}$", "ℕ"],
  ["$\\mathbb Q$", "ℚ"],
  ["$\\mathbb{Q}$", "ℚ"],
];

export function normalizeMathLabel(input: string) {
  let output = input;

  for (const [tex, glyph] of SIMPLE_INLINE_MATH) {
    output = output.split(tex).join(glyph);
  }

  return output;
}
