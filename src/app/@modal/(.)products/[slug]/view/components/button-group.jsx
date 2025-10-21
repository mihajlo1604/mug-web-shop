"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import useCart from "hooks/useCart";
import IconLink from "components/icon-link";
export default function ButtonGroup({
  product
}) {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const {
    dispatch
  } = useCart();
  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          ...product,
          qty: 1
        }
      });
      setLoading(false);
    }, 500);
  };
  return <>
      <Button disableElevation size="large" color="primary" variant="contained" loading={isLoading} onClick={handleAddToCart}>
        {t("button.addToCart")}
      </Button>

      <IconLink title="View Product Details" url={`/products/${product.slug}`} sx={{
      mt: 2
    }} />
    </>;
}