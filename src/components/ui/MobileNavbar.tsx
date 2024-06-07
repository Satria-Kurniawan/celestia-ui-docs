import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useScreen } from "../../hooks/useScreen";
import { GoChevronRight } from "react-icons/go";
import { menus } from "../../constants";

export default function MobileNavbar() {
  const { isMobile } = useScreen();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <nav
      className={`py-3 px-3 sticky top-[3.25rem] border-b ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div
        className="flex items-center gap-x-3 cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      >
        <GoChevronRight
          className={`${open ? "rotate-90" : "rotate-0"} duration-300`}
        />
        <span className="font-semibold">Menu</span>
      </div>
      {open && (
        <motion.section className="z-10 p-4 absolute top-12 left-0 right-0 bg-white border-b">
          <ul className="flex flex-col gap-y-5 overflow-auto">
            {menus.map((menu, index) => {
              return (
                <li key={index}>
                  <h1
                    className="font-semibold cursor-pointer"
                    onClick={() => {
                      navigate(menu.path);
                      setOpen(false);
                    }}
                  >
                    {menu.title}
                  </h1>
                  <div className="mt-3 relative flex flex-col gap-y-3">
                    {menu.children.map((submenu) => {
                      const active = submenu.path == pathname;
                      return (
                        <div key={submenu.name} className="relative">
                          {active && (
                            <div className="w-[1px] h-full bg-main absolute left-0" />
                          )}
                          <h2
                            className="ml-5 text-label cursor-pointer"
                            onClick={() => {
                              navigate(submenu.path);
                              setOpen(false);
                            }}
                          >
                            {submenu.name}
                          </h2>
                        </div>
                      );
                    })}
                    <div className="w-[1px] h-full bg-black/10 absolute left-0" />
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.section>
      )}
    </nav>
  );
}
