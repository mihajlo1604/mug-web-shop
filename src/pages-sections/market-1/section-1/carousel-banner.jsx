"use client";

import AutoPlay from "embla-carousel-autoplay";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

// GLOBAL CUSTOM COMPONENTS
import { Carousel, useCarousel, CarouselDots } from "components/slider";
export default function CarouselBanner({
  children
}) {
  const theme = useTheme();
  const {
    ref,
    api,
    dots
  } = useCarousel({
    loop: true
  }, [AutoPlay({
    delay: 3000
  })]);
  // Full width carousel with no container constraints
  return <Box sx={{ 
      width: "65vw", 
      mx: "auto",
      [theme.breakpoints.down("md")]: {
        width: "100vw",
        mx: "calc(-50vw + 50%)"
      }
    }}>
      <Carousel ref={ref} api={api} sx={{
        height: 560,
        width: "100%",
        [theme.breakpoints.down("md")]: {
          height: 300
        }
      }}>
        {children}
      </Carousel>

      <Box sx={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 24px" 
      }}>
        <CarouselDots sx={{ mt: 2 }} scrollSnaps={dots.scrollSnaps} selectedIndex={dots.selectedIndex} onDotButtonClick={dots.onDotButtonClick} />
      </Box>
    </Box>;
}