"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

// CUSTOM COMPONENTS
import Logo from "components/logo/Logo";
import LanguageToggle from "components/language-toggle";

export default function MainNavbar() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks = [
    { label: t("Home"), href: "/" },
    { label: t("Blog"), href: "/blog" },
    { label: t("footer.about"), href: "/about" },
    { label: t("footer.contact"), href: "/contact" },
  ];

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0}
      sx={{
        bgcolor: "grey.900",
        color: "white",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #A37F74 0%, #B8948A 50%, #A37F74 100%)"
        }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 64, md: 80 },
            py: 1,
          }}
        >
          {/* Logo Section - Left */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo size={120} variant="bg" />
          </Box>

          {/* Navigation Links - Center */}
          {isMounted && (
            <Box 
              sx={{ 
                display: "flex",
                gap: 1,
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: "grey.300",
                    fontSize: { xs: 12, sm: 14, md: 16 },
                    fontWeight: 500,
                    px: { xs: 1, sm: 2, md: 3 },
                    py: 1,
                    textTransform: "none",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Language Toggle - Right */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LanguageToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

