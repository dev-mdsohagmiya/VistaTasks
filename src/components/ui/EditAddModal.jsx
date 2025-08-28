import { useForm } from "react-hook-form"

import { Calendar, X } from "lucide-react";

export const EditAddModal = ({ setShowAddModal, handleAddTask }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    console.log(errors)
    const onSubmit = (data) => {
        handleAddTask(data)
        setShowAddModal(false)
    }

    return <>

        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAddModal(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg p-6 border border-transparent dark:border-gray-800"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Task Details
                    </h2>
                    <button
                        onClick={() => setShowAddModal(false)}
                        className="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 ">
                                Title
                            </label>
                            <input
                                {...register("title", { required: true })}
                                type="text"
                                placeholder="Add a task title"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date
                            </label>
                            <div className="relative">
                                <input
                                    {...register("date", { required: true })}
                                    type="text"
                                    placeholder="Select date"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                {...register("description", { required: true })}
                                rows={4}
                                placeholder="Add any description to you task"
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                        </div>

                    </div>

                    <div className="flex gap-3 mt-6">
                        <button

                            onClick={() => setShowAddModal(false)}
                            className="flex-1 py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            Close
                        </button>
                        <button type="submit" className="flex-1 py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </>
}