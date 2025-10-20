import { useState, useEffect, useCallback } from "react";
export function useCarouselArrows(emblaApi) {
  // Start as null to avoid SSR/CSR disabled attribute mismatch
  const [disablePrev, setDisabledPrevBtn] = useState(null);
  const [disableNext, setDisabledNextBtn] = useState(null);
  const onClickPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);
  const onClickNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback(_emblaApi => {
    setDisabledPrevBtn(!_emblaApi.canScrollPrev());
    setDisabledNextBtn(!_emblaApi.canScrollNext());
  }, []);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);
  return {
    disablePrev,
    disableNext,
    onClickPrev,
    onClickNext
  };
}