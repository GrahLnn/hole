import { useState, useEffect } from "react";

export function useTheme() {
  function getIsDark() {
    if (document.documentElement.classList.contains("dark")) {
      return true;
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  const [isDark, setIsDark] = useState(getIsDark);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(getIsDark());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const mediaListener = () => setIsDark(getIsDark());
    media.addEventListener("change", mediaListener);

    setIsDark(getIsDark());

    return () => {
      observer.disconnect();
      media.removeEventListener("change", mediaListener);
    };
  }, []);

  return isDark;
}
