import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiUrl, endpoints } from '../../utils/api.js';




export const loadAuthorAdmin = createAsyncThunk('admin/loadAuthorsAdmin', async () => {
  const response = await api.get(apiUrl + endpoints.fetchAuthorsAdmin, );
  const { activeAuthors, inactiveAuthors } = response.data;
  return { activeAuthors, inactiveAuthors };
});

export const changeAuthorRole = createAsyncThunk(
  'admin/changeAuthorRole',
  async (user_id, thunkAPI) => { // Agrega 'thunkAPI' como segundo parámetro
    try {
      console.log('Author ID:', user_id);
      await api.put(apiUrl + endpoints.changeUserRoleToAuthor.replace(':id', user_id), {},);

      // Actualizar el estado con los autores activos e inactivos actualizados
      const { activeAuthors, inactiveAuthors } = thunkAPI.getState().admin;
      const updatedActiveAuthors = activeAuthors.filter((author) => author.id !== user_id);
      const updatedInactiveAuthors = [
        ...inactiveAuthors,
        activeAuthors.find((author) => author.id === user_id),
      ];

      return { updatedActiveAuthors, updatedInactiveAuthors };
    } catch (error) {
      console.log('Error cambiando el rol del autor:', error);
      // Manejo de errores
      throw error;
    }
  }
);