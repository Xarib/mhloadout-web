export function setTheme(dark: boolean) {
  localStorage.darkMode = dark;

  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function userPrefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export type Theme = "browser" | "light" | "dark";
