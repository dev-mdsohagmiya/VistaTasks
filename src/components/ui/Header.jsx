import { User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, signInWithGoogle } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Header = ({ stats, showUserMenu, setShowUserMenu }) => {
  const [user, loading, error] = useAuthState(auth);

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
            <div className="relative">
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
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Google for Backup
                    </motion.button>
                    <motion.button
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
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
