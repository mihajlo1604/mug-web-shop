import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import ProductsCarousel from "./products-carousel";
import ProductCard4 from "components/product-cards/product-card-4";

// CUSTOM DATA MODEL


// STYLED COMPONENT
import { SubTitle } from "../styles";


// =================================================================


// =================================================================

export default function Section3({
  products,
  title
}) {
  return <div className="mb-3">
      <Typography variant="h2">{title}</Typography>
      <SubTitle>Best collection in {new Date().getFullYear()} for you!</SubTitle>

      <ProductsCarousel>
        {products.map(product => <Box pb={1} key={product.id}>
            <ProductCard4 product={product} />
          </Box>)}
      </ProductsCarousel>
    </div>;
}