import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { themeStore, toggleTheme } from "@/themeStore"; // Importa el store

const ThemeToggleButton = () => {
  // Obtener el estado del tema desde el store

  const isDark = useStore(themeStore);

  // Usar useEffect para aplicar la clase "dark" en el <html>
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (!isDark) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDark]); // Este efecto se ejecuta cuando isDark cambia

  return (
    <button
      id="toggle-theme"
      type="button"
      className="fixed top-1.5 right-2 border-2 cursor-pointer p-0.5 bg-gray-100 dark:bg-gray-500 rounded-full transform transition-all hover:scale-110"
      onClick={toggleTheme}
    >
      <svg
        id="svg-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`size-6 ${isDark ? "hidden" : ""}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        ></path>
      </svg>

      {/* SVG para el ícono de luna */}
      <svg
        id="svg-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`size-6 ${isDark ? "" : "hidden"}`} // Mostrar cuando es oscuro
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        ></path>
      </svg>
    </button>
  );
};

export default ThemeToggleButton;
