import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TodoContext } from "../../contexts";
import { toast } from "react-toastify";
import { showSuccessToast, showErrorToast } from "../../utils/alertMessage";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import { Calendar, X } from "lucide-react";

export const EditAddModal = ({ setShowAddModal, handleAddTask }) => {
  const { state, dispatch } = useContext(TodoContext);
  const editData = state?.todos.filter((item) => item.id === state.delete)[0];
  console.log("edit DAta", editData);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: editData?.title ? editData.title : "",
      description: editData?.description ? editData.description : "",
      time: editData?.time ? editData.time : "",
    },
  });

  console.log(errors);
  const onSubmit = (data) => {
    try {
      if (editData) {
        dispatch({
          type: "UPDATE_TASK",
          payload: {
            data: {
              ...data,
              id: editData?.id,
              isCompleted: editData?.isCompleted,
            },
            dispatch: dispatch,
          },
        });
        showSuccessToast(toast, "Task updated successfully! 🎉");
        setShowAddModal(false);
        reset();
      } else {
        handleAddTask(data);
      }
      setShowAddModal(false);
    } catch {
      showErrorToast(toast, "An error occurred. Please try again.");
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotateX: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowAddModal(false)}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg p-6 border border-transparent dark:border-gray-800 shadow-2xl"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {editData ? "Edit Task" : "Add New Task"}
            </h2>
            <motion.button
              onClick={() => setShowAddModal(false)}
              className="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  {...register("title", { required: "Title is required" })}
                  type="text"
                  placeholder="Add a task title"
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.title
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                />
                {errors.title && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.title.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  placeholder="Add a task description"
                  rows="3"
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    errors.description
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                />
                {errors.description && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.description.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date
                </label>
                <div className="relative">
                  <input
                    {...register("time", { required: "Date is required" })}
                    type="date"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border transition-all duration-200 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer ${
                      errors.time
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                    onClick={(e) => e.target.showPicker?.()}
                  />
                </div>
                {errors.time && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.time.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="flex gap-3 pt-4"
              >
                <motion.button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {editData ? "Update Task" : "Add Task"}
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
