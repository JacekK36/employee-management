import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./EmployeeDetails.scss";
import { useContext, useEffect } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const {
    employee,
    isEditable,
    allowDelete,
    detailsErrorMessage,
    loaderSingleEmployees,
    loaderDeleteEmployee,
    loaderEditEmployee,
    handleEditEmployeeInput,
    handleEditEmployee,
    getSingleEmployee,
    toggleEditing,
    setAllowDelete,
    handleDelete,
    setIsEditable,
  } = useContext(EmployeesContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (id) {
      setAllowDelete(false);
      setIsEditable(false);
      getSingleEmployee(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div
        className="employee-details__background"
        onClick={() =>
          navigate(`/${location.pathname.split("/")[1]}${location.search}`)
        }
      ></div>
      <div className="employee-details__modal">
        {loaderSingleEmployees ? (
          <p>Loading...</p>
        ) : (
          <>
            {detailsErrorMessage && <p>{detailsErrorMessage}</p>}
            <form
              onSubmit={handleEditEmployee}
              className="employee-details__form"
            >
              <input type="hidden" value={id} />
              <label
                htmlFor="firstName"
                className="employee-details__first-name"
              >
                First Name:{" "}
                <input
                  className="employee-details__input"
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={employee.firstName}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                  required
                />
              </label>
              <label htmlFor="lastName" className="employee-details__last-name">
                Last Name:{" "}
                <input
                  className="employee-details__input"
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={employee.lastName}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                  required
                />
              </label>
              <label
                htmlFor="birthDate"
                className="employee-details__birth-date"
              >
                Birth Date:{" "}
                <input
                  className="employee-details__input"
                  id="birthDate"
                  type="date"
                  name="birthDate"
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                  value={employee.birthDate}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                />
              </label>
              <label htmlFor="phone" className="employee-details__phone">
                Phone:{" "}
                <input
                  className="employee-details__input"
                  id="phone"
                  type="text"
                  name="phone"
                  value={employee.phone}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                  required
                />
              </label>
              <label htmlFor="address" className="employee-details__address">
                Address:{" "}
                <input
                  className="employee-details__input"
                  id="address"
                  type="text"
                  name="address"
                  value={employee.address}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                  required
                />
              </label>
              <label htmlFor="city" className="employee-details__city">
                City:{" "}
                <input
                  className="employee-details__input"
                  id="city"
                  type="text"
                  name="city"
                  value={employee.city}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                  required
                />
              </label>
              <label
                htmlFor="postalCode"
                className="employee-details__postal-code"
              >
                Postal Code:{" "}
                <input
                  className="employee-details__input"
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  value={employee.postalCode}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                  required
                />
              </label>
              <label htmlFor="salary" className="employee-details__salary">
                Salary:{" "}
                <input
                  className="employee-details__input"
                  id="salary"
                  type="number"
                  name="salary"
                  value={employee.salary}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                  required
                />
              </label>
              <label htmlFor="status" className="employee-details__status">
                Status:{" "}
                <input
                  className="employee-details__input"
                  id="status"
                  type="text"
                  name="status"
                  value={employee.status}
                  onChange={handleEditEmployeeInput}
                  disabled={!isEditable}
                  required
                />
              </label>
              {!isEditable && (
                <button
                  className="employee-details__edit"
                  type="button"
                  onClick={() => toggleEditing(id!)}
                >
                  Edit Employee
                </button>
              )}
              {isEditable && (
                <>
                  {loaderEditEmployee ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      <button type="submit" className="employee-details__save">
                        Save
                      </button>
                      <button
                        type="button"
                        className="employee-details__cancel"
                        onClick={() => toggleEditing(id!)}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </>
              )}
              <button
                className="employee-details__delete"
                type="button"
                onClick={() => setAllowDelete(true)}
              >
                Delete
              </button>
            </form>

            {allowDelete && (
              <div className="employee-details__allow">
                <p>
                  Are you sure you want to remove{" "}
                  <b>
                    {employee.firstName} {employee.lastName}
                  </b>{" "}
                  from your employee list?
                </p>

                {loaderDeleteEmployee ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <button
                      className="employee-details__save"
                      onClick={handleDelete}
                    >
                      Yes
                    </button>
                    <button
                      className="employee-details__cancel"
                      onClick={() => setAllowDelete(false)}
                    >
                      No
                    </button>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
