import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScreen } from "../hooks/useScreen";

import { MdOutlineContentCopy } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";

import { BackgroundGridSmall } from "../components/ui/BackgroundGridSmall";
import { BackgroundGradientAnimation } from "../components/ui/BackgroundGradientAnimation";

import Button from "../components/ui/Button";
import Navbar from "../components/ui/Navbar";

export default function LandingPage() {
  const codeRef = React.useRef(null);
  const [isCoppied, setIsCoppied] = React.useState<boolean>(false);
  const { isDesktop } = useScreen();

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard
        .writeText("npm install --save celestia-ui")
        .then(() => {
          setIsCoppied(true);
          setTimeout(() => {
            setIsCoppied(false);
          }, 1000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <BackgroundGradientAnimation>
        <Navbar />
        <BackgroundGridSmall>
          <div className="absolute z-10 inset-0 flex items-center justify-center pointer-events-none">
            <section
              className={`container mx-auto  flex justify-center items-center ${
                isDesktop ? "px-32" : "px-4"
              }`}
            >
              <div>
                <div>
                  <br />
                  <h1
                    className={`font-extrabold text-center ${
                      isDesktop ? "max-w-[45vw] text-5xl" : "text-4xl"
                    }`}
                  >
                    Create Beautiful Interfaces Effortlessly with{" "}
                    <span className="text-gradient">Celestia-UI</span> : A
                    React.js UI Library
                  </h1>
                  <br />
                  <p className="text-center">
                    Streamline your development process with our extensive
                    library of top-quality, reusable UI elements.
                  </p>
                </div>
                <br />
                <br />
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to={"/docs"}>
                    <Button
                      text="Get Started"
                      variant="MAIN"
                      className="pointer-events-auto"
                    />
                  </Link>
                  <Link to={"/docs/components"}>
                    <Button
                      text="Components"
                      variant="SECONDARY"
                      className="pointer-events-auto"
                    />
                  </Link>
                </div>
                <br />
                <br />
                <div className="flex justify-center items-center gap-x-3">
                  <p ref={codeRef} className="text-label text-sm">
                    ~ npm install --save celestia-ui
                  </p>
                  {isCoppied ? (
                    <button className="p-2">
                      <BsCheck2 />
                    </button>
                  ) : (
                    <button
                      onClick={copyToClipboard}
                      className="p-2 rounded-xl hover:bg-black/5 duration-300 pointer-events-auto"
                    >
                      <MdOutlineContentCopy />
                    </button>
                  )}
                </div>
              </div>
            </section>
          </div>
        </BackgroundGridSmall>
      </BackgroundGradientAnimation>
    </motion.main>
  );
}
