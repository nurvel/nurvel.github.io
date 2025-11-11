const theme = {
  colors: {
    brightPink: "#F72585",
    darkPink: "#BE296A",
    violet: "#7209B7",
    darkBlue: "#3A0CA3",
    lightBlue: "#3A0CA3",
    cyan: "#3A0CA3",
    darkViolet: "#251124",
    textPrimary: "#FFFFFF",
    background: "#050110",
    headingShadow: "hsl(9000 50% 20%)",
  },
  typography: {
    family: '"Roboto Condensed", sans-serif',
    scale: {
      h1: "5rem",
      h2: "4rem",
      body: "1.5rem",
      h1Mobile: "2.5rem",
      h2Mobile: "2rem",
      bodyMobile: "1rem",
    },
    weights: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  layout: {
    sectionMinHeight: "100vh",
    sectionPadding: "1em",
  },
  breakpoints: {
    mobile: "700px",
  },
} as const;

export type Theme = typeof theme;

export default theme;
