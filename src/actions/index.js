const signIn = (id) => {
  console.log("happy");
  return {
    type: "SIGN_IN",
    payload: {
      authorized: true,
      userId: id,
    },
  };
};

const signOut = () => {
  return {
    type: "SIGN_OUT",
    payload: false,
  };
};

export { signIn, signOut };
