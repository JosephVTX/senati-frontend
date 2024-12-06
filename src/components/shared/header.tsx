import { cn } from "tr-cn";
import { useThemeStore } from "@/store/theme-store";
/* import { Link, usePage } from "@inertiajs/react"; */

/* import { IcRoundMenu } from "../icons/ic/round-menu"; */
/* import { PageProps } from "@/types";
import { IcOutlineLogout } from "../icons/ic/outline-logout"; */
import { FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import Dropdown from "../ui/dropdown";
import { Link } from "react-router";

import { useAuthStore } from "@/store/auth-store";
import axios from "@/libs/axios";

export const Header = () => {
  const { semidark, menu, theme,  toggleSidebar, setTheme } = useThemeStore();

  const { auth, setAuth } = useAuthStore();

  return (
    <header className={cn("z-40", semidark && menu === "horizontal" && "dark")}>
      <div className="shadow-sm">
        <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
          <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
            <Link
              to="/dashboard"
              className="main-logo flex items-center shrink-0"
            >
              <img
                className="ltr:-ml-1 rtl:-mr-1 inline"
                src="/img/logo.svg"
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
              onClick={toggleSidebar}
            >
              <FiMenu />
            </button>
          </div>

          <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>

            <div className="dropdown shrink-0 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="dark:text-white-light/90 dark:hover:text-white-light/100 text-black/60 hover:text-black/80 text-2xl"
              >
                {
                  theme === "dark" ? <FaSun /> : <FaRegMoon />
                }
              </button>
              <Dropdown
                offset={[0, 8]}
                placement={`bottom-end`}
                btnClassName="relative group block"
                button={
                  <img
                    className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                    src="/img/avatar.svg"
                    alt="userProfile"
                  />
                }
              >
                <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                  <li>
                    <div className="flex items-center px-4 py-4">
                      <img
                        className="rounded-md w-10 h-10 object-cover"
                        src="/img/avatar.svg"
                        alt="userProfile"
                      />
                      <div className="ltr:pl-4 rtl:pr-4 truncate">
                        <h4 className="text-base">{auth?.user.name}</h4>
                        {/* <h4 className="text-base">
                                                    {auth.user.name}
                                                    
                                                </h4> */}
                        <button
                          type="button"
                          className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                        >
                          {auth?.user.email}
                          {/* {auth.user.email} */}
                        </button>
                      </div>
                    </div>
                  </li>
                  <li >
                    <button
                      onClick={() => alert("Perfil")}
                      className="block px-4 py-3 hover:bg-white-light dark:hover:bg-dark/10"
                    >
                      <FiUser className="mr-2" /> Perfil
                    </button>
                  </li>
                  <li className="border-t border-white-light dark:border-white-light/10">
                    <button
                      className="text-danger !py-3"
                      onClick={() => {
                        axios.post("/auth/logout").then(() => setAuth(null));
                      }}
                    >
                      <FiLogOut className="mr-2" /> Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
