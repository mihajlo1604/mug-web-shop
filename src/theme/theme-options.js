import { components, typography, getPalette } from "./core";
import { COLORS } from "./types";
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1600,
    xxl: 1920
  }
};
// Market 1 only theme - use default dark theme for all routes
export default function themeOptions(pathname) {
  // Use default dark theme for all routes since we only have Market 1
  const selectedPalette = getPalette(COLORS.DARK);
  const themeOption = {
    typography,
    components,
    breakpoints,
    palette: selectedPalette
  };
  return themeOption;
}