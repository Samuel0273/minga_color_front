import { createReducer } from "@reduxjs/toolkit"; // Importa la función createReducer de Redux Toolkit

import {
  setFilters,
  setCategories,
  setMangas,
  setPagination,
  captureText,
  captureChecks,
} from "../actions/mangas.js"; // Importa las acciones desde el archivo de acciones mangas.js

const initialState = { // Define el estado inicial
  filters: { // Propiedad filters
    title: "", // Propiedad title con valor inicial ""
    categoriesSelected: [], // Propiedad categoriesSelected con un array vacío como valor inicial
    page: 1, // Propiedad page con valor inicial 1
  },
  categories: [], // Propiedad categories con un array vacío como valor inicial
  mangas: [], // Propiedad mangas con un array vacío como valor inicial
  pagination: {}, // Propiedad pagination con un objeto vacío como valor inicial
};

const mangasReducer = createReducer(initialState, (builder) => { // Crea el reducer utilizando createReducer
  builder
    .addCase(setFilters, (state, action) => { // Agrega un caso para la acción setFilters
      state.filters = { // Actualiza el estado de filters
        ...state.filters, // Copia las propiedades existentes de filters
        ...action.payload, // Agrega las propiedades de la carga útil (payload) de la acción
      };
    })
    .addCase(setCategories, (state, action) => { // Agrega un caso para la acción setCategories
      state.categories = action.payload; // Actualiza el estado de categories con la carga útil (payload) de la acción
    })
    .addCase(setMangas, (state, action) => { // Agrega un caso para la acción setMangas
      state.mangas = action.payload; // Actualiza el estado de mangas con la carga útil (payload) de la acción
    })
    .addCase(setPagination, (state, action) => { // Agrega un caso para la acción setPagination
      state.pagination = action.payload; // Actualiza el estado de pagination con la carga útil (payload) de la acción
    })
    .addCase(captureText, (state, action) => { // Agrega un caso para la acción captureText
      state.filters.title = action.payload; // Actualiza el estado de title dentro de filters con la carga útil (payload) de la acción
    })
    .addCase(captureChecks, (state, action) => { // Agrega un caso para la acción captureChecks
      state.filters.categoriesSelected = action.payload; // Actualiza el estado de categoriesSelected dentro de filters con la carga útil (payload) de la acción
    });
});

export default mangasReducer; // Exporta el reducer mangasReducer como valor predeterminado
