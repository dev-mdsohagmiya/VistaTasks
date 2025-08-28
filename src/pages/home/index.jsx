import { useEffect, useReducer } from "react";
import Todo from "../../components/todo/Todo"
import { TodoContext } from "../../contexts"
import { initialState, todoReducer } from "../../reducers/todoReducer";
import { Bounce, ToastContainer } from "react-toastify";

export const Home = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);


    return <TodoContext.Provider value={{ state, dispatch }}>
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
    </TodoContext.Provider >
}