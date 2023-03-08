export function classJoins(
  ...classes: Array<string | null | undefined>
): string {
  return classes
    .map((str) => str?.trim())
    .filter((str) => str != null && str != "")
    .join(" ");
}
