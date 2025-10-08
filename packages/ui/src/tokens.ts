export const tokens = {
  color: {
    brand: {
      25: "#EBF5FF",
      50: "#D3E7FF",
      100: "#A6CFFF",
      200: "#7AB6FF",
      300: "#4D9EFF",
      400: "#1F85FF",
      500: "#006EE6",
      600: "#0058B4",
      700: "#004282",
      800: "#002C51",
      900: "#001620"
    },
    accent: {
      mint: "#5CF5D7",
      amber: "#FFC169",
      sky: "#5CA8FF"
    },
    neutral: {
      900: "#0A0D1A",
      800: "#11152B",
      700: "#161B36",
      600: "#1D2345",
      500: "#293259",
      400: "#384471",
      300: "#53618A",
      200: "#7D87A6",
      100: "#A9B0C3",
      50: "#D3D7E2",
      25: "#EEF1F9"
    }
  },
  typography: {
    font: {
      sans: "'InterVariable', system-ui, sans-serif",
      heading: "'Satoshi-Variable', 'InterVariable', sans-serif",
      mono: "'JetBrains Mono', monospace"
    },
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.75rem",
      "3xl": "2.25rem",
      "4xl": "3rem"
    },
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    },
    leading: {
      tight: "1.1",
      snug: "1.2",
      normal: "1.35",
      relaxed: "1.5"
    }
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "18px",
    xl: "28px",
    pill: "999px"
  },
  spacing: {
    "3xs": "0.125rem",
    "2xs": "0.25rem",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  shadow: {
    soft: "0 10px 50px -20px rgba(15, 44, 106, 0.4)",
    medium: "0 20px 70px -30px rgba(12, 45, 115, 0.55)",
    glow: "0 0 40px rgba(92, 165, 255, 0.4)"
  },
  motion: {
    duration: {
      quick: "120ms",
      base: "220ms",
      slow: "360ms"
    },
    easing: {
      sprung: "cubic-bezier(0.24, 0.82, 0.22, 1)",
      glide: "cubic-bezier(0.16, 1, 0.3, 1)",
      pop: "cubic-bezier(0.34, 1.56, 0.64, 1)"
    }
  }
};

export type DesignTokens = typeof tokens;
