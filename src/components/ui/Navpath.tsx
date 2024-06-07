import { TbChevronRight } from "react-icons/tb";
import { Link } from "react-router-dom";

type MenuType = {
  name: string;
  path: string;
};

export default function Navpath({ menus }: { menus: MenuType[] }) {
  return (
    <section className="flex items-center gap-x-2">
      {menus.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-x-2">
            <Link to={item.path}>
              <span className={index == 0 ? "text-label" : ""}>
                {item.name}
              </span>
            </Link>
            {index != menus.length - 1 && <TbChevronRight />}
          </div>
        );
      })}
    </section>
  );
}
