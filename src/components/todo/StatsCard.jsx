import { motion } from "framer-motion";

export const StatsCard = ({ stats }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-white shadow-[0_4px_8px_rgba(0,0,0,0.0.5)] dark:bg-gray-900 rounded-[10px] border border-gray-200 dark:border-gray-800 py-3 mb-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -2,
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-[2px] md:gap-2 sm:gap-8 text-[15px] sm:text-[16px] font-semibold text-gray-900 dark:text-gray-100">
        <motion.div
          className="sm:text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="md:mb-1">
            <span className="mr-1 text-gray-600 dark:text-gray-400">All:</span>
            <motion.span
              className="text-blue-600 dark:text-blue-400"
              variants={numberVariants}
            >
              {stats.all}
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          className="sm:text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="md:mb-1">
            <span className="mr-1 text-gray-600 dark:text-gray-400">
              Active:
            </span>
            <motion.span
              className="text-orange-600 dark:text-orange-400"
              variants={numberVariants}
            >
              {stats.active}
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          className="sm:text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="md:mb-1">
            <span className="mr-1 text-gray-600 dark:text-gray-400">
              Completed:
            </span>
            <motion.span
              className="text-green-600 dark:text-green-400"
              variants={numberVariants}
            >
              {stats.completed}
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
