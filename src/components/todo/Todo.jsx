import { useContext, useEffect, useState } from "react";
import { Header } from "../ui/Header";
import { StatsCard } from "./StatsCard";
import { SearchAndFilterSection } from "./SearchAndFilterSection";
import { EditAddModal } from "../ui/EditAddModal";
import { TasksSection } from "./TasksSection";
import { TodoContext } from "../../contexts";
import { showSuccessToast, showErrorToast } from "../../utils/alertMessage";
import { toast } from "react-toastify";
import { todoModel } from "../../models/todoModel";
import { v4 as uuidv4 } from "uuid";
import { DeleteConfirmModal } from "../ui/DeleteConfirmModal";
import { formatDate } from "../../utils/formatDate";
import { auth, getTodoFirebase } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Todo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [user, loading, error] = useAuthState(auth);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [deleteTaskTitle, setDeleteTaskTitle] = useState("");

  // Mock data matching the design
  const stats = {
    all: 5,
    active: 3,
    completed: 2,
  };

  const handleAddTask = (data) => {
    dispatch({
      type: "ADD_TASK",
      payload: todoModel({
        id: uuidv4(),
        description: data?.description,
        isCompleted: false,
        time: formatDate(data?.time),
        title: data.title,
      }),
    });
    showSuccessToast(toast, "data added success");
  };

  const handleDeleteTask = (id) => {
    try {
      dispatch({ type: "DELETE_TASK", payload: id });
      showSuccessToast(toast, "Task deleted successfully! 🗑️");
      // Reset delete modal state
      setShowDeleteModal(false);
      setDeleteTaskId(null);
      setDeleteTaskTitle("");
    } catch {
      showErrorToast(toast, "Failed to delete task. Please try again.");
    }
  };

  const handleUpdateTask = (id) => {
    dispatch({ type: "ADD_UPDATE_TASK_ID", payload: id });
  };
  const handleTaskCompletation = (id) => {
    console.log("handleTaskCompletation called with id:", id);
    try {
      dispatch({ type: "COMPLETE_TASK", payload: id });
      console.log("Task completion dispatched successfully");
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };
  const handleTaskSorting = (stats) => {
    dispatch({ type: "TASK_SHORTING", payload: stats });
  };
  const handleSearchTask = (value) => {
    dispatch({ type: "SEARCH_TASK", payload: value });
  };
  const openDeleteModal = (id, title) => {
    setDeleteTaskId(id);
    setDeleteTaskTitle(title);
    setShowDeleteModal(true);
  };






  // fetch data

  useEffect(() => {

    const main = () => {
      if (user) {
        getTodoFirebase({ dispatch })
        console.log("user found")
      }
    }
    main()

  }, [user, loading, error])

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
        <SearchAndFilterSection
          handleTaskSorting={handleTaskSorting}
          setSearchTerm={setShowAddModal}
          searchTerm={searchTerm}
          filter={filter}
          setFilter={setFilter}
          handleSearchTask={handleSearchTask}
        />

        {/* Tasks Section Header */}
        <TasksSection
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={openDeleteModal}
          setShowAddModal={setShowAddModal}
          mockTodos={""}
          handleTaskCompletation={handleTaskCompletation}
        />
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <EditAddModal
          handleAddTask={handleAddTask}
          setShowAddModal={setShowAddModal}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteConfirmModal
          isOpen={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false);
            setDeleteTaskId(null);
            setDeleteTaskTitle("");
          }}
          onConfirm={() => handleDeleteTask(deleteTaskId)}
          taskTitle={deleteTaskTitle}
        />
      )}
    </div>
  );
};

export default Todo;
