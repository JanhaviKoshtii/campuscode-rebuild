
import CourseDetails from "./CourseDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import CodingPractice from "./CodingPractice";
import Projects from "./Projects";
import Hackathons from "./Hackathons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/course/:courseId" element={<CourseDetails />} />

        <Route path="/coding-practice" element={<CodingPractice />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/hackathons" element={<Hackathons />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
