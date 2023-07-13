import { createAction } from "@reduxjs/toolkit";

export const setFilters = createAction("mangas/setFilters");
export const setCategories = createAction("mangas/setCategories");
export const setMangas = createAction("mangas/setMangas");
export const setPagination = createAction("mangas/setPagination");
export const captureText = createAction("mangas/captureText");
export const captureChecks = createAction("mangas/captureChecks");