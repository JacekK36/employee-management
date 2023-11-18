import React, { useContext } from "react";
import "./EmployeesList.scss";
import { EmployeesContext } from "../../context/EmployeesContext";

export const EmployeesList: React.FC = () => {
  const { employeesList } = useContext(EmployeesContext);

  return (
    <div className="employees-list">
      {employeesList.length > 0 ? (
        <div className="employees-list__table">
          <h2>Employees list</h2>
          <table>
            <thead>
              <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Data urodzenia</th>
              </tr>
            </thead>
            <tbody>
              {employeesList.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.birthDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Brak pracowników</p>
      )}
    </div>
  );
};



// {<table class="table table-striped table-dark">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table> }