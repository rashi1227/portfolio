import { AnimatePresence, Variants, motion } from "framer-motion";

export function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#14b8a6",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-teal-500 stroke-teal-500 dark:fill-teal-200"
      >
        <motion.path
          d="M300  100L200 200L150 100L100 100L100 400C80 400 60 380 60 350L60 150C60 120 80 100 100 100L150 200L200 100Z"
          strokeWidth="15"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
