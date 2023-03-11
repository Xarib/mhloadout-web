import type { JSXElement } from "solid-js";

export const ICON_BUTTON_STYLE =
  "inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-gray-800";

export interface IconButtonProps {
  children?: JSXElement;
  hoverTitle: string | undefined;
}
