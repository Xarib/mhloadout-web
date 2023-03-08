export function classJoin(
  ...classes: Array<string | null | undefined>
): string {
  return classes
    .map((str) => str?.trim())
    .filter((str) => str != null && str != "")
    .join(" ");
}
