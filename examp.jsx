import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Calendar, Edit3, Trash2, User, X } from 'lucide-react';

const TodoApp = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data matching the design
    const stats = {
        all: 5,
        active: 3,
        completed: 2
    };

    const mockTodos = [
        {
            id: 1,
            title: 'Title Name',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...',
            date: 'Mon, 25 Aug 2025',
            completed: false
        },
        {
            id: 2,
            title: 'Title Name',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum...',
            date: 'Mon, 25 Aug 2025',
            completed: true
        },
        {
            id: 3,
            title: 'Title Name',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...',
            date: 'Mon, 25 Aug 2025',
            completed: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header with Stats */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white shadow-sm"
            >
                <div className="max-w-6xl mx-auto px-6 py-6">
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-red-400 via-purple-500 to-blue-500 rounded flex items-center justify-center">
                                <div className="text-white text-sm font-bold">V</div>
                            </div>
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                <User className="w-5 h-5" />
                            </button>

                            <AnimatePresence>
                                {showUserMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
                                    >
                                        <button className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors">
                                            Google for Backup
                                        </button>
                                        <button className="w-full  px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors">
                                            Logout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="grid grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-lg font-medium text-gray-900 mb-1">All : {stats.all}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-medium text-gray-900 mb-1">Active : {stats.active}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-medium text-gray-900 mb-1">Completed : {stats.completed}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Search and Filter Bar */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
                >
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-red-400 via-purple-500 to-blue-500 rounded flex items-center justify-center">
                                <div className="text-white text-sm font-bold">V</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-center">
                            <div className="relative flex-1 lg:w-80">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search tasks..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-10 py-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                    >
                                        <X className="w-5 h-5 text-gray-400" />
                                    </button>
                                )}
                            </div>

                            <div className="relative">
                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    className="appearance-none px-4 py-3 pr-10 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>Completed</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tasks Section Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Tasks</h2>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Add Task
                    </motion.button>
                </div>

                {/* Todo List */}
                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {mockTodos.map((todo, index) => (
                            <motion.div
                                key={todo.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${todo.completed
                                            ? 'bg-green-500 border-green-500'
                                            : 'border-gray-300 hover:border-green-500'
                                            }`}
                                    >
                                        {todo.completed && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </motion.div>
                                        )}
                                    </motion.button>

                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className={`font-semibold text-lg mb-2 ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                                                    }`}>
                                                    {todo.title}
                                                </h3>
                                                <p className={`text-sm mb-4 leading-relaxed ${todo.completed ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>
                                                    {todo.description}
                                                    {todo.description.length > 100 && (
                                                        <button className="text-blue-500 hover:text-blue-600 ml-1">
                                                            see more
                                                        </button>
                                                    )}
                                                </p>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <Calendar className="w-4 h-4" />
                                                    {todo.date}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 ml-4">
                                                {!todo.completed && (
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                                                    >
                                                        <Edit3 className="w-4 h-4" />
                                                    </motion.button>
                                                )}
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Add Task Modal */}
            <AnimatePresence>
                {showAddModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowAddModal(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-md bg-white rounded-lg p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-gray-900">Task Details</h2>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Add a task title"
                                        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Select date"
                                            className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder="Add any description to you task"
                                        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Close
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    Add Task
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TodoApp;