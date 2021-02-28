const INITIAL_STATE = {
  authorized: null,
  userId: null,
};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        authorized: action.payload.authorized,
        userId: action.payload.userId,
      };
    case "SIGN_OUT":
      return { authorized: action.payload, userId: null };

    default:
      return state;
  }
};

export default authReducer;
