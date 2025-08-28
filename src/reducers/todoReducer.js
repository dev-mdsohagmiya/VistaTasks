
// example
// const initialState = {
//     id: '1a2b3c',
//     title: 'Buy groceries',
//     description: 'Milk, eggs, bread',
//     isCompleted: false,
//     time: '2025-08-28T10:00:00+06:00',
// };


// Define initial state
const initialState = {
    delete: null,
    stats: "all",
    todos: []
}

// Define reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, todos: [action.payload, ...state] }

        case 'DELETE_TASK':
            const filterData = state.filter((item) => item.id !== action.payload)
            return { ...state, todos: filterData }
        case 'ADD_UPDATE_TASK_ID':
            return { ...state, delete: action.payload }
        case 'REMOVE_UPDATE_TASK_ID':
            return { ...state, delete: null }
        default:
            return state;
    }
};

export { initialState, todoReducer }
