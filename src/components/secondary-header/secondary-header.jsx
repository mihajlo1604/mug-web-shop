import NavbarCategoryDropdown from "./category-dropdown";
import { StyledRoot, InnerContainer } from "./styles";


// =========================================================================


// =========================================================================

export function SecondaryHeader({
  elevation = 2,
  border = 0,
  children
}) {
  return <StyledRoot elevation={elevation} border={border}>
      <InnerContainer>{children}</InnerContainer>
    </StyledRoot>;
}
SecondaryHeader.Left = function ({
  children
}) {
  return <NavbarCategoryDropdown>{children}</NavbarCategoryDropdown>;
};
SecondaryHeader.Right = function ({
  children
}) {
  return <>{children}</>;
};