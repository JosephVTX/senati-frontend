import { useThemeStore } from "@/store/theme-store";
import { cn } from "tr-cn";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { Link } from "react-router";
import { sidebarData } from "@/data/sidebar-data";

export const Sidebar = () => {
  const { toggleSidebar, semidark } = useThemeStore();
  const [currentMenu, setCurrentMenu] = useState("");

  return (
    <div className={semidark ? "dark" : ""}>
      <nav className="sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300">
        <div className="h-full bg-white dark:bg-black">
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              to="/dashboard"
              className="main-logo flex shrink-0 items-center"
            >
              <img
                className="ml-[5px] flex-none"
                src="/img/logo.svg"
                alt="logo"
              />
            </Link>

            <button
              type="button"
              className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
              onClick={toggleSidebar}
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto rotate-90"
              >
                <path
                  d="M19 11L12 17L5 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.5"
                  d="M19 7L12 13L5 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
            {sidebarData.map((item, index) => {
              return item.submenu ? (
                <li className="menu nav-item" key={index}>
                  <button
                    className={cn(
                      "nav-link group w-full",
                      currentMenu === item.title && "active"
                    )}
                    onClick={() =>
                      setCurrentMenu(
                        currentMenu === item.title ? "" : item.title
                      )
                    }
                  >
                    {item.title}
                    <div
                      className={
                        currentMenu !== item.title
                          ? "rtl:rotate-90 -rotate-90"
                          : "rotate-0"
                      }
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto"
                      >
                        <path
                          d="M19 11L12 17L5 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.5"
                          d="M19 7L12 13L5 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <AnimateHeight
                    duration={300}
                    height={currentMenu === item.title ? "auto" : 0}
                  >
                    <ul className="space-y-0.5">
                      {item.submenu.map((subitem, index) => {
                        return (
                          <li className="menu nav-item" key={index}>
                            <Link
                              to={subitem.link || "#"}
                              className={cn(
                                "nav-link group w-full",
                                "text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark"
                              )}
                            >
                              {subitem.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </AnimateHeight>
                </li>
              ) : (
                <li className="menu nav-item" key={index}>
                  <Link to={item.link || "#"} className="nav-link group w-full">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
