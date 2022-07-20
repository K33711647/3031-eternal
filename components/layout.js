import Meta from "../components/meta";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0 },
};

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <motion.main
        className="h-full"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </>
  );
}
