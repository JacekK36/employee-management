import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import { EmployeesList } from "./components/EmployeesList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { EmployeesProvider } from "./context/EmployeesContext";
import { Navi } from "./components/Navi";
import { ButtonGroup } from "./components/Navi";

function App() {
  return (
    <EmployeesProvider>
      <div className="App">
        <ButtonGroup />
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/employees" element={<EmployeesList />} />;
          <Route path="/employees/:id" element={<EmployeeDetails />} />;
        </Routes>
      </div>
    </EmployeesProvider>
  );
}

export default App;
