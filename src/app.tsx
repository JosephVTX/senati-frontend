import { Routes, Route } from "@/components/core/routes";
import UsersIndex from "./pages/dashboard/users";
import UsersCreate from "./pages/dashboard/users/create";
import UsersEdit from "./pages/dashboard/users/edit";
import StudentsIndex from "./pages/dashboard/students";
import StudentsCreate from "./pages/dashboard/students/create";
/* import StudentsEdit from "./pages/dashboard/students/edit"; */
import TeachersIndex from "./pages/dashboard/teachers";
import CoursesIndex from "./pages/dashboard/courses";

export default function () {
  return (
    <Routes>
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/dashboard/users" element={<UsersIndex />} />
      <Route path="/dashboard/users/create" element={<UsersCreate />} />
      <Route path="/dashboard/users/:id" element={<UsersEdit />} />
      <Route path="/dashboard/students" element={<StudentsIndex />} />
      <Route path="/dashboard/students/create" element={<StudentsCreate />} />
      {/* <Route path="/dashboard/students/:id" element={<StudentsEdit />} /> */}
      <Route path="/dashboard/teachers" element={<TeachersIndex />} />
      <Route path="/dashboard/courses" element={<CoursesIndex />} />
    </Routes>
  );
}
