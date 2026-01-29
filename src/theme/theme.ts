/**
 * Global theme configuration for the restaurant menu website
 * Centralizes all colors, fonts, spacing, and design tokens
 */

export const theme = {
  colors: {
    primary: "#C62828",
    secondary: "#FBC02D", 
    background: "#0F0F0F",
    surface: "#1A1A1A",
    text: "#FFFFFF",
    textSecondary: "#B0B0B0",
    muted: "#9CA3AF",
    accent: "#FF6B35",
    success: "#4CAF50",
    error: "#F44336",
    border: "#333333"
  },
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Playfair Display', serif"
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem", 
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem"
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem"
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
  },
  breakpoints: {
    sm: "640px",
    md: "768px", 
    lg: "1024px",
    xl: "1280px"
  }
} as const;

export type Theme = typeof theme;