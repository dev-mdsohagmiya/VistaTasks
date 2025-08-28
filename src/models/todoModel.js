const todoModel = ({ id, title, description, isCompleted, time }) => {

    return {
        id: id,
        title: title,
        description: description,
        isCompleted: isCompleted ? isCompleted : false,
        time: time
    }
}


export { todoModel }