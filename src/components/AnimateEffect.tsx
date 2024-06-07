import * as React from "react";
import { motion } from "framer-motion";
import { useScreen } from "../hooks/useScreen";

export default function AnimateEffect() {
  const { isMobile } = useScreen();
  const [animateFinish, setAnimateFinish] = React.useState<boolean>(false);

  if (isMobile) return null;

  return (
    <>
      {/* <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-gradient-to-r from-indigo-300 via-purple-400 to-rose-300 z-[99]"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-gradient-to-r from-rose-300 to-white dark:to-black z-[98]"
      /> */}

      <motion.div
        initial={{
          y: "-25%",
          scale: 0,
        }}
        animate={{
          scale: 1.5,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setAnimateFinish(true);
        }}
        className={`fixed w-full h-[100vw] rounded-full ${
          animateFinish
            ? "-z-10 bg-transparent pointer-events-none"
            : "z-[99] bg-gradient-to-r from-violet-400 to-purple-300 opacity-30"
        }`}
      />
    </>
  );
}
