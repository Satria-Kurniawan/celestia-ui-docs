import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useScreen } from "../../hooks/useScreen";
import { HamburgerMenu } from "celestia-ui";
import { MdArrowOutward } from "react-icons/md";
import SearchInput from "./SearchInput";
import Button from "./Button";
import FormFeedback from "../FormFeedback";
import FormSearch from "../FormSearch";

const menus = [
  { name: "Docs", path: "/docs", icon: null },
  { name: "Templates", path: "/templates", icon: <MdArrowOutward /> },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isDesktop, isMobile } = useScreen();
  const [active, setActive] = React.useState<boolean>(false);
  const [openFeedback, setOpenFeedback] = React.useState<boolean>(false);
  const [openSearch, setOpenSearch] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`z-50 py-3 sticky top-0 ${isMobile ? "border-b" : ""} ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <section
          className={`container mx-auto flex justify-between ${
            isDesktop ? "px-32" : "px-4"
          }`}
        >
          <div className="flex items-center gap-x-10">
            <Link to={"/"}>
              <h1 className="font-bold italic">CelestiaUI</h1>
            </Link>
            {isDesktop && (
              <ul className="flex gap-x-5">
                {menus.map(({ name, path, icon }, index) => {
                  const activeMenu = pathname.startsWith(path);

                  return (
                    <li
                      key={index}
                      className={`hover:text-main text-sm font-semibold duration-300 ${
                        activeMenu ? "text-gradient" : "text-label"
                      }`}
                    >
                      <Link
                        to={path}
                        target={icon ? "_blank" : "_self"}
                        className="flex items-center gap-x-1"
                      >
                        {name}
                        {icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          {isDesktop ? (
            <div className="flex items-center gap-x-3">
              <SearchInput onClick={() => setOpenSearch(true)} />
              <FormSearch open={openSearch} setOpen={setOpenSearch} />
              <div className="relative flex gap-x-2">
                <Button
                  id="feedbackButton"
                  text="Feedback"
                  variant="SECONDARY"
                  onClick={() => setOpenFeedback((open) => !open)}
                />
                {openFeedback && (
                  <FormFeedback onClose={() => setOpenFeedback(false)} />
                )}
                <Button
                  text="Install"
                  variant="MAIN"
                  onClick={() => navigate("/docs/getting-started/installation")}
                />
              </div>
            </div>
          ) : (
            <div>
              <HamburgerMenu
                variant="1"
                active={active}
                setActive={setActive}
              />
            </div>
          )}
        </section>
      </nav>

      {isMobile && active && (
        <motion.div
          initial={{
            bottom: "-50%",
          }}
          animate={{
            bottom: 0,
          }}
          transition={{ type: "spring", duration: 0.5 }}
          className="h-[80vh] rounded-t-2xl fixed bottom-0 left-0 right-0 bg-primary text-white"
        >
          <div className="p-10 flex justify-end">
            <ul className="flex flex-col gap-y-10">
              {menus.map(({ name, path, icon }, index) => {
                return (
                  <li
                    key={index}
                    className="text-2xl font-semibold hover:-translate-x-1 hover:font-bold duration-300 cursor-pointer"
                    onClick={() => {
                      navigate(path);
                      setActive(false);
                    }}
                  >
                    <div className="flex items-center gap-x-1 justify-end">
                      {name}
                      {icon}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}
