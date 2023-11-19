import React, { useContext } from "react";
import "./EmployeesList.scss";
import { EmployeesContext } from "../../context/EmployeesContext";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeDetails } from "../EmployeeDetails";

export const EmployeesList: React.FC = () => {

  const { id } = useParams();
  const { employeesList, page, maxPage, handlePage } =
    useContext(EmployeesContext);
  const navigate = useNavigate();

  return (
    <>
    <div className="employees-list">
      {employeesList.length > 0 ? (
        <div className="employees-list__table">
          <h2>Employees list</h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Pensja</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {employeesList.map((employee) => (
                <tr key={employee.id} onClick={() => navigate(`/employees/${employee.id}`)}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Brak pracowników</p>
      )}
      <div className="btn"><button onClick={() => handlePage(-1)} disabled={page === 1}>
          Prev
        </button>
        <span>
          {page} of {maxPage}
        </span>
        <button onClick={() => handlePage(1)} disabled={page === maxPage}>
          Next
        </button></div>
      
      </div>
      {id && <EmployeeDetails />}
    </>
  );
};
