"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import ArticleIcon from "@mui/icons-material/Article";
import { useTranslation } from "react-i18next";

export default function BlogButton() {
  const { t } = useTranslation();
  
  return (
    <Button
      component={Link}
      href="/blog"
      variant="contained"
      color="primary"
      startIcon={<ArticleIcon />}
      sx={{
        borderRadius: 2,
        px: 3,
        py: 1,
        boxShadow: 2,
        '&:hover': {
          boxShadow: 4,
        }
      }}
    >
      {t('Blog')}
    </Button>
  );
}
