"use client";


import { useTranslation } from "react-i18next";

// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";

// STYLED COMPONENT
import { StyledRoot } from "./styles";


// ==================================================


// ==================================================

export default function CarouselCard1({
  title,
  imgUrl,
  buttonText,
  description,
  buttonColor = "primary"
}) {
  const { t } = useTranslation();
  
  return <StyledRoot sx={{ width: "100%" }}>
      <div className="img-wrapper">
        <LazyImage fill src={imgUrl} alt={t(title)} sizes="100vw" />
      </div>
    </StyledRoot>;
}