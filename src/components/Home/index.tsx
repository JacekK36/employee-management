import { useContext } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";
import "./Home.scss";
import { Button, ButtonGroup } from "@mui/material";

export const Home = () => {
  const { employeesList } = useContext(EmployeesContext);
  return (
    <>
      <div className="home">
        <h1 className="home__title">Welcome to the employee-management App</h1>
        <p className="home__employees">
          Number of activ Employees: {employeesList.length}
        </p>
      </div>
      <div className="ButtonGroup">
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Go to Employee List</Button>
          <Button>Add Employee</Button>
          <Button>Remove Employee</Button>
        </ButtonGroup>
      </div>
    </>
  );
};
