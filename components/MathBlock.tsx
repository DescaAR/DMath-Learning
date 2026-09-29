import katex from "katex";

export function MathBlock({ tex, display = true }: { tex: string; display?: boolean }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
  });

  return (
    <span
      className={display ? "math-block" : "math-inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
