import { Link } from "react-router-dom";

export const Links = ({ links }) => {
  const LinksList = () =>
    links.map((link) => (
      <li className="nav-item" key={link.text}>
        {" "}
        <Link to={link.to} className="nav-link">
          {" "}
          {link.text}{" "}
        </Link>{" "}
      </li>
    ));

  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {" "}
        <LinksList />{" "}
      </ul>
    </div>
  );
};
