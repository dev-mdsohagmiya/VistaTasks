
// example
// const initialState = {
//     id: '1a2b3c',
//     title: 'Buy groceries',
//     description: 'Milk, eggs, bread',
//     isCompleted: false,
//     time: '2025-08-28T10:00:00+06:00',
// };


// Define initial state
const initialState = []

// Define reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [action.payload, ...state]
        default:
            return state.reverse();
    }
};

export { initialState, todoReducer }
