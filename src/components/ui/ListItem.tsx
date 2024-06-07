import { FiMinus } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ListItem({
  text,
  textLink,
  url,
}: {
  text: string;
  textLink?: string;
  url?: string;
}) {
  return (
    <div className="flex items-center gap-x-3">
      <span>
        <FiMinus className="text-label" />
      </span>
      <div className="flex items-center gap-x-1">
        <Link
          to={url || "#"}
          target="_blank"
          className="text-link flex items-center gap-x-1 hover:brightness-50 duration-300"
        >
          <span>{textLink}</span> <MdArrowOutward />
        </Link>
        <span>{text}</span>
      </div>
    </div>
  );
}
