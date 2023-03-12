import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js";
import { Show } from "solid-js";
import { ICON_MEDIUM } from "~/utility/iconSize";
import { AnchorIconButton } from "./icon-button/anchor-icon-button";
import IconButton from "./icon-button/icon-button";
import PhUserDuotone from "~icons/ph/user-duotone";
import PhGithubLogoDuotone from "~icons/ph/github-logo-duotone";
import PhMoonStarsDuotone from "~icons/ph/moon-stars-duotone";
import PhSunDuotone from "~icons/ph/sun-duotone";
import { setTheme } from "~/utility/theme";

const IconMenu: VoidComponent = () => {
  // TODO safe preferences
  const [darkMode, setDarkMode] = createSignal(true);

  const setLight = () => {
    setDarkMode(false);
    setTheme(darkMode());
  };
  const setDark = () => {
    setDarkMode(true);
    setTheme(darkMode());
  };

  return (
    <div class="mt-4 flex space-x-1">
      <AnchorIconButton
        href="https://github.com/Xarib/mhloadout-web"
        hoverTitle="GitHub"
      >
        <PhGithubLogoDuotone class={ICON_MEDIUM} />
      </AnchorIconButton>
      <Show
        when={darkMode()}
        fallback={
          <IconButton onClick={setDark} hoverTitle="Theme | Light">
            <PhSunDuotone class={ICON_MEDIUM} />
          </IconButton>
        }
      >
        <IconButton onClick={setLight} hoverTitle="Theme | Dark">
          <PhMoonStarsDuotone class={ICON_MEDIUM} />
        </IconButton>
      </Show>
      <AnchorIconButton href="/myaccount" hoverTitle="My account">
        <PhUserDuotone class={ICON_MEDIUM} />
      </AnchorIconButton>
    </div>
  );
};

export default IconMenu;
