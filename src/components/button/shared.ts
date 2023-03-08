import type { JSXElement } from "solid-js";
import { classJoin } from "~/utility/classHelpers";

const BASE_STYLE = "px-4 rounded-lg py-2 font-bold border-2";

export const BUTTON_STYLES: Record<NonNullable<ButtonProps["kind"]>, string> = {
  outline: classJoin(BASE_STYLE, "hover:bg-gray-200"),
  solid: classJoin(
    BASE_STYLE,
    "bg-gray-400 border-gray-400 hover:bg-gray-500 hover:border-gray-500"
  ),
  text: classJoin(
    BASE_STYLE,
    "border-transparent hover:bg-gray-200 hover:border-gray-200"
  ),
};

export interface ButtonProps {
  children?: JSXElement;
  kind?: "solid" | "outline" | "text";
}