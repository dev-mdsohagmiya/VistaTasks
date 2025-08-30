export const addTodoLocalStorage = (data) => {
  console.log("addTodoLocalStorage called with data:", data);
  try {
    localStorage.setItem("todo", JSON.stringify(data));
    console.log("addTodoLocalStorage: Successfully stored in localStorage");

    // Verify the storage
    const stored = localStorage.getItem("todo");
    console.log("addTodoLocalStorage: Verification - stored data:", stored);
  } catch (error) {
    console.error("addTodoLocalStorage: Error storing data:", error);
  }
};

export const getTodoLocalStorage = (data) => {
  const getTodo = localStorage.getItem("todo");
  return JSON.parse(getTodo);
};

export const addUserLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserLocalStorage = (user) => {
  const getUser = localStorage.getItem("user");
  return JSON.parse(getUser);
};

export const addThemeLocalStorage = (text) => {
  localStorage.setItem("theme", true);
};

export const getThemeLocalStorage = () => {
  return localStorage.getItem("theme");
};

export const removeThemeLocalStorage = () => {
  return localStorage.removeItem("theme");
};
