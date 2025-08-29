import { useContext, useMemo } from "react";
import { TaskCard } from "./TaskCard"
import { TasksHeader } from "./TasksSectionHeader"
import { TodoContext } from "../../contexts";

export const TasksSection = ({ mockTodos, setShowAddModal, handleDeleteTask, handleUpdateTask, handleTaskCompletation }) => {
    const { state, dispatch } = useContext(TodoContext);
    const currentTodos = useMemo(() => {
        let currentTodos = [...state?.todos]
        if (state?.searchParams) {
            const searchedData = state.todos.filter((item) => item.title.toLowerCase().includes(state?.searchParams.toLowerCase()) || item.description.toLowerCase().includes(state?.searchParams.toLowerCase()))
            currentTodos = searchedData
        }

        if (state.stats.toLowerCase() === "all") return currentTodos
        if (state.stats.toLowerCase() === "completed") return currentTodos.filter((item) => item.isCompleted === true)
        if (state.stats.toLowerCase() === "active") return currentTodos.filter((item) => item.isCompleted !== true)

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