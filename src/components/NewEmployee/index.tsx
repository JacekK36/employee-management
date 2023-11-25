import { EmployeesContext } from "../../context/EmployeesContext";
import { useContext } from "react";

import "./NewEmployee.scss";

export const NewEmployee = () => {
  const {
    newEmployeeInput,
    newErrorMessage,
    loaderAddEmployee,
    handleNewEmployeeInput,
    handleNewEmployeeSubmit,
  } = useContext(EmployeesContext);

  return (
    <div className="new-employee">
      {newErrorMessage && <p>{newErrorMessage}</p>}
      <form onSubmit={handleNewEmployeeSubmit} className="new-employee__form">
        <label htmlFor="firstName" className="new-employee__first-name">
          First Name:{" "}
          <input
            className="new-employee__input"
            id="firstName"
            type="text"
            name="firstName"
            value={newEmployeeInput.firstName}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="lastName" className="new-employee__last-name">
          Last Name:{" "}
          <input
            className="new-employee__input"
            id="lastName"
            type="text"
            name="lastName"
            value={newEmployeeInput.lastName}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="birthDate" className="new-employee__birth-date">
          Birth Date:{" "}
          <input
            className="new-employee__input"
            id="birthDate"
            type="date"
            name="birthDate"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            value={newEmployeeInput.birthDate}
            onChange={handleNewEmployeeInput}
          />
        </label>
        <label htmlFor="phone" className="new-employee__phone">
          Phone:{" "}
          <input
            className="new-employee__input"
            id="phone"
            type="text"
            name="phone"
            value={newEmployeeInput.phone}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="address" className="new-employee__address">
          Address:{" "}
          <input
            className="new-employee__input"
            id="address"
            type="text"
            name="address"
            value={newEmployeeInput.address}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="city" className="new-employee__city">
          City:{" "}
          <input
            className="new-employee__input"
            id="city"
            type="text"
            name="city"
            value={newEmployeeInput.city}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="postalCode" className="new-employee__postal-code">
          Postal Code:{" "}
          <input
            className="new-employee__input"
            id="postalCode"
            type="text"
            name="postalCode"
            value={newEmployeeInput.postalCode}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="salary" className="new-employee__salary">
          Salary:{" "}
          <input
            className="new-employee__input"
            id="salary"
            type="number"
            name="salary"
            value={newEmployeeInput.salary}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        <label htmlFor="status" className="new-employee__status">
          Status:{" "}
          <input
            className="new-employee__input"
            id="status"
            type="text"
            name="status"
            value={newEmployeeInput.status}
            onChange={handleNewEmployeeInput}
            required
          />
        </label>
        {loaderAddEmployee ? (
          <p>Loading...</p>
        ) : (
          <button type="submit" className="new-employee__submit">
            Add New Employee
          </button>
        )}
      </form>
    </div>
  );
};
