"use client";

import { Fragment } from "react";

// GLOBAL CUSTOM COMPONENTS
import { Carousel, CarouselDots, useCarousel } from "components/slider";
export default function HeroCarousel({
  children
}) {
  const {
    ref,
    api,
    dots
  } = useCarousel();
  return <Fragment>
      <Carousel ref={ref} api={api}>
        {children}
      </Carousel>

      <CarouselDots scrollSnaps={dots.scrollSnaps} selectedIndex={dots.selectedIndex} onDotButtonClick={dots.onDotButtonClick} />
    </Fragment>;
}