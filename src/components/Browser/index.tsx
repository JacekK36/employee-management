import React, { useContext } from "react";
import "./Browser.scss";
import { EmployeesContext } from "../../context/EmployeesContext";

export const Browser = () => {
  const { searchTerm, handleSearchInput } = useContext(EmployeesContext);

  return (
    <div className="searchBox">
      <input
        className="searching"
        type="search"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={handleSearchInput}
      />
    </div>
  );
};
