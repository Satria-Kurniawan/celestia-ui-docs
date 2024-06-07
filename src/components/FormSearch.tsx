import * as React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BsTextLeft } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi2";
import TextInput from "./ui/TextInput";
import Keyboard from "./ui/Keyboard";
import { menus } from "../constants";

export default function FormSearch({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [query, setQuery] = React.useState<string>("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setOpen((open) => !open);
      } else if (event.key === "Esc" || event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpen]);

  if (!open) return null;

  const filteredMenus =
    query.length > 0
      ? menus.flatMap((menu) => {
          return menu.children
            .filter((submenu) => {
              return submenu.name.toLowerCase().includes(query.toLowerCase());
            })
            .map((filteredSubmenu) => ({
              ...menu,
              children: [filteredSubmenu],
            }));
        })
      : menus;

  return createPortal(
    <>
      <div
        className="z-[99] fixed inset-0 bg-black/10"
        onClick={() => setOpen(false)}
      />
      <motion.div
        initial={{
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          scale: 0,
        }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        className="z-[99] fixed"
      >
        <form
          onSubmit={(event) => event.preventDefault()}
          className="p-5 min-h-[60vh] max-h-[70vw] overflow-auto w-[32rem] rounded-lg bg-white"
        >
          <div className="flex items-center gap-x-5">
            <TextInput
              autoFocus
              placeholder="Search..."
              className="w-full"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Keyboard text="Esc" />
          </div>
          <br />
          <div className="flex flex-col gap-y-5">
            {filteredMenus.map((menu, index) => {
              return (
                <div key={index} className="relative">
                  <div className="flex items-center gap-x-3">
                    <HiOutlineDocumentText className="text-label" />
                    <h1>{menu.title}</h1>
                  </div>
                  <div className="mt-3 relative flex flex-col gap-y-1">
                    <div className="absolute left-2 h-full w-[1px] bg-black/10" />
                    {menu.children.map((submenu) => {
                      return (
                        <div
                          key={submenu.name}
                          className="ml-5 py-1 px-2 rounded-lg flex items-center gap-x-3 cursor-pointer hover:bg-black/5"
                          onClick={() => {
                            navigate(submenu.path);
                            setOpen(false);
                            setQuery("");
                          }}
                        >
                          <BsTextLeft className="text-label" />
                          <h2>{submenu.name}</h2>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </form>
      </motion.div>
    </>,
    document.body
  );
}
