import { Link } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <>
      <div>
        <Link to="/" className="NotFound__link">
          Home
        </Link>
      </div>
      <h1 className="NotFound__text">404 Page Not Found</h1>
    </>
  );
};
