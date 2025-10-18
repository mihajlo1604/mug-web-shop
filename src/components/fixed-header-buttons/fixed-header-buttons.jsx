"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import { useTranslation } from "react-i18next";
import LanguageToggle from "components/language-toggle";
import BlogButton from "components/blog-button";
import CartButton from "components/cart-button";

export default function FixedHeaderButtons() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Top-left buttons */}
      <Box sx={{ 
        position: 'fixed', 
        top: 20, 
        left: 20, 
        zIndex: 1000,
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }}>
        <Button
          component={Link}
          href="/"
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1,
            boxShadow: 2,
            '&:hover': {
              boxShadow: 4,
            }
          }}
        >
          {t('Home')}
        </Button>
        <LanguageToggle />
      </Box>
      
      {/* Top-right Blog button */}
      <Box sx={{ 
        position: 'fixed', 
        top: 20, 
        right: 20, 
        zIndex: 1000
      }}>
        <BlogButton />
      </Box>
      
      {/* Bottom-right Cart button */}
      <CartButton />
    </>
  );
}



