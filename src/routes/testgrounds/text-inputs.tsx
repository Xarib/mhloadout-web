import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js";
import { AnchorButton } from "~/components/button/AnchorButton";
import TextInput from "~/components/text-input";
import PhPasswordDuotone from "~icons/ph/password-duotone";
import PhWarningDuotone from "~icons/ph/warning-duotone";
import WidthConstraint from "~/components/width-constraint";
import { ICON_MEDIUM } from "~/utility/iconSize";

const TextInputs: VoidComponent = () => {
  const [text, setText] = createSignal("lorem ipsum dolor");
  return (
    <main>
      <WidthConstraint>
        <AnchorButton href="../">Back</AnchorButton>
        <h1>Textinput</h1>
        <TextInput
          value={text()}
          onInput={setText}
          outerDecorator={{
            bottom: (
              <div class="text-rose-500">
                <PhWarningDuotone class={"inline-block h-4 w-4"} /> Invalid
              </div>
            ),
            configBottom: {
              show: true,
              alignment: "start",
            },
          }}
        />
        <h1 class="mt-12">Limited</h1>
        <div class="w-48">
          <TextInput
            value={text()}
            onInput={setText}
            innerDecorator={{
              left: <PhWarningDuotone class={ICON_MEDIUM} />,
              configLeft: {
                show: true,
              },
              right: <PhPasswordDuotone class={ICON_MEDIUM} />,
              configRight: {
                show: true,
              },
            }}
          />
        </div>
        <h1 class="mt-12">Out</h1>
        <div>{text()}</div>
      </WidthConstraint>
    </main>
  );
};

export default TextInputs;
