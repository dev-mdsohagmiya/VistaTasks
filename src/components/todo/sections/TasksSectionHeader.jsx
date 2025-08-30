import { Plus } from "lucide-react";

export const TasksHeader = ({ setShowAddModal }) => {
    return <>

        <div className="flex items-center justify-between mb-6">
            <h2 className="text-[25px] font-bold text-gray-900 dark:text-gray-100">
                Tasks
            </h2>
            <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 h-[50px] bg-[#15803D] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-[15px] shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
            >
                <Plus className="w-4 h-4 md:w-5 md:h-5" />
                Add Task
            </button>
        </div>

    </>
}