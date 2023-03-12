import type { JSXElement } from "solid-js";
import { children } from "solid-js";

const WidthConstraint = (props: Props) => {
  const c = children(() => props.children);

  return <div class={`px-4 xl:px-24 2xl:px-64 ${props.class}`}>{c()}</div>;
};

interface Props {
  children?: JSXElement;
  class?: string;
}

export default WidthConstraint;
