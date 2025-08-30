export const clearDataLogout = ({ dispatch }) => {
  // Clear user data from localStorage
  localStorage.removeItem("user");

  // Clear todos from localStorage as well
  localStorage.removeItem("todo");

  // Clear the state
  dispatch({ type: "CLEAR_TASK", payload: null });

  console.log("Logout: All data cleared including todos");
};
