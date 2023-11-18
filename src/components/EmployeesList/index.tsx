import { useContext } from "react";
import "./EmployeesList.scss";
import { EmployeesContext } from "../../context/EmployeesContext";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeDetails } from "../EmployeeDetails";

export const EmployeesList = () => {
  const { id } = useParams();
  const { employeesList, page, maxPage, handlePage } =
    useContext(EmployeesContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="employees-list">
        {employeesList.length > 0 ? (
          <>
            <ul className="employees-list__list">
              {employeesList.map((employee) => {
                return (
                  <li
                    key={employee.id}
                    onClick={() => navigate(`/employees/${employee.id}`)}
                  >
                    <p>Imię: {employee.firstName}</p>
                    <p>Nazwisko: {employee.lastName}</p>
                    <p>Data urodzenia: {employee.birthDate}</p>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <p>Brak pracowników</p>
        )}
        <button onClick={() => handlePage(-1)} disabled={page === 1}>
          Prev
        </button>
        <span>
          {page} of {maxPage}
        </span>
        <button onClick={() => handlePage(1)} disabled={page === maxPage}>
          Next
        </button>
      </div>
      {id && <EmployeeDetails />}
    </>
  );
};
