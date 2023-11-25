import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import { EmployeesList } from "./components/EmployeesList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { EmployeesProvider } from "./context/EmployeesContext";
import { NewEmployee } from "./components/NewEmployee";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <>
        <EmployeesProvider>
          <>
            <Header />
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />;
                <Route path="/employees" element={<EmployeesList />} />;
                <Route path="/employees/:id" element={<EmployeesList />} />;
                <Route path="/employees/new" element={<NewEmployee />} />;
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </>
        </EmployeesProvider>
      </>
      <Footer />
    </>
  );
}

export default App;
