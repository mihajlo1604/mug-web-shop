import Grid from "@mui/material/Grid";

// GLOBAL CUSTOM COMPONENTS
import Container from "components/Container";
import { SectionHeader } from "components/section-header";
import ProductCard17 from "components/product-cards/product-card-17";

// API FUNCTIONS
import api from "utils/__api__/market-1";
export default async function Section4() {
  const products = await api.getJustForYou();
  if (!products || products.length === 0) return null;
  return <Container>
      <SectionHeader title="Just for you" seeMoreLink="#" />

      <Grid container spacing={3}>
        {products.map(product => <Grid size={{
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3
      }} key={product.id}>
            <ProductCard17 product={product} />
          </Grid>)}
      </Grid>
    </Container>;
}