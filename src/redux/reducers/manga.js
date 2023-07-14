//default
const initialState = {
    manga: {},
    chapters: [],
    pagination: {
      prev: false,
      next: true,
      currentPage: 1,
    },
  };
  
  const mangasReducer = (state = initialState, action) => {
    switch (action.type) {
      case "manga_set":
        return {
          ...state,
          manga: action.payload,
        };
      case "chapters_set":
        return {
          ...state,
          chapters: action.payload,
        };
      case "pagination_set":
        return {
          ...state,
          pagination: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default mangasReducer;