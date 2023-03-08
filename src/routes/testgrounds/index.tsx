import type { VoidComponent } from "solid-js";
import { AnchorButton } from "~/components/button/AnchorButton";

const Testgrounds: VoidComponent = () => {
  return (
    <main class="flex flex-col">
      <div>Testgrounds</div>
      <AnchorButton href="../">Index</AnchorButton>

      <AnchorButton href="buttons">Buttons</AnchorButton>
    </main>
  );
};

export default Testgrounds;
