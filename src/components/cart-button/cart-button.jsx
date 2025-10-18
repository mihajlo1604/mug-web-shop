"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "hooks/useCart";
import { useTranslation } from "react-i18next";

export default function CartButton() {
  const { t } = useTranslation();
  const { state } = useCart();
  const [cartCount, setCartCount] = useState(0);

  // Calculate total items in cart
  useEffect(() => {
    const totalItems = state.cart.reduce((total, item) => total + item.qty, 0);
    setCartCount(totalItems);
  }, [state.cart]);

  return (
    <Button
      component={Link}
      href="/cart"
      variant="contained"
      color="primary"
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        minWidth: 56,
        height: 56,
        borderRadius: '50%',
        boxShadow: 4,
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.05)',
        },
        transition: 'all 0.2s ease-in-out',
        animation: cartCount > 0 ? 'pulse 0.6s ease-in-out' : 'none',
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        }
      }}
      aria-label={t('cart.viewCart')}
    >
      <Badge 
        badgeContent={cartCount} 
        color="error"
        sx={{
          '& .MuiBadge-badge': {
            fontSize: '0.75rem',
            fontWeight: 'bold',
            minWidth: 20,
            height: 20,
          }
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: 24 }} />
      </Badge>
    </Button>
  );
}
