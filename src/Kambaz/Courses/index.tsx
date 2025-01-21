import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";

export default function Courses() {
  return (
    <div>
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Courses
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h3>Quizzes</h3>} />
            <Route path="Grades" element={<h3>Grades</h3>} />
            <Route path="Zoom" element={<h3>Zoom</h3>} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Piazza" element={<h3>Piazza</h3>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
