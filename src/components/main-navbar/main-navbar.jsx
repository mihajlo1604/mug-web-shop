"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback, Fragment } from "react";

// CUSTOM COMPONENTS
import Logo from "components/logo/Logo";
import LanguageToggle from "components/language-toggle";

export default function MainNavbar() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const navLinks = [
    { label: t("Home"), href: "/" },
    { label: t("Blog"), href: "/blog" },
    { label: t("FAQ"), href: "/faq" },
    { label: t("footer.about"), href: "/about" },
    { label: t("footer.contact"), href: "/contact" },
  ];

  return (
    <Fragment>
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
          {/* Mobile Menu Button - Left (Mobile Only) */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo Section - Center (Mobile) / Left (Desktop) */}
          <Box sx={{ 
            display: "flex", 
            alignItems: "center",
            flex: { xs: 1, md: 0 },
            justifyContent: { xs: "center", md: "flex-start" }
          }}>
            <Logo size={120} variant="bg" />
          </Box>

          {/* Navigation Links - Center (Desktop Only) */}
          <Box 
            sx={{ 
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            {isMounted ? navLinks.map((link) => (
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
            )) : (
              // Show placeholder buttons during SSR to maintain layout
              <>
                <Button sx={{ color: "grey.300", fontSize: { xs: 12, sm: 14, md: 16 }, fontWeight: 500, px: { xs: 1, sm: 2, md: 3 }, py: 1, textTransform: "none" }}>Home</Button>
                <Button sx={{ color: "grey.300", fontSize: { xs: 12, sm: 14, md: 16 }, fontWeight: 500, px: { xs: 1, sm: 2, md: 3 }, py: 1, textTransform: "none" }}>Blog</Button>
                <Button sx={{ color: "grey.300", fontSize: { xs: 12, sm: 14, md: 16 }, fontWeight: 500, px: { xs: 1, sm: 2, md: 3 }, py: 1, textTransform: "none" }}>FAQ</Button>
                <Button sx={{ color: "grey.300", fontSize: { xs: 12, sm: 14, md: 16 }, fontWeight: 500, px: { xs: 1, sm: 2, md: 3 }, py: 1, textTransform: "none" }}>About</Button>
                <Button sx={{ color: "grey.300", fontSize: { xs: 12, sm: 14, md: 16 }, fontWeight: 500, px: { xs: 1, sm: 2, md: 3 }, py: 1, textTransform: "none" }}>Contact</Button>
              </>
            )}
          </Box>

          {/* Language Toggle - Right */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LanguageToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    {/* Mobile Drawer */}
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': { 
          boxSizing: 'border-box', 
          width: 280,
          bgcolor: 'grey.900',
          color: 'white'
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Logo size={120} variant="bg" />
        <List sx={{ mt: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <Button
                component={Link}
                href={link.href}
                onClick={handleDrawerToggle}
                sx={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  color: 'grey.300',
                  py: 2,
                  px: 2,
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {link.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    </Fragment>
  );
}

