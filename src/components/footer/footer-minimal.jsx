"use client";

import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Logo from "components/logo/Logo";

export default function FooterMinimal() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return <Box component="footer" sx={{ 
    mt: 8, 
    bgcolor: "grey.900",
    color: "white",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: "linear-gradient(90deg, #A37F74 0%, #B8948A 50%, #A37F74 100%)"
    }
  }}>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={6}>
          {/* Logo and Brand Section */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Logo size={180} variant="bg" />
              <Typography variant="body1" sx={{ 
                color: "grey.300",
                lineHeight: 1.6,
                maxWidth: 300
              }}>
                {isMounted ? t("about.tagline", {
                  defaultValue: "Functionality meets modern design. Hydration for every day."
                }) : "Functionality meets modern design. Hydration for every day."}
              </Typography>
            </Stack>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Typography variant="h6" sx={{ 
                color: "white",
                fontWeight: 600,
                mb: 1
              }}>
                {isMounted ? t("footer.contact.title", { defaultValue: "Contact Us" }) : "Contact Us"}
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: "50%", 
                    bgcolor: "primary.main" 
                  }} />
                  <Typography variant="body2" sx={{ color: "grey.300" }}>
                    {isMounted ? t("footer.contact.email", { defaultValue: "support@dose.com" }) : "support@dose.com"}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: "50%", 
                    bgcolor: "primary.main" 
                  }} />
                  <Typography variant="body2" sx={{ color: "grey.300" }}>
                    {isMounted ? t("footer.contact.phone", { defaultValue: "+1 (555) 123-4567" }) : "+1 (555) 123-4567"}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Typography variant="h6" sx={{ 
                color: "white",
                fontWeight: 600,
                mb: 1
              }}>
                {isMounted ? t("footer.navigation", { defaultValue: "Quick Links" }) : "Quick Links"}
              </Typography>
              <Stack spacing={2}>
                <Link href="/about" style={{ 
                  color: "inherit", 
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}>
                  <Typography variant="body2" sx={{ 
                    color: "grey.300",
                    "&:hover": { color: "primary.main" }
                  }}>
                    {isMounted ? t("footer.about", { defaultValue: "About Us" }) : "About Us"}
                  </Typography>
                </Link>
                <Link href="/faq" style={{ 
                  color: "inherit", 
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}>
                  <Typography variant="body2" sx={{ 
                    color: "grey.300",
                    "&:hover": { color: "primary.main" }
                  }}>
                    {isMounted ? t("FAQ") : "FAQ"}
                  </Typography>
                </Link>
                <Link href="/blog" style={{ 
                  color: "inherit", 
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}>
                  <Typography variant="body2" sx={{ 
                    color: "grey.300",
                    "&:hover": { color: "primary.main" }
                  }}>
                    {isMounted ? t("footer.blog", { defaultValue: "Blog" }) : "Blog"}
                  </Typography>
                </Link>
                <Link href="/contact" style={{ 
                  color: "inherit", 
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}>
                  <Typography variant="body2" sx={{ 
                    color: "grey.300",
                    "&:hover": { color: "primary.main" }
                  }}>
                    {isMounted ? t("footer.contact", { defaultValue: "Contact" }) : "Contact"}
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      
      <Divider sx={{ borderColor: "grey.700" }} />
      
      <Container sx={{ py: 3 }}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            © {new Date().getFullYear()} DOSE — {isMounted ? t("footer.rights", { defaultValue: "All rights reserved." }) : "All rights reserved."}
          </Typography>
          <Typography variant="body2" sx={{ color: "grey.400", fontSize: "0.75rem" }}>
            {isMounted ? t("footer.madeWith", { defaultValue: "Made with ❤️ for hydration" }) : "Made with ❤️ for hydration"}
          </Typography>
        </Stack>
      </Container>
    </Box>;
}


