export const COLORS = {
  white: "var(--color-white)",
  passThrough: "var(--color-pass-through)",
  gray: {
    100: "var(--color-grey-100)",
    300: "var(--color-grey-300)",
    500: "var(--color-grey-500)",
    700: "var(--color-grey-700)",
    900: "var(--color-grey-900)",
  },
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};
