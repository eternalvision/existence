import { motion } from "framer-motion";
import { liVariants } from "./data";
import { isClassName } from "./functions";

const ClassName = "Black";

export const Letter = ({ letter, line, index }) => (
  <motion.li
    className={isClassName(line, index, ClassName) || undefined}
    variants={liVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.25, ease: "easeInOut" }}
    key={line}>
    {line === index && <span> {letter}</span>}
  </motion.li>
);
