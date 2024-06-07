import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";

export default function DocsLayout() {
  return (
    <div className="flex gap-x-10">
      <Sidebar />
      <section className="flex-1">
        <Outlet />
      </section>
    </div>
  );
}
