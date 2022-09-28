import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, Navigate } from 'react-router-dom';
import CreateOKR from "./components/CreateORKs/CreateOKR";
import AllObjectives from "./components/AllObjectives/AllObjectives";

function App() {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <Sidebar />
        <main className="col p-3 py-5 h-100vh">
          <Routes>
            <Route path="/" element={<AllObjectives />} />
            <Route path="/all_objectives" element={<Navigate to="/" />} />
            <Route path="/create_okr" element={<CreateOKR />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
