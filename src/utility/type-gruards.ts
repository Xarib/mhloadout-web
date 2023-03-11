export function isBool(val: unknown): val is boolean {
  return typeof val == "boolean";
}
