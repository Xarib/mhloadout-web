import type { VoidComponent } from "solid-js";
import { AnchorButton } from "~/components/button/AnchorButton";
import { AnchorIconButton } from "~/components/icon-button/anchor-icon-button";
import IconButton from "~/components/icon-button/icon-button";
import WidthConstraint from "~/components/width-constraint";
import { ICON_MEDIUM } from "~/utility/iconSize";
import PhMegaphoneSimpleDuotone from "~icons/ph/megaphone-simple-duotone";

const IconButtons: VoidComponent = () => {
  return (
    <main>
      <WidthConstraint>
        <AnchorButton href="../">Back</AnchorButton>
        <div>
          <h1>Anchorbuttons</h1>
          <AnchorIconButton
            href="https://www.solidjs.com"
            target="_blank"
            hoverTitle="tag"
          >
            <PhMegaphoneSimpleDuotone class={ICON_MEDIUM} />
          </AnchorIconButton>
        </div>
        <div>
          <h1>Click</h1>
          <IconButton onClick={() => alert("click")} hoverTitle="tag">
            <PhMegaphoneSimpleDuotone class={ICON_MEDIUM} />
          </IconButton>
        </div>
      </WidthConstraint>
    </main>
  );
};

export default IconButtons;
