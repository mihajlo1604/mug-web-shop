import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// CUSTOM COMPONENTS
import Discount from "./discount";
import HoverActions from "./hover-actions";
import ImageCarousel from "./image-carousel";
import { FlexBox } from "components/flex-box";

// STYLED COMPONENTS
import { ImageWrapper, ContentWrapper, StyledRoot } from "./styles";

// CUSTOM DATA MODEL


// CUSTOM UTILS FUNCTION
import { calculateDiscount, currency } from "lib";


// ========================================================


// ========================================================

export default function ProductCard18({
  product
}) {
  const {
    slug,
    title,
    price,
    thumbnail,
    images,
    discount
  } = product;
  const hasDiscount = discount > 0;
  return <Link href={`/products/${slug}`} aria-label={`View - ${title}`}>
      <StyledRoot>
        <ImageWrapper>
          {hasDiscount && <Discount discount={discount} />}

          <HoverActions product={product} />

          {images.length > 1 ? <ImageCarousel>
              {images.map((image, i) => <Image key={image + i} width={375} height={375} src={image} loading="lazy" className="thumbnail" alt={`Thumbnail for ${title}`} />)}
            </ImageCarousel> : <Image width={500} height={500} src={thumbnail} loading="lazy" className="thumbnail" alt={`Thumbnail for ${title}`} />}
        </ImageWrapper>

        <ContentWrapper>
          <Typography noWrap variant="body2" className="category">
            Earphones
          </Typography>

          <Link href={`/products/${slug}`} aria-label={`View ${title}`}>
            <Typography noWrap variant="h5" className="title">
              {title}
            </Typography>
          </Link>

          <FlexBox alignItems="center" justifyContent="center" gap={1}>
            <Typography variant="subtitle1" color="primary" fontWeight={600}>
              {calculateDiscount(price, discount)}
            </Typography>

            {hasDiscount && <Box component="del" fontSize={14} fontWeight={500} color="text.secondary">
                {currency(price)}
              </Box>}
          </FlexBox>
        </ContentWrapper>
      </StyledRoot>
    </Link>;
}