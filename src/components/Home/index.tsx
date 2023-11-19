import { useContext } from "react";
import "./Home.scss";
import { EmployeesContext } from "../../context/EmployeesContext";

export const Home = () => {
  const { employeesList } = useContext(EmployeesContext);
  return (
    <div className="home">
      <h1 className="home__title">Welcome to the employee-management App</h1>
      <p className="home__employees">
        Number of activ Employees: {employeesList.length}
      </p>
      <h4 className="homepage__text">Employees List</h4>
      <button type="submit" className="list-button">
        Go to List
      </button>
    </div>
  );
};
