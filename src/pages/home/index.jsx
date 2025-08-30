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
    // Check if user is logged in before restoring todos
    const user = getUserLocalStorage();

    if (user) {
      // Only restore todos if user is logged in
      dispatch({
        type: "UPDATE_WITH_LOCAL_STORAGE_DATA",
        payload: getTodoLocalStorage(),
      });

      console.log("Home: User found, checking for backup opportunities");
      // Add delay to ensure Firebase is ready
      setTimeout(() => {
        storeLocalDataForNewUser();
      }, 1000);
    } else {
      // If no user, clear todos state
      dispatch({
        type: "CLEAR_TASK",
        payload: null,
      });
      console.log("Home: No user found, todos cleared");
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
