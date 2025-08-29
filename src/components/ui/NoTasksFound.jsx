import { motion } from "framer-motion";
import { ClipboardList, Plus } from "lucide-react";

export const NoTasksFound = ({
  onAddTask,
  message = "No tasks found",
  description = "Get started by creating your first task",
  showAddButton = true,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Icon */}
      <motion.div
        className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6"
        variants={iconVariants}
      >
        <ClipboardList className="w-12 h-12 text-gray-400 dark:text-gray-500" />
      </motion.div>

      {/* Message */}
      <motion.h3
        className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3"
        variants={itemVariants}
      >
        {message}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md leading-relaxed"
        variants={itemVariants}
      >
        {description}
      </motion.p>

      {/* Add Task Button */}
      {showAddButton && (
        <motion.button
          onClick={onAddTask}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="w-5 h-5" />
          Add Your First Task
        </motion.button>
      )}

      {/* Decorative Elements */}
      <motion.div className="mt-12 flex gap-2" variants={itemVariants}>
        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};
