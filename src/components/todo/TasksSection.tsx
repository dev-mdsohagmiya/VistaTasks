import { TaskCard } from "./TaskCard"
import { TasksHeader } from "./TasksSectionHeader"

export const TasksSection = ({ mockTodos, setShowAddModal }: any) => {
    return <>

        <TasksHeader setShowAddModal={setShowAddModal} />

        <div className="space-y-4">
            {mockTodos.map((todo: any) => (
                <TaskCard todo={todo} />
            ))}
        </div>
    </>
}