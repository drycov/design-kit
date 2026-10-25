export function detectScheme() {
  const app = typeof window !== "undefined" ? window.Telegram?.WebApp : undefined;
  if (app?.colorScheme === "light") return "light";
  if (app?.colorScheme === "dark") return "dark";
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}
export function applyTelegramTheme(root = document.documentElement) {
  const scheme = detectScheme();
  root.setAttribute("data-tg-theme", scheme);
  const app = window.Telegram?.WebApp;
  if (app?.onEvent) {
    app.onEvent("themeChanged", () => {
      root.setAttribute("data-tg-theme", detectScheme());
    });
  }
  return scheme;
}
