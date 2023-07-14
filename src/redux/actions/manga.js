export const setManga = (manga) => {
    return {
      type: "manga_set",
      payload: manga,
    };
  };
  
  export const setChapters = (chapters) => {
    return {
      type: "chapters_set",
      payload: chapters,
    };
  };
  
  export const setPagination = (pagination) => {
    console.log('ACTION PAGINATION >>>', pagination)
    return {
      type: "pagination_set",
      payload: pagination,
    };
  };