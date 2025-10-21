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
  // Clean Hero: minimal UI, full-bleed within Container, fixed height
  return <Box mt={4} borderRadius={0} bgcolor="transparent" position="relative" px={0} py={0}>
      <Carousel ref={ref} api={api} sx={{
        height: 560,
        [theme.breakpoints.down("md")]: {
          height: 300
        }
      }}>
        {children}
      </Carousel>

      <CarouselDots sx={{ mt: 2 }} scrollSnaps={dots.scrollSnaps} selectedIndex={dots.selectedIndex} onDotButtonClick={dots.onDotButtonClick} />
    </Box>;
}