import { User } from "lucide-react";

export const Header = ({ stats, showUserMenu, setShowUserMenu }: any) => {
  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="VistaTasks logo"
              className="w-9 h-9 rounded-md shadow-sm"
            />
            <div>
              <p className="text-base font-semibold text-gray-900 leading-none">
                VistaTasks
              </p>
              <p className="text-xs text-gray-500">
                All: {stats.all} • Active: {stats.active} • Completed:{" "}
                {stats.completed}
              </p>
            </div>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="p-2 rounded-full bg-gray-100  text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <User className="w-5 h-5" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                  <button className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors">
                    Google for Backup
                  </button>
                  <button className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
