import { Routes, Route } from "@/components/core/routes";
import Users from "./pages/dashboard/users";
import Students from "./pages/dashboard/students";
import Teachers from "./pages/dashboard/teachers";
import Courses from "./pages/dashboard/courses";
export default function () {
  return (
    <Routes>
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="/dashboard/students" element={<Students />} />
      <Route path="/dashboard/teachers" element={<Teachers />} />
      <Route path="/dashboard/courses" element={<Courses />} />
    </Routes>
  );
}
