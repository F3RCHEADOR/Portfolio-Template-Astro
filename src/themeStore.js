import { atom } from 'nanostores';

// Crear el store para el tema
export const themeStore = atom(() => {
  const savedTheme = localStorage.getItem("theme");
  // Si no hay tema guardado, retornamos "false" (tema claro por defecto)
  return savedTheme ? savedTheme === "dark" : false; 
});

// Función para cambiar el tema
export const toggleTheme = () => {
  // Obtener el tema actual desde el store
  const currentTheme = themeStore.get();

  // Alternar el valor del tema
  const newTheme = !currentTheme;

  // Guardar el nuevo tema en localStorage
  localStorage.setItem("theme", newTheme ? "dark" : "light");

  // Actualizar el store con el nuevo valor
  themeStore.set(newTheme);

  // Mostrar el valor en consola para depuración
  console.log("Nuevo tema guardado:", newTheme ? "dark" : "light");
};
