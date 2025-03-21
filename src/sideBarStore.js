// sideBarStore.js
import { atom } from 'nanostores';

export const sideBarStore = atom(() => {
  const savedSideBar = localStorage.getItem("sideBar");
  return savedSideBar ? savedSideBar === 'true' : false;
});

export const toggleSideBar = () => {
  const currentSideBar = sideBarStore.get();
  const newSideBar = !currentSideBar;

  // Aquí debería mostrar el mensaje en la consola
  console.log("Estado del Sidebar:", newSideBar); // Asegúrate de que este console.log esté funcionando

  localStorage.setItem("sideBar", newSideBar.toString());
  sideBarStore.set(newSideBar);
};
