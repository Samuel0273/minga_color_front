import { createReducer } from "@reduxjs/toolkit"
import mangasActions from "../actions/mangasActions.js"
let { read_mangas, delete_mangas, update_mangas } = mangasActions
let initialState = {
    mangas: []
}
const mangaReducer = createReducer(initialState, (builder) => builder //manejo de casos
    .addCase(read_mangas.fulfilled, (state, action)=>{
        let newState = {
            ...state,
            mangas: action.payload
        }
        return newState
    })
    .addCase(delete_mangas.fulfilled, (state, action)=>{
        let newState = {
            ...state,
            mangas: action.payload
        }
        return newState
    })

    .addCase(update_mangas.fulfilled, (state, action)=>{
        let newState = {
            ...state,
            mangas: action.payload
        }
        return newState
    }))

export default mangaReducer 