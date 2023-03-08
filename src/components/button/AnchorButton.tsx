import { children } from "solid-js";
import { A } from "solid-start";
import type { ButtonProps } from "./shared";
import { BUTTON_STYLES } from "./shared";
import type { AnchorProps } from "@solidjs/router";

export function AnchorButton(props: AnchorProps & ButtonProps) {
  const c = children(() => props.children);

  return (
    <A
      {...props}
      class={`inline-block ${BUTTON_STYLES[props.kind ?? "solid"]} ${
        props.class
      }`}
    >
      {c()}
    </A>
  );
}
