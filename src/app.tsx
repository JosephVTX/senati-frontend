import { Routes, Route } from "@/components/core/routes";
import UsersIndex from "./pages/dashboard/users";
import UsersCreate from "./pages/dashboard/users/create";
import UsersEdit from "./pages/dashboard/users/edit";
import StudentsIndex from "./pages/dashboard/students";
import StudentsCreate from "./pages/dashboard/students/create";

export default function () {
  return (
    <Routes>
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/dashboard/users" element={<UsersIndex />} />
      <Route path="/dashboard/users/create" element={<UsersCreate />} />
      <Route path="/dashboard/users/:id" element={<UsersEdit />} />
      <Route path="/dashboard/students" element={<StudentsIndex />} />
      <Route path="/dashboard/students/create" element={<StudentsCreate />} />
    </Routes>
  );
}
