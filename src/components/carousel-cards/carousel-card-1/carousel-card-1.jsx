"use client";

import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
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
  
  return <StyledRoot>
      <Grid container spacing={3} alignItems="center">
        <Grid className="grid-item" size={{
        md: 6,
        xs: 12
      }}>
          <h1 className="title">{t(title)}</h1>
          <p className="description">{t(description)}</p>

        </Grid>

        <Grid size={{
        md: 6,
        xs: 12
      }}>
          <div className="img-wrapper">
            <LazyImage fill src={imgUrl} alt={t(title)} sizes="(max-width: 768px) 100vw, 100vw" />
          </div>
        </Grid>
      </Grid>
    </StyledRoot>;
}