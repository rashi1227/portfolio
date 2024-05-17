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
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="10"
          strokeWidth="10" // Increased stroke width for bolder appearance
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="157"
          y2="157"
          strokeWidth="10" // Increased stroke width for bolder appearance
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="190"
          y2="100"
          strokeWidth="10" // Increased stroke width for bolder appearance
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="157"
          y2="43"
          strokeWidth="10" // Increased stroke width for bolder appearance
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="190"
          strokeWidth="10" // Increased stroke width for bolder appearance
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="43"
          y2="157"
          strokeWidth="10" // Increased stroke width for bolder appearance
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="10"
          y2="100"
          strokeWidth="10" // Increased stroke width for bolder appearance
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="43"
          y2="43"
          strokeWidth="10" // Increased stroke width for bolder appearance
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
