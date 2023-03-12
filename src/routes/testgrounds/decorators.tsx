import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js";
import { AnchorButton } from "~/components/button/AnchorButton";
import { Button } from "~/components/button/Button";
import Decorator from "~/components/decorator";
import Tag from "~/components/tag";
import WidthConstraint from "~/components/width-constraint";

const Decorators: VoidComponent = () => {
  const [show, setShow] = createSignal<ShowDecorator>("all");

  return (
    <main>
      <WidthConstraint>
        <AnchorButton href="../">Back</AnchorButton>
        <div>
          <Button onClick={() => setShow("top")}>Top</Button>
          <Button onClick={() => setShow("left")}>Left</Button>
          <Button onClick={() => setShow("right")}>Right</Button>
          <Button onClick={() => setShow("bottom")}>Bottom</Button>
          <Button onClick={() => setShow("all")}>All</Button>
        </div>
        <div class="py-8 pb-32">
          <div>Absolute</div>
          <Decorator
            top={<Tag>top</Tag>}
            configTop={{
              show: () => show() == "top" || show() == "all",
              absolute: true,
            }}
            left={<Tag>left</Tag>}
            configLeft={{
              show: () => show() == "left" || show() == "all",
              absolute: true,
            }}
            right={<Tag>right</Tag>}
            configRight={{
              show: () => show() == "right" || show() == "all",
              absolute: true,
            }}
            bottom={<Tag>bottom</Tag>}
            configBottom={{
              show: () => show() == "bottom" || show() == "all",
              absolute: true,
            }}
          >
            <div class="bg-purple-200 p-4" />
          </Decorator>
        </div>
        <div class="py-8 pb-32">
          <div>Grid</div>
          <Decorator
            top={<Tag>top</Tag>}
            configTop={{
              show: () => show() == "top" || show() == "all",
            }}
            left={<Tag>left</Tag>}
            configLeft={{
              show: () => show() == "left" || show() == "all",
            }}
            right={<Tag>right</Tag>}
            configRight={{
              show: () => show() == "right" || show() == "all",
            }}
            bottom={<Tag>bottom</Tag>}
            configBottom={{
              show: () => show() == "bottom" || show() == "all",
            }}
          >
            <div class="bg-purple-200 p-4" />
          </Decorator>
        </div>
      </WidthConstraint>
    </main>
  );
};

type ShowDecorator = "top" | "left" | "right" | "bottom" | "all";

export default Decorators;
