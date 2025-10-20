import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
export const geist = Geist({
  subsets: ["latin"]
});
import "overlayscrollbars/overlayscrollbars.css";


// THEME PROVIDER
import ThemeProvider from "theme/theme-provider";


// PRODUCT CART PROVIDER
import CartProvider from "contexts/CartContext";


// SITE SETTINGS PROVIDER
import SettingsProvider from "contexts/SettingContext";


// GLOBAL CUSTOM COMPONENTS
import RTL from "components/rtl";
import ProgressBar from "components/progress";
import { FooterMinimal } from "components/footer";
import Box from "@mui/material/Box";


// IMPORT i18n SUPPORT FILE
import "i18n";


// ==============================================================


// ==============================================================

export default function RootLayout({
  children,
  modal
}) {
  return <html lang="en" suppressHydrationWarning>
      <body id="body" className={geist.className} suppressHydrationWarning>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <RTL>
                <Box sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  minHeight: "100vh" 
                }}>
                  <Box sx={{ flex: "1 0 auto" }}>
                    {modal}
                    {children}
                  </Box>
                  <Box sx={{ flexShrink: 0 }}>
                    <FooterMinimal />
                  </Box>
                </Box>
              </RTL>

              <ProgressBar />
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>

        <GoogleAnalytics gaId="G-XKPD36JXY0" />
      </body>
    </html>;
}