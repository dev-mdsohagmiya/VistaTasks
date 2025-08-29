
export const addTodoLocalStorage = (data) => {
    localStorage.setItem("todo", JSON.stringify(data))
}


export const getTodoLocalStorage = (data) => {
    const getTodo = localStorage.getItem("todo")
    return JSON.parse(getTodo)
}


