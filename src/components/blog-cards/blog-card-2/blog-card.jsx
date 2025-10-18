"use client";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns/format";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

// GLOBAL CUSTOM COMPONENT
import IconLink from "components/icon-link";

// STYLED COMPONENTS
import { ContentWrapper, ImageContainer, StyledRoot } from "./styles";


// ==============================================================


// ==============================================================

export default function BlogCard2({
  title,
  titleSr,
  date,
  description,
  descriptionSr,
  thumbnail,
  link = "#"
}) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  
  // Use translated content based on current language
  const displayTitle = currentLang === 'sr' && titleSr ? titleSr : title;
  const displayDescription = currentLang === 'sr' && descriptionSr ? descriptionSr : description;

  return <StyledRoot>
      <Link href={link}>
        <ImageContainer>
          <Image fill alt={displayTitle} src={thumbnail} />
        </ImageContainer>
      </Link>

      <ContentWrapper>
        <Typography variant="body1" sx={{
        mb: 1
      }}>
          {format(new Date(date), "dd MMMM, yyyy")}
        </Typography>

        <Link href={link}>
          <Typography variant="h3" fontSize={22} fontWeight={700}>
            {displayTitle}
          </Typography>
        </Link>

        <Typography variant="body1" fontSize={16} className="description">
          {displayDescription}
        </Typography>

        <IconLink title={currentLang === 'sr' ? 'Pročitaj Više' : 'Read More'} url={link} />
      </ContentWrapper>
    </StyledRoot>;
}