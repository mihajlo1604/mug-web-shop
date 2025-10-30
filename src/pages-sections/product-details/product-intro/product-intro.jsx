"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// MUI
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// LOCAL CUSTOM COMPONENTS
import AddToCart from "./add-to-cart";
import ProductGallery from "./product-gallery";

// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";

// STYLED COMPONENTS
import { StyledRoot } from "./styles";

// CUSTOM DATA MODEL

// ================================================================

// ================================================================

export default function ProductIntro({ product }) {
  const { t } = useTranslation();

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <StyledRoot sx={{ mt: 4 }}>
      <Grid container spacing={3} justifyContent="space-around">
        {/* IMAGE GALLERY AREA */}
        <Grid
          size={{
            lg: 6,
            md: 7,
            xs: 12,
          }}
        >
          <ProductGallery images={product.images} />
        </Grid>

        <Grid
          size={{
            lg: 5,
            md: 5,
            xs: 12,
          }}
        >
          <Typography variant="h1">{product.title}</Typography>

          <Typography variant="body1">
            {t("product.category")}:{" "}
            <strong>{product.categories?.[0] || "Thermos"}</strong>
          </Typography>

          <Typography variant="body1">
            {t("product.productCode")}: <strong>{product.id}</strong>
          </Typography>

          {/* PRODUCT BRAND */}
          {product.brand && (
            <p className="brand">
              {t("product.brand")}: <strong>{product.brand}</strong>
            </p>
          )}

          {/* PRICE */}
          <div className="price">
            <Typography
              variant="h2"
              sx={{
                color: "primary.main",
                mb: 0.5,
                lineHeight: 1,
              }}
            >
              {currency(product.price)}
            </Typography>
          </div>

          {/* ADD TO CART BUTTON */}
          <AddToCart product={product} />

          {/* SHOP NAME */}
          {product.shop && (
            <p className="shop">
              Sold By:
              <Link href={`/shops/${product.shop.slug}`}>
                <strong>{product.shop.name}</strong>
              </Link>
            </p>
          )}
        </Grid>
      </Grid>
    </StyledRoot>
  );
}
