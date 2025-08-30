// example
// const initialState = {
//     id: '1a2b3c',
//     title: 'Buy groceries',
//     description: 'Milk, eggs, bread',
//     isCompleted: false,
//     time: '2025-08-28T10:00:00+06:00',
// };

import { addTodoLocalStorage } from "../db/localStorage.db";
import { addTodoToFirebase } from "../services/firebase";

// Define initial state
const initialState = {
  delete: null,
  stats: "all",
  searchParams: "",
  todos: [],
};

// Define reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const addTaskData = { ...state, todos: [action.payload, ...state.todos] };
      addTodoToFirebase([action.payload, ...state.todos]).then((user) => {
        console.log("from reducer", user);
      });
      // console.log("from reducer", user)
      addTodoLocalStorage(addTaskData);
      return addTaskData;

    case "DELETE_TASK":
      const filterData = state?.todos.filter(
        (item) => item.id !== action.payload
      );
      const updatedFilderedData = { ...state, todos: filterData };
      addTodoToFirebase(filterData).then((res) => {
        console.log("from reducer", res);
      });
      addTodoLocalStorage(updatedFilderedData);
      return updatedFilderedData;
    case "UPDATE_TASK":
      const updated = state?.todos.map((item) => {
        if (item.id === action.payload?.data?.id) {
          return {
            ...item,
            title: action.payload?.data?.title,
            time: action.payload?.data?.time,
            description: action.payload?.data?.description,
          };
        } else {
          return item;
        }
      });

      // remove edit id.
      action.payload.dispatch({ type: "REMOVE_UPDATE_TASK_ID", payload: null });
      addTodoToFirebase([updated]).then((res) => {
        console.log("from reducer", res);
      });
      return { ...state, todos: updated };
    case "ADD_UPDATE_TASK_ID":
      return { ...state, delete: action.payload };
    case "REMOVE_UPDATE_TASK_ID":
      return { ...state, delete: null };
    case "COMPLETE_TASK":
      const updateComplete = state?.todos?.map((item) => {
        if (item?.id === action?.payload) {
          return {
            ...item,
            isCompleted: item.isCompleted ? false : true,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        todos: updateComplete,
      };
    case "TASK_SHORTING":
      return { ...state, stats: action.payload };

    case "SEARCH_TASK":
      return { ...state, searchParams: action.payload };

    case "UPDATE_WITH_LOCAL_STORAGE_DATA":
      console.log(action.payload);
      if (action.payload) {
        console.log(action.payload);
        return action.payload;
      } else {
        return state;
      }
    case "UPDATE_TASK_FIREBASE":
      console.log(action.payload);
      if (action.payload?.length) {
        const updateTaskFirebase = { ...state, todos: [...action.payload] };
        console.log("from update task", updateTaskFirebase);
        return updateTaskFirebase;
      }
      // addTodoLocalStorage(updateTaskFirebase)
      return state;

    case "CLEAR_TASK":
      return { ...state, todos: [] };
    default:
      return state;
  }
};

export { initialState, todoReducer };
