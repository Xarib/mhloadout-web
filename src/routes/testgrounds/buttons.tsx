import type { VoidComponent } from "solid-js";
import { AnchorButton } from "~/components/button/AnchorButton";
import { Button } from "~/components/button/Button";
import WidthConstraint from "~/components/width-constraint";

const Buttons: VoidComponent = () => {
  return (
    <main>
      <WidthConstraint>
        <AnchorButton href="../">Back</AnchorButton>
        <div>
          <h1>AnchorButtons</h1>
          <AnchorButton href="">Solid</AnchorButton>
          <AnchorButton href="" kind="outline">
            Outline
          </AnchorButton>
          <AnchorButton href="" kind="text">
            Text
          </AnchorButton>
        </div>
        <div>
          <h1>Click buttons</h1>
          <Button onClick={() => alert("Hello")} kind="solid">
            Solid
          </Button>
          <Button onClick={() => alert("Hello")} kind="outline">
            Outline
          </Button>
          <Button onClick={() => alert("Hello")} kind="text">
            Text
          </Button>
        </div>
      </WidthConstraint>
    </main>
  );
};

export default Buttons;
