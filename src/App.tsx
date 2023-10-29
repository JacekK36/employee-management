import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import { EmployeesList } from "./components/EmployeesList";
import { EmployeeDetails } from "./components/EmployeeDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/employees" element={<EmployeesList />} />;
        <Route path="/employees/:id" element={<EmployeeDetails />} />;
      </Routes>
    </div>
  );
}

export default App;
