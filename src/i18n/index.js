"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resource";

// Get saved language from localStorage or default to English
const getSavedLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'en';
  }
  return 'en';
};

i18next.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

// Save language preference when it changes
i18next.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng);
  }
});