import { useEffect, useReducer } from "react";
import Todo from "../../components/todo/Todo";
import { initialState, todoReducer } from "../../reducers/todoReducer";
import { Bounce, ToastContainer } from "react-toastify";
import {
  getTodoLocalStorage,
  getUserLocalStorage,
} from "../../db/localStorage.db";
import { TodoContext } from "../../contexts";
import { storeLocalDataForNewUser } from "../../services/firebase";

export const Home = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // add todo geting from local storage and check for backup
  useEffect(() => {
    // Restore todos from localStorage if they exist
    const todosFromStorage = getTodoLocalStorage();
    if (
      todosFromStorage &&
      todosFromStorage.todos &&
      todosFromStorage.todos.length > 0
    ) {
      dispatch({
        type: "UPDATE_WITH_LOCAL_STORAGE_DATA",
        payload: todosFromStorage,
      });
      console.log("Home: Todos restored from localStorage");
    } else {
      // If no todos in localStorage, start with empty state
      dispatch({
        type: "CLEAR_TASK",
        payload: null,
      });
      console.log("Home: No todos found, starting with empty state");
    }

    // Check if user is logged in for backup opportunities
    const user = getUserLocalStorage();
    if (user) {
      console.log("Home: User found, checking for backup opportunities");
      // Add delay to ensure Firebase is ready
      storeLocalDataForNewUser();
    } else {
      console.log("Home: No user found");
    }
  }, []);

  return (
    <div>
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
