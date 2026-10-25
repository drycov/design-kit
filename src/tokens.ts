/** Design tokens mirror (CSS remains source of truth for runtime theme). */
export const darkTokens = {
  bg: "#0e1621",
  secondary: "#17212b",
  tertiary: "#242f3d",
  surface: "#1c2733",
  text: "#f3f6f8",
  hint: "#91a3b7",
  link: "#68b7f3",
  button: "#2aabee",
  buttonText: "#ffffff",
  success: "#53bd86",
  danger: "#eb6570",
  warning: "#e5ac4b",
  purple: "#a967ff",
  radius: 14,
} as const;

export const lightTokens = {
  bg: "#f2f4f7",
  secondary: "#ffffff",
  tertiary: "#e8eef3",
  surface: "#ffffff",
  text: "#182533",
  hint: "#697f91",
  link: "#2481cc",
  button: "#2481cc",
  buttonText: "#ffffff",
  success: "#24804a",
  danger: "#ca384d",
  warning: "#b7791f",
  purple: "#7c3aed",
  radius: 14,
} as const;

export type ThemeScheme = "dark" | "light";
