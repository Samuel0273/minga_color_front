// actions/auth.js

export const setUser = (user) => {
    return {
      type: "SET_USER",
      payload: user,
    };
  };
  
  export const setPhoto = (photo) => {
    return {
      type: "SET_PHOTO",
      payload: photo,
    };
  };
  
  export const setAuthId = (author_id) => {
    console.log('ACTION AUTH ID >>>', author_id)
    return {
      type: "SET_AUTH_ID",
      payload: author_id,
    }
    
  }