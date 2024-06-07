import { Link, useLocation } from "react-router-dom";
import { useScreen } from "../../hooks/useScreen";
import { menus } from "../../constants";

export default function Sidebar() {
  const { pathname } = useLocation();
  const { isDesktop } = useScreen();

  return (
    <aside
      className={`relative h-[80vh] w-[16rem] ${isDesktop ? "" : "hidden"}`}
    >
      <ul className="fixed flex flex-col gap-y-5 h-[80vh] w-[16rem] overflow-y-scroll">
        {menus.map((menu, index) => {
          return (
            <li key={index}>
              <Link to={menu.path} className="font-semibold">
                {menu.title}
              </Link>
              <div className="mt-3 relative flex flex-col gap-y-3">
                {menu.children.map((submenu) => {
                  const active = submenu.path == pathname;
                  return (
                    <div key={submenu.name} className="relative">
                      {active && (
                        <div className="w-[1px] h-full bg-main absolute left-0" />
                      )}
                      <Link
                        to={submenu.path}
                        className={`ml-5 hover:text-main duration-300 ${
                          active ? "text-main" : "text-label"
                        }`}
                      >
                        {submenu.name}
                      </Link>
                    </div>
                  );
                })}
                <div className="w-[1px] h-full bg-black/10 absolute left-0" />
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
