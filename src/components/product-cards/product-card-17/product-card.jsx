"use client";

import Link from "next/link";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

// LOCAL CUSTOM COMPONENTS
import Discount from "./discount";
import HoverActions from "./hover-actions";

// STYLED COMPONENTS
import { ImageWrapper, ContentWrapper, StyledCard } from "./styles";

// CUSTOM DATA MODEL


// CUSTOM UTILS FUNCTION
import { currency } from "lib";


// ========================================================


// ========================================================

export default function ProductCard17({
  product,
  bgWhite = false
}) {
  const { i18n } = useTranslation();
  const {
    slug,
    title,
    price,
    thumbnail,
    images,
    discount,
    categories
  } = product;
  
  // Translate product title if Serbian
  const getTranslatedTitle = () => {
    if (i18n.language !== 'sr') return title;
    
    // Replace English size labels with Serbian
    let translatedTitle = title
      .replace('Dose Traveler', 'Termos Dose Traveler')
      .replace('Max (1.2L)', 'Max 1.2 l')
      .replace('Regular (0.88L)', 'Regular 0.88 l')
      .replace('Mini (0.6L)', 'Mini 0.6 l');
    
    return translatedTitle;
  };
  
  const displayTitle = getTranslatedTitle();
  
  return <StyledCard elevation={0} bgWhite={bgWhite}>
      <ImageWrapper>
        <Discount discount={discount} />
        <HoverActions product={product} />

        <Link href={`/products/${slug}`} aria-label={`View ${displayTitle}`}>
          <Image width={750} height={750} src={thumbnail} alt={`Thumbnail for ${displayTitle}`} className={images.length > 1 ? "thumbnail" : ""} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading={images.length > 1 ? "lazy" : "eager"} />

          {images.length > 1 && <Image width={750} height={750} src={images[1]} loading="lazy" className="hover-thumbnail" alt={`Hover thumbnail for ${displayTitle}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <Typography noWrap variant="body2" className="category">
          {categories.length > 0 ? categories[0] : "N/A"}
        </Typography>

        <Link href={`/products/${slug}`} aria-label={`View ${displayTitle}`}>
          <Typography noWrap variant="h5" className="title">
            {displayTitle}
          </Typography>
        </Link>

        <Typography variant="subtitle1" color="primary" fontWeight={600}>
          {currency(price)}
        </Typography>
      </ContentWrapper>
    </StyledCard>;
}