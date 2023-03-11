import type { JSX } from "solid-js";
import { children, createSignal, Show } from "solid-js";
import Decorator from "../decorator";
import Tag from "../tag";
import type { IconButtonProps } from "./shared";
import { ICON_BUTTON_STYLE } from "./shared";

function IconButton(
  props: IconButtonProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const c = children(() => props.children);
  const hoverTitle = children(() => props.hoverTitle);

  const [isOver, setIsOver] = createSignal(false);
  const show = () => isOver() && props.hoverTitle != null;

  return (
    <Decorator
      inline
      bottom={
        <Show when={props.hoverTitle != null}>
          <Tag>{hoverTitle()}</Tag>
        </Show>
      }
      configBottom={{
        show: show,
        absolute: true,
      }}
    >
      <button
        {...props}
        title={props.hoverTitle}
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
        class={`${props.class} ${ICON_BUTTON_STYLE}`}
      >
        {c()}
      </button>
    </Decorator>
  );
}

export default IconButton;