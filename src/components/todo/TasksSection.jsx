import { useContext } from "react";
import { TaskCard } from "./TaskCard"
import { TasksHeader } from "./TasksSectionHeader"
import { TodoContext } from "../../contexts";

export const TasksSection = ({ mockTodos, setShowAddModal }) => {
    const { state, dispatch } = useContext(TodoContext);



    return <>

        <TasksHeader setShowAddModal={setShowAddModal} />

        <div className="space-y-4">
            {state.reverse().map((todo) => (
                <TaskCard todo={todo} />
            ))}
        </div>
    </>
}