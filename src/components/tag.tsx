import type { JSXElement } from "solid-js";
import { children } from "solid-js";

function Tag(props: Props) {
  const c = children(() => props.children);

  return (
    <span
      class={`rounded-full bg-gray-400 px-2 text-sm font-bold ${props.class}`}
    >
      {c()}
    </span>
  );
}

interface Props {
  children?: JSXElement;
  class?: string;
}

export default Tag;
