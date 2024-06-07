import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useScreen } from "../hooks/useScreen";
import Navbar from "../components/ui/Navbar";
import MobileNavbar from "../components/ui/MobileNavbar";
import AnimateEffect from "../components/AnimateEffect";

export default function RootLayout() {
  const { isDesktop } = useScreen();

  return (
    <>
      <AnimateEffect />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Navbar />
        <MobileNavbar />
        <section
          className={`container mx-auto ${
            isDesktop ? "my-10 px-32" : "my-5 px-4"
          }`}
        >
          <Outlet />
        </section>
      </motion.main>
    </>
  );
}
