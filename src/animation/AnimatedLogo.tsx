import { AnimatePresence, motion } from "framer-motion";

export function AnimatedLogo() {
  const iconVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1 },
  };

  const transition = {
    duration: 2,
    ease: "easeInOut",
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-teal-500 stroke-teal-500 dark:fill-teal-200"
      >
        {/* Customize the pattern below */}
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="70"
          y1="50"
          x2="120"
          y2="100"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.circle
          cx="120"
          cy="100"
          r="20"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="120"
          y1="100"
          x2="180"
          y2="50"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.circle
          cx="180"
          cy="50"
          r="20"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="180"
          y1="50"
          x2="160"
          y2="150"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.circle
          cx="160"
          cy="150"
          r="20"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="160"
          y1="150"
          x2="110"
          y2="100"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.circle
          cx="110"
          cy="100"
          r="20"
          strokeWidth="4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        {/* End of customization */}
      </motion.svg>
    </AnimatePresence>
  );
}
