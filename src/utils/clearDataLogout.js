export const clearDataLogout = ({ dispatch }) => {
    // Clear everything except todos
    localStorage.clear
    // Keep todos in localStorage for backup

    // Clear the state
    dispatch({ type: "CLEAR_TASK", payload: null });

    console.log("Logout: User data cleared, todos preserved for backup");
};
