import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



// ==============================================================


// ==============================================================

export function SectionCreator({
  title,
  children,
  seeMoreLink,
  ...others
}) {
  return <Box mb={7.5} {...others}>
      <Container className="pb-1">
        {title }
        {children}
      </Container>
    </Box>;
}