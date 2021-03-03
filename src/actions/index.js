import axios from "axios";
import history from "../history.js";
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

const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const userId = getState().authorization.userId;
    const response = await axios.post("http://localhost:3001/streams", {
      ...formValues,
      userId: userId,
    });

    console.log(response);

    dispatch({
      type: "CREATE_STREAM",
      payload: response.data,
    });

    history.push("/");
  };
};

const fetchStreams = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("http://localhost:3001/streams");

    dispatch({ type: "FETCH_STREAMS", payload: response.data });
  };
};

const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/streams/${id}`);

    dispatch({ type: "FETCH_STREAM", payload: response.data });
  };
};

const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await axios.patch(
      `http://localhost:3001/streams/${id}`,
      formValues
    );

    dispatch({ type: "EDIT_STREAM", payload: response.data });
    history.push("/");
  };
};

const deleteStream = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3001/streams/${id}`);

    dispatch({ type: "DELETE_STREAM", payload: id });
    history.push("/");
  };
};
export {
  signIn,
  signOut,
  createStream,
  fetchStreams,
  fetchStream,
  editStream,
  deleteStream,
};
