import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { sideBarStore, toggleSideBar } from "@/sideBarStore"; // Importa el store de sidebar

const SideBarToggle = () => {
  const isSideBarOpen = useStore(sideBarStore); // Obtener el estado del sidebar desde el store

  // Usamos useEffect para aplicar las clases de transición cuando el estado cambia
  useEffect(() => {
    const sideBar = document.getElementById("SideBar");
    const main = document.getElementById("Main");
    const screen = document.getElementById("screen");

    // Cuando el sidebar esté abierto
    if (sideBar && main) {
      if (isSideBarOpen) {
        console.log("Sidebar abierto. Aplicando clases...");
        main.classList.add("sm:ml-80" );
        screen.classList.add("hidden", "sm:block");
        sideBar.classList.remove("-translate-x-full"); // Muestra el sidebar
      } else {
        console.log("Sidebar cerrado. Eliminar clases...");
        main.classList.remove("sm:ml-80");
        screen.classList.remove("hidden", "sm:block");
        sideBar.classList.add("-translate-x-full"); // Oculta el sidebar
      }
    }
  }, [isSideBarOpen]); // Este efecto se ejecuta cada vez que el estado del sidebar cambia

  return (
    <>
      {/* Botón para alternar el estado del sidebar */}
      <button
        id="ToggleSideBar"
        onClick={() => {
          toggleSideBar(); // Llamamos a la función que alterna el estado
        }}
        className={`absolute top-2 ${
          isSideBarOpen ? "right-6 md:right-[96%] transform translate-x-1/2 " : "left-2 sm:left-24 transform translate-x-2"
        }  my-2 cursor-pointer border-2 rounded-xl p-1 bg-gray-200 dark:bg-gray-500 z-50`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </>
  );
};

export default SideBarToggle;
