"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";

// STYLED COMPONENT
import { Wrapper, StyledButton } from "./styles";
export default function OrderConfirmationPageView() {
  const { t } = useTranslation();
  const { dispatch } = useCart();
  
  // Clear cart when order confirmation page loads
  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);
  
  return <Container className="mt-2 mb-5">
      <Wrapper>
        <Image width={220} height={74} alt="DOSE logo" src="/assets/images/withBackgroundLogo.png" />
        <Image width={116} height={116} alt="complete" src="/assets/images/illustrations/party-popper.svg" />

        <Typography variant="h1" fontWeight={700}>
          {t('order.thankYou')}
        </Typography>

        <Typography fontSize={16} variant="body1" color="text.secondary" sx={{
        padding: ".5rem 2rem"
      }}>
          {t('order.confirmation')}
        </Typography>

        <StyledButton color="primary" disableElevation variant="contained" className="button-link" LinkComponent={Link} href="/">
          {t('order.browseProducts')}
        </StyledButton>
      </Wrapper>
    </Container>;
}