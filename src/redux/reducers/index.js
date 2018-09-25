let defaultState={
  name: "unknown user"
};

const mainReducer=(state=defaultState, action) =>{
  if(action.type === "User"){
    return{
      ...state,
      name: action.name
    }
  } else{
    return{
      ...state
    }
  }
};