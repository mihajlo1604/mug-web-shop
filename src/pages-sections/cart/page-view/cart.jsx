"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";

// CUSTOM COMPONENTS
import Trash from "icons/Trash";
import CartItem from "../cart-item";
import EmptyCart from "../empty-cart";
import CheckoutForm from "../checkout-form";
export default function CartPageView() {
  const { t } = useTranslation();
  const {
    state,
    dispatch
  } = useCart();
  if (state.cart.length === 0) {
    return <EmptyCart />;
  }
  return <Grid container spacing={3}>
      <Grid size={{
      md: 8,
      xs: 12
    }}>
        {state.cart.map(item => <CartItem key={item.id} item={item} />)}

        <Box textAlign="end">
          <Button disableElevation color="error" variant="outlined" startIcon={<Trash fontSize="small" />} onClick={() => dispatch({
          type: "CLEAR_CART"
        })}>
            {t('cart.clearCart')}
          </Button>
        </Box>
      </Grid>

      <Grid size={{
      md: 4,
      xs: 12
    }}>
        <CheckoutForm />
      </Grid>
    </Grid>;
}