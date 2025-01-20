import Kambaz from "./Kambaz";
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
