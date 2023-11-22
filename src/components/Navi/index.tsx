import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import "./Navi.scss";

export const Navi = () => {
  return (
    <>
      <div className="Menu__ButtonGroup">
        <ButtonGroup variant="text" aria-label="text button group">
          <nav>
            <ul>
              <li>
                <NavLink to="/" end>
                  <Button>Home</Button>
                </NavLink>
              </li>
              <li>
                <NavLink to="employees" end>
                  <Button>Employees List</Button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/employees/:id" end>
                  <Button>Employee Details</Button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </ButtonGroup>
      </div>
    </>
  );
};
export { ButtonGroup };
