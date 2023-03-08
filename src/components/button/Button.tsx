import { children, JSX } from "solid-js";
import type { ButtonProps } from "./shared";
import { BUTTON_STYLES } from "./shared";

export function Button(
  props: ButtonProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const c = children(() => props.children);

  return (
    <button
      {...props}
      class={`${BUTTON_STYLES[props.kind ?? "solid"]} ${props.class}`}
    >
      {c()}
    </button>
  );
}
