import { themeConfig } from "@/configs/theme-config";
import { create } from "zustand";

interface ThemeStore {
    theme: string;
    menu: string;
    layout: string;
    rtlClass: string;
    animation: string;
    navbar: string;
    sidebar: boolean;
    semidark: boolean;
    setTheme: (theme: string) => void;
    setMenu: (menu: string) => void;
    setLayout: (layout: string) => void;
    setRtlClass: (rtlClass: string) => void;
    setAnimation: (animation: string) => void;
    setNavbar: (navbar: string) => void;
    toggleSidebar: () => void;
    toggleSemidark: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: localStorage.getItem("theme") || themeConfig.theme,
    menu: localStorage.getItem("menu") || themeConfig.menu,
    layout: localStorage.getItem("layout") || themeConfig.layout,
    rtlClass: localStorage.getItem("rtlClass") || themeConfig.rtlClass,
    animation: localStorage.getItem("animation") || themeConfig.animation,
    navbar: localStorage.getItem("navbar") || themeConfig.navbar,
    sidebar: localStorage.getItem("sidebar") === "true" || themeConfig.sidebar,
    semidark:
        localStorage.getItem("semidark") === "true" || themeConfig.semidark,

    // Set theme localstorage and state and document.body.className
    setTheme: (theme: string) => {
        if (theme === "system") {
            const isDarkMode = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            localStorage.setItem("theme", "system");
            set({ theme: "system" });
            document.body.className = isDarkMode ? "dark" : "light";
        } else {
            localStorage.setItem("theme", theme);
            set({ theme });
            document.body.className = theme;
        }
    },
    // Set menu localstorage and state

    setMenu: (menu: string) => {
        localStorage.setItem("menu", menu);
        set({ menu });
    },

    // Set layout localstorage and state

    setLayout: (layout: string) => {
        localStorage.setItem("layout", layout);
        set({ layout });
    },

    // Set rtlClass localstorage and state and document.documentElement.dir

    setRtlClass: (rtlClass: string) => {
        localStorage.setItem("rtlClass", rtlClass);
        set({ rtlClass });
        document.documentElement.dir = rtlClass;
    },

    // Set animation localstorage and state

    setAnimation: (animation: string) => {
        localStorage.setItem("animation", animation);
        set({ animation });
    },

    // Set navbar localstorage and state

    setNavbar: (navbar: string) => {
        localStorage.setItem("navbar", navbar);
        set({ navbar });
    },

    // Toggle sidebar state and localstorage

    toggleSidebar: () => {
        set((state) => {
            const sidebar = !state.sidebar;
            localStorage.setItem("sidebar", sidebar.toString());
            return { sidebar };
        });
    },

    // Toggle semidark state and localstorage

    toggleSemidark: () => {
        set((state) => {
            const semidark = !state.semidark;
            localStorage.setItem("semidark", semidark.toString());
            return { semidark };
        });
    },
}));