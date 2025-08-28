import { Plus } from "lucide-react";

export const TasksHeader = ({ setShowAddModal }: any) => {
    return <>

        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Tasks
            </h2>
            <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
                <Plus className="w-5 h-5" />
                Add Task
            </button>
        </div>

    </>
}