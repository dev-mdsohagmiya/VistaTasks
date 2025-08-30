export const clearDataLogout = ({ dispatch }) => {

    localStorage.clear()
    dispatch({ type: "CLEAR_TASK", payload: null })


}