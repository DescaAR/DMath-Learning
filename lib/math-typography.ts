export function emphasizeMathLabel(input: string) {
  return input.replace(/\$(?!\$)(.*?)(?<!\\)\$/g, (_match, expression: string) => {
    const trimmed = expression.trim();

    if (!trimmed || /^\\boldsymbol\{/.test(trimmed)) {
      return "$" + expression + "$";
    }

    return "$\\boldsymbol{" + expression + "}$";
  });
}
