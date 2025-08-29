import { User, Sun, Moon, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, signInWithGoogle } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useRef } from "react";

export const Header = ({ stats, showUserMenu, setShowUserMenu }) => {
  const [user, loading, error] = useAuthState(auth);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu, setShowUserMenu]);

  console.log("user user", user?.photoURL);

  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    console.log(user);
    navigate("/");
  };

  return (
    <motion.div
      className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200 shadow-[0_4px_8px_rgba(0,0,0,0.02)]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <motion.img
              src="/logo.png"
              alt="VistaTasks logo"
              className="w-9 h-9 rounded-md shadow-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <motion.p
                className="text-base font-semibold text-gray-900 leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                VistaTasks
              </motion.p>
              <motion.p
                className="text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                All: {stats.all} • Active: {stats.active} • Completed:{" "}
                {stats.completed}
              </motion.p>
            </div>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative" ref={menuRef}>
              <motion.button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="p-1.5 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-200 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {user && user.photoURL ? (
                  <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                    <img
                      className="w-full h-full object-cover"
                      alt="User profile"
                      src={user.photoURL}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-sm">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.button>
              <AnimatePresence mode="wait">
                {showUserMenu && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <motion.button
                      onClick={() => handleSocialLogin()}
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="leading-none">Google for Backup</span>
                    </motion.button>
                    <motion.button
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                      Light Mode
                    </motion.button>
                    <motion.button
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
