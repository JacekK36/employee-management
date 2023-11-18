/*import React, { useState, useContext } from "react";
import "./Browser.scss";
import { EmployeesContext } from "../../context/EmployeesContext";

export const Browser = () => {
  const { employeesList } = useContext(EmployeesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const filteredEmployees = employeesList.filter((employee) => {
    const lastNameIncludesSearchTerm = employee.lastName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return searchClicked ? lastNameIncludesSearchTerm : true;
  });

  const handleSearch = () => {
    setSearchClicked(true);
  };
  return (
    <div>
      <input
        className="searching"
        type="search"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className="button">
        Search
      </button>
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.lastName} - {employee.id}
          </li>
        ))}
      </ul>
    </div>
  );
};*/

import React, { useState, useContext } from "react";
import "./Browser.scss";
import { EmployeesContext } from "../../context/EmployeesContext";

export const Browser = () => {
  const { employeesList } = useContext(EmployeesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const filteredEmployees = employeesList.filter((employee) => {
    const lastNameIncludesSearchTerm = employee.lastName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return searchClicked ? lastNameIncludesSearchTerm : true;
  });

  const handleSearch = () => {
    setSearchClicked(true);
  };

  return (
    <div>
      <input
        className="searching"
        type="search"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className="button">
        Search
      </button>
      {searchClicked && (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              {employee.lastName} - {employee.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
