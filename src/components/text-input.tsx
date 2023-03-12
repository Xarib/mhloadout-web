import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { DecoratorProps } from "./decorator";
import Decorator from "./decorator";

function TextInput(props: Props) {
  const [local, other] = splitProps(props, ["onInput"]);

  const handleOnChange = (e: InputEvent) => {
    const target = e.currentTarget as HTMLInputElement | null;

    if (target == null) return;

    local.onInput?.(target.value, e);
  };

  return (
    <Decorator {...props.outerDecorator}>
      <div
        class={`flex rounded-lg border bg-gray-50 px-2 focus-within:outline focus-within:outline-2`}
      >
        <Decorator {...props.innerDecorator} class={`flex-grow ${props.class}`}>
          <input
            class="h-10 min-w-0 bg-inherit pl-3 pr-1 focus-visible:outline-none"
            {...other}
            onInput={handleOnChange}
          />
        </Decorator>
      </div>
    </Decorator>
  );
}

interface Props
  extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, "onInput"> {
  onInput?: (newValue: string, e: Event) => void;
  innerDecorator?: Decoration;
  outerDecorator?: Decoration;
}

type Decoration = Omit<DecoratorProps, "children">;

export default TextInput;
