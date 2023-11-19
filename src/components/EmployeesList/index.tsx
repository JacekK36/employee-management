import React, { useContext, useEffect } from "react";
import "./EmployeesList.scss";
import { EmployeesContext } from "../../context/EmployeesContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { EmployeeDetails } from "../EmployeeDetails";

export const EmployeesList: React.FC = () => {
  const { id } = useParams();
  const { employeesList, page, maxPage, handlePage } =
    useContext(EmployeesContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
    <div className="employees-list">
      {employeesList.length > 0 ? (
        <div className="employees-list__table table-responsive">
          <h2>Employees list</h2>
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th className="columnID">ID</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Pensja</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {employeesList.map((employee) => (
                <tr key={employee.id} onClick={() =>
                      navigate(
                        `${location.pathname}/${employee.id}${location.search}`
                      )
                    }>
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
