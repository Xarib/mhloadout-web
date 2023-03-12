import type { AnchorProps } from "@solidjs/router";
import { children, createSignal, Show } from "solid-js";
import { A } from "solid-start";
import Decorator from "../decorator";
import Tag from "../tag";
import type { IconButtonProps } from "./shared";
import { ICON_BUTTON_STYLE } from "./shared";

export function AnchorIconButton(props: AnchorProps & IconButtonProps) {
  const c = children(() => props.children);
  const [isOver, setIsOver] = createSignal(false);

  // The "&#xfeff" is the worlds ugliest workaround. Somehow the props.hoverTitle in the Tag is stripped away on build. It shows up again on HMR or if you click on the icon button
  return (
    <Decorator
      inline
      bottom={
        <Show when={props.hoverTitle != null}>
          <Tag>{props.hoverTitle}&#xfeff</Tag>
        </Show>
      }
      configBottom={{
        show: isOver,
        absolute: true,
      }}
    >
      <A
        {...props}
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
        title={props.hoverTitle}
        class={`inline-block ${ICON_BUTTON_STYLE} ${props.class}`}
      >
        {c()}
      </A>
    </Decorator>
  );
}
