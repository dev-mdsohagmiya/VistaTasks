import { useContext, useMemo } from "react";
import { TaskCard } from "./TaskCard";
import { TasksHeader } from "./TasksSectionHeader";
import { NoTasksFound } from "../ui/NoTasksFound";
import { TodoContext } from "../../contexts";
import { motion, AnimatePresence } from "framer-motion";
import { insertTodoModel } from "../../services/firebase";

export const TasksSection = ({
  mockTodos,
  setShowAddModal,
  handleDeleteTask,
  handleUpdateTask,
  handleTaskCompletation,
}) => {
  const { state, dispatch } = useContext(TodoContext);

  insertTodoModel(state)

  // data shorting
  const currentTodos = useMemo(() => {
    let currentTodos = [...state?.todos];
    if (state?.searchParams) {
      const searchedData = state.todos.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(state?.searchParams.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(state?.searchParams.toLowerCase())
      );
      currentTodos = searchedData;
    }

    if (state.stats.toLowerCase() === "all") return currentTodos;
    if (state.stats.toLowerCase() === "completed")
      return currentTodos.filter((item) => item.isCompleted === true);
    if (state.stats.toLowerCase() === "active")
      return currentTodos.filter((item) => item.isCompleted !== true);
  }, [state]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Check if there are no tasks
  const hasNoTasks = !currentTodos || currentTodos.length === 0;

  return (
    <>
      <TasksHeader setShowAddModal={setShowAddModal} />

      {hasNoTasks ? (
        <NoTasksFound
          onAddTask={() => setShowAddModal(true)}
          message={
            state?.searchParams
              ? "No tasks found for your search"
              : state?.stats?.toLowerCase() === "completed"
                ? "No completed tasks yet"
                : state?.stats?.toLowerCase() === "active"
                  ? "No active tasks yet"
                  : "No tasks found"
          }
          description={
            state?.searchParams
              ? "Try adjusting your search terms or create a new task"
              : state?.stats?.toLowerCase() === "completed"
                ? "Complete some tasks to see them here"
                : state?.stats?.toLowerCase() === "active"
                  ? "All your tasks are completed! Great job!"
                  : "Get started by creating your first task"
          }
          showAddButton={!state?.searchParams}
        />
      ) : (
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {currentTodos.reverse().map((todo, index) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                layout
              >
                <TaskCard
                  setShowAddModal={setShowAddModal}
                  handleDeleteTask={handleDeleteTask}
                  todo={todo}
                  handleUpdateTask={handleUpdateTask}
                  handleTaskCompletation={handleTaskCompletation}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};
