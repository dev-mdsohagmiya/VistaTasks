import { useContext, useState } from "react";
import { Header } from "../ui/Header";
import { StatsCard } from "./StatsCard";
import { SearchAndFilterSection } from "./SearchAndFilterSection";
import { EditAddModal } from "../ui/EditAddModal";
import { TasksSection } from "./TasksSection";
import { TodoContext } from "../../contexts";
import { alertMessage } from "../../utils/alertMessage";
import { toast } from "react-toastify";
import { todoModel } from "../../models/todoModel";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    const { state, dispatch } = useContext(TodoContext);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // Mock data matching the design
    const stats = {
        all: 5,
        active: 3,
        completed: 2,
    };


    const handleAddTask = (data) => {
        dispatch({ type: "ADD_TASK", payload: todoModel({ id: uuidv4(), description: data?.description, isCompleted: false, time: data?.time, title: data.title }) })
        alertMessage(toast, "data added success")
    }

    const handleDeleteTask = (id) => {
        window.alert(id)
        dispatch({ type: "DELETE_TASK", payload: id })
    }

    const handleUpdateTask = (id) => {
        dispatch({ type: "ADD_UPDATE_TASK_ID", payload: id })

    }
    const handleTaskCompletation = (id) => {
        dispatch({ type: "COMPLETE_TASK", payload: id })
    }
    const handleTaskSorting = (stats) => {
        dispatch({ type: "TASK_SHORTING", payload: stats })

    }
    const handleSearchTask = (value) => {
        dispatch({ type: "SEARCH_TASK", payload: value })

    }
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
            {/* Header */}
            <Header
                stats={stats}
                showUserMenu={showUserMenu}
                setShowUserMenu={setShowUserMenu}
            />

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                <StatsCard stats={stats} />
                {/* Search and Filter Bar */}
                <SearchAndFilterSection handleTaskSorting={handleTaskSorting} setSearchTerm={setShowAddModal} searchTerm={searchTerm} filter={filter} setFilter={setFilter} handleSearchTask={handleSearchTask} />

                {/* Tasks Section Header */}
                <TasksSection handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} setShowAddModal={setShowAddModal} mockTodos={""} handleTaskCompletation={handleTaskCompletation} />

            </div>

            {/* Add Task Modal */}
            {showAddModal && (
                <EditAddModal handleAddTask={handleAddTask} setShowAddModal={setShowAddModal} />
            )}
        </div>
    );
};

export default Todo;
