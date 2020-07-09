import { useState, useEffect } from "react";

export function useTheme() {
  // const [isDark, setIsDark] = useState(window.matchMedia?.(matchDark).matches);
  const [theme, setTheme] = useState("dark");

  const changeTheme = nextTheme => {
    document.documentElement.style.setProperty(
      "--selected-font-color",
      `var(--${nextTheme}-font-color)`
    );
    document.documentElement.style.setProperty(
      "--selected-background-color",
      `var(--${nextTheme}-background-color)`
    );
    document.documentElement.style.setProperty(
      "--selected-button-font-color",
      `var(--${nextTheme}-button-font-color)`
    );
    document.documentElement.style.setProperty(
      "--selected-button-background-color",
      `var(--${nextTheme}-button-background-color)`
    );
  };

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      changeTheme("dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      changeTheme("light");
      setTheme("light");
    }
  };

  useEffect(() => {
    changeTheme(window.localStorage.getItem("theme") || "dark");
    setTheme(window.localStorage.getItem("theme") || "dark");
  }, []);

  return { theme, toggleTheme };
}
