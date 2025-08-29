import { Calendar, Edit3, Trash2 } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export const TaskCard = ({
    todo,
    handleDeleteTask,
    setShowAddModal,
    handleUpdateTask,
    handleTaskCompletation,
}) => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
            rotateX: -5,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            rotateX: 5,
            transition: {
                duration: 0.3,
                ease: "easeIn",
            },
        },
        hover: {
            y: -5,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: {
                duration: 0.2,
                ease: "easeOut",
            },
        },
        tap: {
            scale: 0.98,
            transition: {
                duration: 0.1,
            },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 },
        },
        tap: {
            scale: 0.9,
            transition: { duration: 0.1 },
        },
    };

    const checkboxVariants = {
        unchecked: { scale: 1 },
        checked: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={todo.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                whileTap="tap"
                className="bg-white dark:bg-gray-900 rounded-[10px] border border-gray-200 dark:border-gray-800 p-3 sm:p-4 md:p-6 shadow-[0_4px_8px_rgba(0,0,0,0.05)] cursor-pointer"
            >
                {/* Mobile Layout */}
                <div className="block sm:hidden">
                    <div className="flex items-start gap-3 mb-3">
                        <motion.button
                            onClick={() => handleTaskCompletation(todo.id)}
                            variants={checkboxVariants}
                            animate={todo.isCompleted ? "checked" : "unchecked"}
                            className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${todo.isCompleted
                                ? "bg-green-500 border-green-500"
                                : "border-gray-300 hover:border-green-500"
                                }`}
                            type="button"
                        >
                            {todo.isCompleted && (
                                <motion.svg
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                    className="w-3 h-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </motion.svg>
                            )}
                        </motion.button>

                        <div className="flex-1 min-w-0">
                            <motion.h3
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className={`font-semibold text-base inline-block mb-2 ${todo.completed
                                    ? "text-gray-500 line-through"
                                    : "text-gray-900 dark:text-gray-100"
                                    }`}
                            >
                                {todo.title}
                            </motion.h3>

                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <p
                                    className={`text-xs mb-3 leading-relaxed ${todo.completed
                                        ? "text-gray-400"
                                        : "text-gray-600 dark:text-gray-300"
                                        }`}
                                >
                                    {todo.description}
                                    {todo.description.length > 80 && (
                                        <button className="text-blue-500 hover:text-blue-600 ml-1 text-xs">
                                            see more
                                        </button>
                                    )}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="flex items-center gap-2 text-sm text-gray-500 mb-3"
                            >
                                <Calendar className="w-4 h-4" />
                                {todo.date}
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="flex items-center justify-end gap-2">
                        {!todo.completed && (
                            <motion.button
                                onClick={() => {
                                    setShowAddModal(true);
                                    handleUpdateTask(todo.id);
                                }}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                type="button"
                            >
                                <Edit3 className="w-5 h-5" />
                            </motion.button>
                        )}
                        <motion.button
                            onClick={() => handleDeleteTask(todo?.id, todo?.title)}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            type="button"
                        >
                            <Trash2 className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Desktop Layout - Keep exactly the same */}
                <div className="hidden sm:flex items-center gap-5">
                    <div className="flex-6 w-full">
                        <div className="flex gap-2 w-full">
                            <div>
                                <motion.button
                                    onClick={() => handleTaskCompletation(todo.id)}
                                    variants={checkboxVariants}
                                    animate={todo.isCompleted ? "checked" : "unchecked"}
                                    className={`mt-1 w-5 h-5 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-colors ${todo.isCompleted
                                        ? "bg-green-500 border-green-500"
                                        : "border-gray-300 hover:border-green-500"
                                        }`}
                                    type="button"
                                >
                                    {todo.isCompleted && (
                                        <motion.svg
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.2, delay: 0.1 }}
                                            className="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </motion.svg>
                                    )}
                                </motion.button>
                            </div>

                            <div>
                                <motion.h3
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className={`font-semibold text-base sm:text-lg inline-block mb-1 sm:mb-2 ${todo.completed
                                        ? "text-gray-500 line-through"
                                        : "text-gray-900 dark:text-gray-100"
                                        }`}
                                >
                                    {todo.title}
                                </motion.h3>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <p
                                className={`text-[12px] sm:text-[12px] mb-3 sm:mb-4 leading-relaxed  ${todo.completed
                                    ? "text-gray-400"
                                    : "text-gray-600 dark:text-gray-300"
                                    }`}
                            >
                                {todo.description}
                                {todo.description.length > 100 && (
                                    <button className="text-blue-500 hover:text-blue-600 ml-1 text-[12px] sm:text-[12px]">
                                        see more
                                    </button>
                                )}
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex-3">
                        <div className="w-full flex justify-between">
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="flex items-center gap-2 text-[18px] sm:text-[18px] text-gray-500"
                            >
                                <Calendar className="w-[20px] h-[19px]" />
                                {todo.date}
                            </motion.div>
                            <div className="flex items-center gap-2 ml-2 sm:ml-4">
                                {!todo.completed && (
                                    <motion.button
                                        onClick={() => {
                                            setShowAddModal(true);
                                            handleUpdateTask(todo.id);
                                        }}
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                        type="button"
                                    >
                                        <Edit3 className="w-[30px] h-[30px]" />
                                    </motion.button>
                                )}
                                <motion.button
                                    onClick={() => handleDeleteTask(todo?.id, todo?.title)}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                    type="button"
                                >
                                    <Trash2 className="w-[26px] h-[30px]" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
