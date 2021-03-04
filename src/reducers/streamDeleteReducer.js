const INITIAL_STATE = {
  id: null,
  open: false,
};

const streamDeleteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_STREAM_DELETE":
      return {
        id: action.id,
        open: true,
      };
    case "CLOSE_STREAM_DELETE":
      return {
        id: null,
        open: false,
      };
    default:
      return state;
  }
};

export default streamDeleteReducer;
