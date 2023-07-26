import { createAsyncThunk } from "@reduxjs/toolkit";
import { LS } from "../../utils/localStorageUtils";

import axios from 'axios'
const read_mangas = createAsyncThunk(
    'read_mangas', async () => {
        try {
          const token = LS.get("token");
          let headers = { headers: { Authorization: `Bearer ${token}` } };
          let res = await axios(apiUrl + "api/mangas/me", headers);
      
          return {
            manga: res.data.response,
          };
        } catch (error) {
          next(error);
        }
      });

const delete_mangas = createAsyncThunk(
    'delete_mangas', async(id) => {
        try {
            const token = LS.get("token");
            let headers = { headers: { Authorization: `Bearer ${token}` } };
            await axios.delete("http://localhost:8080/api/mangas/"+ id, headers)
            return true
        } catch (error) {
            console.log(error)
            return null;
        }
    });

const update_mangas = createAsyncThunk(
  'update_mangas', async(manga) => {
    try {
      const token = LS.get("token");
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      await axios.update("http://localhost:8080/api/mangas/"+ manga._id, headers, manga)
      console.log(newMangas)
      return newMangas
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
)

export default { read_mangas, delete_mangas, update_mangas }