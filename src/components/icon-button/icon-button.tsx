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

  const [isOver, setIsOver] = createSignal(false);
  const show = () => isOver() && props.hoverTitle != null;

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
