import { Search, X } from "lucide-react";
import { TodoContext } from "../../contexts";
import { useContext, useState } from "react";

export const SearchAndFilterSection = ({ setSearchTerm, searchTerm, filter, handleTaskSorting, handleSearchTask }) => {
    const { state } = useContext(TodoContext);

    const [search, setSearchValue] = useState("")

    const handleSearch = (value) => {
        setSearchValue(value.replace(/\s+/g, ' '))
        handleSearchTask(value.replace(/\s+/g, ' '))
    }

    return <>
        <div className="bg-white dark:bg-gray-900 rounded-[10px]  shadow-[0_4px_8px_rgba(0,0,0,0.05)] border border-gray-200 dark:border-gray-800 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="hidden lg:flex  items-center gap-3">
                    <img
                        src="/vite.svg"
                        alt="VistaTasks logo"
                        className="w-8 h-8 rounded"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-center">
                    <div className="relative flex-1 w-full sm:w-auto lg:w-[650px]">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500  focus:border-transparent placeholder:text-[12px]"
                        />
                        {search && (
                            <button
                                onClick={() => setSearchValue("")}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        )}
                    </div>

                    <div className="relative w-full sm:w-auto text-[16px]">
                        <select
                            value={state?.stats}
                            onChange={(e) => handleTaskSorting(e.target.value)}
                            className="appearance-none px-4 py-3 pr-10 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto text-[16px]"
                        >
                            <option>All</option>
                            <option>Active</option>
                            <option>Completed</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg
                                className="w-[18px] h-[18px] text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}