import { useContext, useMemo } from "react";
import { TaskCard } from "./TaskCard"
import { TasksHeader } from "./TasksSectionHeader"
import { TodoContext } from "../../contexts";

export const TasksSection = ({ mockTodos, setShowAddModal, handleDeleteTask, handleUpdateTask, handleTaskCompletation }) => {
    const { state, dispatch } = useContext(TodoContext);
    const currentTodos = useMemo(() => {
        if (state.stats.toLowerCase() === "all") return state.todos
        if (state.stats.toLowerCase() === "completed") return state.todos.filter((item) => item.isCompleted === true)
        if (state.stats.toLowerCase() === "active") return state.todos.filter((item) => item.isCompleted !== true)

    }, [state])



    return <>
        <TasksHeader setShowAddModal={setShowAddModal} />

        <div className="space-y-4">
            {currentTodos.reverse().map((todo) => (
                <TaskCard setShowAddModal={setShowAddModal} handleDeleteTask={handleDeleteTask} todo={todo} handleUpdateTask={handleUpdateTask} handleTaskCompletation={handleTaskCompletation} />
            ))}
        </div>
    </>
}