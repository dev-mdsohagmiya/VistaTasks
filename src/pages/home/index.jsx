import { useEffect, useReducer, useState } from "react";
import Todo from "../../components/todo/Todo";
import { initialState, todoReducer } from "../../reducers/todoReducer";
import { Bounce, ToastContainer } from "react-toastify";
import { getTodoLocalStorage } from "../../db/localStorage.db";
import { TodoContext } from "../../contexts";

export const Home = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // add todo geting from local storage
  useEffect(() => {
    dispatch({ type: "UPDATE_WITH_LOCAL_STORAGE_DATA", payload: getTodoLocalStorage() })
  }, [])

  return (
    <div >
      <TodoContext.Provider value={{ state, dispatch }}>
        <Todo />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </TodoContext.Provider>

    </div>
  );
};
