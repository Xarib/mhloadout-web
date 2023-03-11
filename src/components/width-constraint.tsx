import type { JSXElement } from "solid-js";
import { children } from "solid-js";

const WidthConstraint = (props: Props) => {
  const c = children(() => props.children);

  return (
    <div class="flex justify-center p-4">
      <div class="max-w-3xl">{c()}</div>
    </div>
  );
};

interface Props {
  children?: JSXElement;
}

export default WidthConstraint;
