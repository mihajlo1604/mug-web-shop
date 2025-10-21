"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLang, setCurrentLang] = useState('en');
  const open = Boolean(anchorEl);

  useEffect(() => {
    setCurrentLang(i18n.language || 'en');
  }, [i18n.language]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    handleClose();
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'sr', label: 'Srpski', flag: '🇷🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        variant="outlined"
        sx={{
          color: "grey.300",
          borderColor: "grey.600",
          borderRadius: 2,
          px: 2,
          py: 1,
          transition: "all 0.3s ease",
          '&:hover': {
            color: "primary.main",
            borderColor: "primary.main",
            backgroundColor: "transparent",
          }
        }}
      >
        {currentLanguage.flag} {currentLanguage.label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
        PaperProps={{
          sx: {
            bgcolor: "grey.800",
            color: "white",
          }
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            selected={currentLang === lang.code}
            sx={{
              color: "grey.300",
              '&:hover': {
                color: "primary.main",
                bgcolor: "grey.700",
              },
              '&.Mui-selected': {
                color: "primary.main",
                bgcolor: "grey.700",
                '&:hover': {
                  bgcolor: "grey.600",
                }
              }
            }}
          >
            {lang.flag} {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}



