const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    case "FETCH_STREAMS":
      const newObject = {};
      action.payload.forEach((object) => {
        newObject[object.id] = object;
      });
      return newObject;
    default:
      return state;
  }
};

export default streamsReducer;
