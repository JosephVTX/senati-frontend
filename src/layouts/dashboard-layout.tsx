/* import { Footer } from "@/components/layouts/footer"; */
/* import { Header } from "@/components/layouts/header";
import { Setting } from "@/components/layouts/setting";
import Sidebar from "@/components/layouts/sidebar"; */
import { Header } from "@/components/shared/header";
import { Sidebar } from "@/components/shared/sidebar";
/* import { Setting } from "@/components/shared/setting"; */
/* import { Sidebar } from "@/components/shared/sidebar"; */
import { useThemeStore } from "@/store/theme-store";

import { Suspense } from "react";
import { cn } from "tr-cn";

export const DashboardLayout = ({
  children,
  panel = true,
}: React.PropsWithChildren<{ title?: string; panel?: boolean }>) => {
  const { sidebar, menu, layout, navbar, animation } = useThemeStore();
  return (
    <>
      <div
        className={cn(
          sidebar && "toggle-sidebar",
          menu,
          layout,
          "main-section antialiased relative font-nunito text-sm font-normal"
        )}
      >
        <div className="relative">
          {/*  <Setting /> */}
          <div
            className={cn(
              navbar,
              "main-container text-black dark:text-white-dark min-h-screen"
            )}
          >
            <Sidebar />
            <div className="main-content flex flex-col min-h-screen">
              <Header />
              <Suspense>
                <div className={cn(animation, "p-6 animate__animated")}>
                  <div className={panel ? "panel" : undefined}>{children}</div>
                </div>
              </Suspense>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
