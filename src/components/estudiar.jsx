import React, { useEffect } from "react"; // Importa React y useEffect desde la biblioteca "react"
import { useDispatch, useSelector } from "react-redux"; // Importa useDispatch y useSelector desde "react-redux" para interactuar con el estado de Redux
import { api, apiUrl, endpoints } from "../utils/api"; // Importa la API y las constantes relacionadas
import {
  setFilters,
  setCategories,
  setMangas,
  setPagination,
} from "../redux/actions/mangas.js"; // Importa las acciones de Redux para actualizar el estado de mangas
import { Link } from "react-router-dom"; // Importa el componente Link de "react-router-dom" para crear enlaces

const MangasC = () => { // Componente funcional MangasC
  const dispatch = useDispatch(); // Obtiene el despachador de Redux
  const { filters, categories, mangas, pagination } = useSelector( // Obtiene el estado de Redux utilizando useSelector
    (state) => state.mangas
  );

  const { title, categoriesSelected, page } = filters; // Desestructura las propiedades necesarias del estado
  const { prev, next } = pagination;

  const getMangas = async () => { // Función asincrónica para obtener mangas
    try {
      const { data } = await api.get( // Realiza una solicitud GET a la API utilizando axios
        apiUrl + endpoints.read_mangas + `?title=${title}&category=${categoriesSelected}&page=${page}`
      );
      dispatch(setMangas(data.mangas)); // Actualiza el estado de Redux con los mangas obtenidos
      dispatch(setPagination(data.pagination)); // Actualiza el estado de Redux con la paginación obtenida
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => { // Función asincrónica para obtener las categorías
    try {
      const { data } = await api.get( // Realiza una solicitud GET a la API utilizando axios
        apiUrl + endpoints.read_categories
      );
      dispatch(setCategories(data.categories)); // Actualiza el estado de Redux con las categorías obtenidas
    } catch (error) {
      console.log(error);
    }
  };

  const selectCategory = (value) => { // Función para seleccionar una categoría
    let updatedCategories = [];
    if (categoriesSelected.includes(value)) { // Si la categoría ya está seleccionada, se excluye
      updatedCategories = categoriesSelected.filter(
        (category) => category !== value
      );
    } else { // Si la categoría no está seleccionada, se agrega
      updatedCategories = [...categoriesSelected, value];
    }
    const updatedFilters = { // Crea un objeto con las nuevas categorías seleccionadas y reinicia la página a 1
      ...filters,
      categoriesSelected: updatedCategories,
      page: 1,
    };
    dispatch(setFilters(updatedFilters)); // Actualiza el estado de Redux con los nuevos filtros
  };

  useEffect(() => { // Hook useEffect para realizar efectos secundarios
    getMangas(); // Llama a la función para obtener los mangas
    getCategories(); // Llama a la función para obtener las categorías
  }, [title, categoriesSelected, page]); // Se ejecuta cuando cambian los valores de título, categorías seleccionadas o página

  const handlePrevPage = () => { // Función para manejar el evento de página anterior
    if (prev) { // Si hay una página anterior disponible
      dispatch(setFilters({ ...filters, page: prev })); // Actualiza el estado de Redux con la página anterior
    }
  };

  const handleNextPage = () => { // Función para manejar el evento de página siguiente
    if (next) { // Si hay una página siguiente disponible
      dispatch(setFilters({ ...filters, page: next })); // Actualiza el estado de Redux con la página siguiente
    }
  };

  const handleTextChange = (e) => { // Función para manejar el cambio de texto en el campo de búsqueda
    dispatch(setFilters({ ...filters, title: e.target.value, page: 1 })); // Actualiza el estado de Redux con el nuevo título y reinicia la página a 1
  };

  return (
    <div className="flex flex-wrap flex-col min-h-screen w-screen items-center justify-center">
      {/* Contenido JSX */}
    </div>
  );
};

export default MangasC; // Exporta el componente MangasC como valor predeterminado
