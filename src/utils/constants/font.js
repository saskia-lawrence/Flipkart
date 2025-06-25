export const fonts = {
  family: {
    primary: "'Roboto', sans-serif",
    secondary: "'Open Sans', sans-serif",
    mono: "'Courier New', monospace",
  },

  size: {
    extraSmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "24px",
  },

  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeight: {
    compact: 1.2,
    normal: 1.5,
    spacious: 1.8,
  },

  form: {
    label: {
      family: "primary",
      size: "small",
      weight: "medium",
      color: "#333333",
    },
    input: {
      family: "primary",
      size: "medium",
      weight: "regular",
      color: "#000000",
    },
    helperText: {
      family: "secondary",
      size: "extraSmall",
      weight: "regular",
      color: "#666666",
    },
    errorText: {
      family: "secondary",
      size: "extraSmall",
      weight: "medium",
      color: "#d32f2f",
    },
  },

  responsive: {
    small: {
      body: "14px",
      heading: "20px",
    },
    medium: {
      body: "16px",
      heading: "24px",
    },
    large: {
      body: "18px",
      heading: "28px",
    },
  },

  getFontStack: (type = "primary") => `font-family: ${fonts.family[type]}`,
  getResponsiveSize: (screenSize, element) =>
    fonts.responsive[screenSize]?.[element] || fonts.responsive.small[element],
};
