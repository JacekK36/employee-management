import "./Home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Welcome to the employee-management App</h1>
      <h4 className="homepage__text">Employees List</h4>
      <div className="homepage__link">
        <Link to="/employees" className="btn-link">
          <button type="button" className="btn-list">
            Go to List
          </button>
        </Link>
      </div>
    </div>
  );
};
