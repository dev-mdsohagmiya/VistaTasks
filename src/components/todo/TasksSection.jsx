import { useContext } from "react";
import { TaskCard } from "./TaskCard"
import { TasksHeader } from "./TasksSectionHeader"
import { TodoContext } from "../../contexts";

export const TasksSection = ({ mockTodos, setShowAddModal, handleDeleteTask, handleUpdateTask, handleTaskCompletation }) => {
    const { state, dispatch } = useContext(TodoContext);



    return <>
        <TasksHeader setShowAddModal={setShowAddModal} />

        <div className="space-y-4">
            {state?.todos.reverse().map((todo) => (
                <TaskCard setShowAddModal={setShowAddModal} handleDeleteTask={handleDeleteTask} todo={todo} handleUpdateTask={handleUpdateTask} handleTaskCompletation={handleTaskCompletation} />
            ))}
        </div>
    </>
}