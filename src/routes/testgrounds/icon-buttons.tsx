import type { VoidComponent } from "solid-js";
import { AnchorButton } from "~/components/button/AnchorButton";
import { AnchorIconButton } from "~/components/icon-button/anchor-icon-button";
import IconButton from "~/components/icon-button/icon-button";
import WidthConstraint from "~/components/width-constraint";

const IconButtons: VoidComponent = () => {
  return (
    <main>
      <WidthConstraint>
        <AnchorButton href="../">Back</AnchorButton>
        <div>
          <h1>Anchorbuttons</h1>
          <AnchorIconButton href="" hoverTitle="tag">
            Icon
          </AnchorIconButton>
        </div>
        <div>
          <h1>Click</h1>
          <IconButton onClick={() => alert("click")} hoverTitle="tag">
            Icon
          </IconButton>
        </div>
      </WidthConstraint>
    </main>
  );
};

export default IconButtons;
