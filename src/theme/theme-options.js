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
let oldMapping;
const themeMappings = [{
  paths: ["/grocery-4"],
  color: COLORS.GREEN
}, {
  paths: ["/gift-shop"],
  color: COLORS.GIFT
}, {
  paths: ["/furniture-2"],
  color: COLORS.ORANGE
}, {
  paths: ["/furniture-3"],
  color: COLORS.GOLD
}, {
  paths: ["/furniture-1", "/medical"],
  color: COLORS.PASTE
}, {
  paths: ["/health-beauty", "/admin", "/vendor"],
  color: COLORS.HEALTH
}, {
  paths: ["/grocery-1", "/grocery-2"],
  color: COLORS.RED
}];
export default function themeOptions(pathname) {
  let selectedMapping = themeMappings.find(mapping => mapping.paths.some(path => pathname.startsWith(path)));
  if (["/mini-cart", "/login"].includes(pathname)) {
    selectedMapping = oldMapping;
  }

  
// GET THE COLOR PALETTE BASED ON THE SELECTED MAPPING
  const selectedPalette = getPalette(selectedMapping?.color || COLORS.DARK);

  
// STORE THE SELECTED MAPPING IN OLD MAPPING FOR MODAL ROUTES -> LOGIN, MINI-CART
  oldMapping = selectedMapping;
  const themeOption = {
    typography,
    components,
    breakpoints,
    palette: selectedPalette
  };
  return themeOption;
}