const todoModel = ({ id, title, description, isCompleted, time, date }) => {

    return {
        id: id,
        title: title,
        description: description,
        isCompleted: isCompleted ? isCompleted : false,
        time: time,
        date: date
    }
}


export { todoModel }