import type { Placement } from "@floating-ui/dom";
import { useFloating } from "solid-floating-ui";
import type { Accessor, JSXElement } from "solid-js";
import { createSignal } from "solid-js";
import { children, Show } from "solid-js";
import { isBool } from "~/utility/type-gruards";

function Decorator(props: DecoratorProps) {
  const top = children(() => props.top);
  const right = children(() => props.right);
  const bottom = children(() => props.bottom);
  const left = children(() => props.left);
  const center = children(() => props.children);

  const centerElement = center() as HTMLElement;
  const grid = () => (props.inline ? "inline-grid" : "grid");

  return (
    <div
      class={`${grid()} grid-cols-[auto,_1fr,_auto] grid-rows-[auto,_1fr,_auto] ${
        props.class
      }`}
    >
      <div />
      <Decoration
        config={props.configTop}
        centerElement={centerElement}
        location="top"
      >
        {top()}
      </Decoration>
      <div />
      <Decoration
        config={props.configLeft}
        centerElement={centerElement}
        location="left"
      >
        {left()}
      </Decoration>
      {centerElement}
      <Decoration
        config={props.configRight}
        centerElement={centerElement}
        location="right"
      >
        {right()}
      </Decoration>
      <div />
      <Decoration
        config={props.configBottom}
        centerElement={centerElement}
        location="bottom"
      >
        {bottom()}
      </Decoration>
      <div />
    </div>
  );
}

export default Decorator;

interface DecoratorProps {
  class?: string;
  inline?: boolean;
  top?: JSXElement;
  right?: JSXElement;
  bottom?: JSXElement;
  left?: JSXElement;
  children: JSXElement;
  configTop?: DecorationConfig;
  configRight?: DecorationConfig;
  configBottom?: DecorationConfig;
  configLeft?: DecorationConfig;
}

interface DecorationConfig {
  show?: boolean | Accessor<boolean>;
  absolute?: boolean;
  alignment?: DecorationAlignment;
}

function Decoration(props: DecorationProps) {
  // eslint-disable-next-line solid/reactivity
  const propsShow = props.config?.show;

  let show;
  if (isBool(propsShow)) {
    show = () => propsShow;
  } else {
    show = propsShow;
  }

  return (
    <Show when={show?.()} fallback={<div />}>
      <Show
        when={props.config?.absolute}
        fallback={<GridDecoration {...props} />}
      >
        <AbsoluteDecoration {...props} />
      </Show>
    </Show>
  );
}

interface DecorationProps {
  config?: DecorationConfig;
  children: JSXElement;
  centerElement: HTMLElement;
  location: DecorationLocation;
}

function GridDecoration(props: GridDecorationProps) {
  const c = children(() => props.children);
  // eslint-disable-next-line solid/reactivity
  const placement = getPlacement(props.location, props.config?.alignment);
  return <div class={`${PLACEMENT[placement]}`}>{c()}</div>;
}

const PLACEMENT: Record<DecorationPlacement, string> = {
  "bottom-end": "self-top justify-self-end",
  "bottom-start": "self-top justify-self-start",
  bottom: "self-top justify-self-center",
  "left-end": "self-end justify-self-end",
  "left-start": "self-start justify-self-end",
  left: "self-center justify-self-end",
  "right-end": "self-end justify-self-start",
  "right-start": "self-start justify-self-start",
  right: "self-center justify-self-start",
  "top-end": "self-end justify-self-end",
  "top-start": "self-end justify-self-start",
  top: "self-end justify-self-center",
};

interface GridDecorationProps {
  children: JSXElement;
  location: DecorationLocation;
}

function AbsoluteDecoration(props: GridDecorationProps) {
  const c = children(() => props.children);

  // eslint-disable-next-line solid/reactivity
  const [reference] = createSignal(props.centerElement);
  const [floating, setFloating] = createSignal<HTMLElement>();
  const position = useFloating(reference, floating, {
    placement: getPlacement(props.location, props.config?.alignment),
    strategy: "absolute",
  });

  return (
    <>
      <div
        ref={setFloating}
        style={{
          position: position.strategy,
          top: `${position.y ?? 0}px`,
          left: `${position.x ?? 0}px`,
        }}
      >
        {c()}
      </div>
      <div />
    </>
  );
}

interface GridDecorationProps {
  config?: DecorationConfig;
  children: JSXElement;
  centerElement: HTMLElement;
  location: DecorationLocation;
}

export type DecorationPlacement = Placement;
export type DecorationLocation = "top" | "left" | "right" | "bottom";
export type DecorationAlignment = "start" | "center" | "end";

function getPlacement(
  location: DecorationLocation,
  alignment: DecorationAlignment | undefined
): DecorationPlacement {
  if (alignment == null || alignment == "center") return location;

  return `${location}-${alignment}`;
}
