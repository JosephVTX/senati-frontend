interface SidebarItem {
  title: string;
  link?: string;
  submenu?: SidebarItem[];
}

export const sidebarData: SidebarItem[] = [
  /* {
    title: "Dashboard",
    link: "/dashboard",
  }, */
  {
    title: "Usuarios",
    submenu: [
      {
        title: "Ver Usuarios",
        link: "/dashboard/users",
      },
      {
        title: "Crear Usuario",
        link: "/dashboard/users/create",
      }
    ],
  },
  {
    title: "Estudiantes",
    submenu: [
      {
        title: "Ver Estudiantes",
        link: "/dashboard/students",
      },
      {
        title: "Crear Estudiante",
        link: "/dashboard/students/create",
      }
    ],
  },
  {
    title: "Profesores",
    submenu: [
      {
        title: "Ver Profesores",
        link: "/dashboard/teachers",
      },
    ],
  },
  {
    title: "Cursos",
    submenu: [
      {
        title: "Ver Cursos",
        link: "/dashboard/courses",
      },
    ],
  },
];
