import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { createContext, useContext, useMemo, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router";

const SidebarContext = createContext({ expanded: true });

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  const value = useMemo(() => ({ expanded }), [expanded]);

  return (
    <aside
      className={`h-screen transition-all ${expanded ? "w-44" : "w-16"} bg-white shadow-sm`}
    >
      <nav className="h-full flex flex-col w-full">
        <div className="p-4 items-center ">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 rounded-lg bg-amber-300 hover:bg-amber-200 "
          >
            {expanded ? <ArrowRightFromLine /> : <ArrowLeftFromLine />}
          </button>
        </div>

        <SidebarContext.Provider value={value}>
          <ul className="px-2 mt-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, to }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <Link to={to}>
      <li className="flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-amber-300  ">
        {icon}
        <span
          className={clsx(
            "transition-all duration-300 text-base",
            expanded
              ? "w-52 ml-3 opacity-100"
              : "w-0 opacity-0 overflow-hidden",
          )}
        >
          {text}
        </span>

        {!expanded && (
          <div
            className={clsx(
              "absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm",
              "invisible opacity-20 -translate-x-3 transition-all",
              "group-hover:visible group-hover:opacity-100 group-hover:translate-x-0",
            )}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
