import {components, getPalette, typography} from "./core";
import {COLORS} from "./types";

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
export default function themeOptions() {
  // Use default dark theme for all routes since we only have Market 1
  const selectedPalette = getPalette(COLORS.DARK);

  // Override primary with brand accent (Pantone 7614C -> #A37F74)
  const brandPrimary = {
    ...selectedPalette.primary,
    main: "#A37F74",
    light: "#B8948A",
    dark: "#7F625A",
    contrastText: "#FFFFFF"
  };
    return {
      typography,
      components,
      breakpoints,
      palette: {
          ...selectedPalette,
          primary: brandPrimary,
          accent: {
              main: "#A37F74",
              light: "#B8948A",
              dark: "#7F625A",
              contrastText: "#FFFFFF"
          }
      }
  };
}
