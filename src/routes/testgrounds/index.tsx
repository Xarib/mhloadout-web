import type { VoidComponent } from "solid-js";
import { AnchorButton } from "~/components/button/AnchorButton";
import WidthConstraint from "~/components/width-constraint";

const Testgrounds: VoidComponent = () => {
  return (
    <main>
      <WidthConstraint>
        <div>Testgrounds</div>
        <AnchorButton href="../">Index</AnchorButton>
        <AnchorButton href="buttons">Buttons</AnchorButton>
        <AnchorButton href="icon-buttons">Icon-Buttons</AnchorButton>
        <AnchorButton href="decorators">Decorators</AnchorButton>
      </WidthConstraint>
    </main>
  );
};

export default Testgrounds;
