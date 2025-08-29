import { Calendar, Edit3, Trash2 } from "lucide-react";


export const TaskCard = ({ todo, handleDeleteTask, setShowAddModal, handleUpdateTask, handleTaskCompletation }) => {
    return (
        <div
            key={todo.id}
            className="bg-white dark:bg-gray-900 rounded-[10px]  border border-gray-200 dark:border-gray-800 p-4 sm:p-6  shadow-[0_4px_8px_rgba(0,0,0,0.25)]  "
        >
            <div className="flex items-center gap-5 ">
                <div className="flex-6 w-full">
                    <div className="flex gap-2 w-full">
                        <div>
                            <button
                                onClick={() => handleTaskCompletation(todo.id)}

                                className={`mt-1 w-5 h-5 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-colors ${todo.isCompleted
                                    ? "bg-green-500 border-green-500"
                                    : "border-gray-300 hover:border-green-500"
                                    }`}
                            >
                                {todo.isCompleted && (
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div>
                            <h3
                                className={`font-semibold text-base sm:text-lg inline-block mb-1 sm:mb-2 ${todo.completed
                                    ? "text-gray-500 line-through"
                                    : "text-gray-900 dark:text-gray-100"
                                    }`}
                            >
                                {todo.title}
                            </h3>
                        </div>
                    </div>
                    <div className="">
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
                    </div>
                </div>
                <div className=" flex-3">
                    <div className=" w-full flex justify-between ">
                        <div className="flex items-center gap-2 text-[18px] sm:text-[18px] text-gray-500">
                            <Calendar className="w-[20px] h-[19px]" />
                            {todo.date}
                        </div>
                        <div className="flex items-center gap-2 ml-2 sm:ml-4">
                            {!todo.completed && (
                                <button className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                    <Edit3 onClick={() => {
                                        setShowAddModal(true)
                                        handleUpdateTask(todo.id)
                                    }} className="w-[30px]  h-[30px]" />
                                </button>
                            )}
                            <button className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 onClick={() => handleDeleteTask(todo?.id)} className="w-[26px] h-[30px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
