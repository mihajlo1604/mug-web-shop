import Container from "@mui/material/Container";

// LOCAL CUSTOM COMPONENTS
import ProductIntro from "../product-intro/product-intro";
import ProductDescription from "../product-description";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function ProductDetailsPageView(props) {
  return <Container className="mt-2 mb-2">
      {/* PRODUCT DETAILS INFO AREA */}
      <ProductIntro product={props.product} />

      {/* PRODUCT DESCRIPTION */}
      <ProductDescription product={props.product} />
    </Container>;
}