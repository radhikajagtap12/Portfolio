export const loginUser = (email, password) => async (dispatch) => {
  try {
    // Here you can make an API call for login
    // Assuming successful login response:
    const user = { email, token: "sampleToken" }; // Replace with actual response from API
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
};
