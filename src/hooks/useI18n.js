import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useI18n() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    window.localStorage.setItem("language", lng);
  };

  useEffect(() => {
    i18n.changeLanguage(window.localStorage.getItem("language"));
  }, [i18n]);

  return {
    language: window.localStorage.getItem("language") || i18n.language,
    changeLanguage
  };
}
