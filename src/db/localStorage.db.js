
export const addTodoLocalStorage = (data) => {
    localStorage.setItem("todo", JSON.stringify(data))
}


export const getTodoLocalStorage = (data) => {
    const getTodo = localStorage.getItem("todo")
    return JSON.parse(getTodo)
}


export const addUserLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user))

}


export const getUserLocalStorage = (user) => {
    const getUser = localStorage.getItem("user")
    return JSON.parse(getUser)
}


export const addThemeLocalStorage = (text) => {
    localStorage.setItem("theme", true)

}

export const getThemeLocalStorage = () => {
    return localStorage.getItem("theme")
}

export const removeThemeLocalStorage = () => {
    return localStorage.removeItem("theme")
}
