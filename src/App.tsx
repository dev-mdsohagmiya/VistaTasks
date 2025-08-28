import { useState } from "react";
import { Plus, Search, Calendar, X } from "lucide-react";
import { TaskCard } from "./components/todo/TaskCard";
import { Header } from "./components/ui/Header";
import { StatsCard } from "./components/todo/StatsCard";
import { SearchAndFilterSection } from "./components/todo/SearchAndFilterSection";
import { EditAddModal } from "./components/ui/EditAddModal";
import { TasksSection } from "./components/todo/TasksSection";

const App = () => {
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

  const mockTodos = [
    {
      id: 1,
      title: "Title Name",
      description:
        "Lorem Ipsum is simply dummy text of th e printing and typesetting industry. Lorem Ipsumfff fffffff fffffffffffff fffffffffffffff fffffffff fffff...",
      date: "Mon, 25 Aug 2025",
      completed: false,
    },
  ];

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
        <SearchAndFilterSection setSearchTerm={setShowAddModal} searchTerm={searchTerm} filter={filter} setFilter={setFilter} />

        {/* Tasks Section Header */}
        <TasksSection setShowAddModal={setShowAddModal} mockTodos={mockTodos} />

      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <EditAddModal setShowAddModal={setShowAddModal} />
      )}
    </div>
  );
};

export default App;
