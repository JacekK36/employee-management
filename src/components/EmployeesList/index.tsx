import React, { useContext } from "react";
import "./EmployeesList.scss";
import { EmployeesContext } from "../../context/EmployeesContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { EmployeeDetails } from "../EmployeeDetails";
import { ReactComponent as SortIcon } from "../../assets/chevron-up-solid.svg";

export const EmployeesList: React.FC = () => {
  const { id } = useParams();
  const {
    employeesList,
    page,
    maxPage,
    order,
    sort,
    listErrorMessage,
    loaderEmployees,
    handlePage,
    handleOrder,
  } = useContext(EmployeesContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="employees-list">
        {loaderEmployees ? (
          <p>Loading...</p>
        ) : listErrorMessage && !loaderEmployees ? (
          <p>{listErrorMessage}</p>
        ) : (
          <>
            {employeesList.length > 0 ? (
              <div className="employees-list__table">
                <h2>Employees list</h2>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th onClick={() => handleOrder("id")}>
                        ID{" "}
                        {sort === "id" && (
                          <SortIcon
                            className={
                              order === "desc"
                                ? "employees-list__sort--desc employees-list__sort"
                                : "employees-list__sort--asc employees-list__sort"
                            }
                          />
                        )}
                      </th>
                      <th onClick={() => handleOrder("firstName")}>
                        Imię{" "}
                        {sort === "firstName" && (
                          <SortIcon
                            className={
                              order === "desc"
                                ? "employees-list__sort--desc employees-list__sort"
                                : "employees-list__sort--asc employees-list__sort"
                            }
                          />
                        )}
                      </th>
                      <th onClick={() => handleOrder("lastName")}>
                        Nazwisko{" "}
                        {sort === "lastName" && (
                          <SortIcon
                            className={
                              order === "desc"
                                ? "employees-list__sort--desc employees-list__sort"
                                : "employees-list__sort--asc employees-list__sort"
                            }
                          />
                        )}
                      </th>
                      <th onClick={() => handleOrder("salary")}>
                        Pensja{" "}
                        {sort === "salary" && (
                          <SortIcon
                            className={
                              order === "desc"
                                ? "employees-list__sort--desc employees-list__sort"
                                : "employees-list__sort--asc employees-list__sort"
                            }
                          />
                        )}
                      </th>
                      <th onClick={() => handleOrder("status")}>
                        Status{" "}
                        {sort === "status" && (
                          <SortIcon
                            className={
                              order === "desc"
                                ? "employees-list__sort--desc employees-list__sort"
                                : "employees-list__sort--asc employees-list__sort"
                            }
                          />
                        )}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeesList.map((employee) => (
                      <tr
                        key={employee.id}
                        onClick={() =>
                          navigate(
                            `${location.pathname}/${employee.id}${location.search}`
                          )
                        }
                      >
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
            <div className="btn">
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
          </>
        )}
      </div>

      {id && <EmployeeDetails />}
    </>
  );
};
