import { Routes, Route } from "@/components/core/routes";

import Dashboard from "./pages/dashboard/home";

import UsersIndex from "./pages/dashboard/users";
import UsersCreate from "./pages/dashboard/users/create";
import UsersEdit from "./pages/dashboard/users/edit";
import StudentsIndex from "./pages/dashboard/students";
import StudentsCreate from "./pages/dashboard/students/create";
/* import StudentsEdit from "./pages/dashboard/students/edit"; */
import TeachersIndex from "./pages/dashboard/teachers";
import TeachersCreate from "./pages/dashboard/teachers/create";

import CoursesIndex from "./pages/dashboard/courses";
import CoursesCreate from "./pages/dashboard/courses/create";

import SpecializationsIndex from "./pages/dashboard/specializations";
import SpecializationsCreate from "./pages/dashboard/specializations/create";

export default function () {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/users" element={<UsersIndex />} />
      <Route path="/dashboard/users/create" element={<UsersCreate />} />
      <Route path="/dashboard/users/:id" element={<UsersEdit />} />
      <Route path="/dashboard/students" element={<StudentsIndex />} />
      <Route path="/dashboard/students/create" element={<StudentsCreate />} />
      {/* <Route path="/dashboard/students/:id" element={<StudentsEdit />} /> */}
      <Route path="/dashboard/teachers" element={<TeachersIndex />} />
      <Route path="/dashboard/teachers/create" element={<TeachersCreate />} />
      <Route path="/dashboard/courses" element={<CoursesIndex />} />
      <Route path="/dashboard/courses/create" element={<CoursesCreate />} />

      <Route
        path="/dashboard/specializations"
        element={<SpecializationsIndex />}
      />
      <Route
        path="/dashboard/specializations/create"
        element={<SpecializationsCreate />}
      />
    </Routes>
  );
}
