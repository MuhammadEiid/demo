import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark   ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Determinds
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon fa-solid fa-bars"
            aria-hidden="true"
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link
                className="nav-link active fw-bold  text-white-50 "
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/create">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/login">
                Login
              </Link>
            </li>
          </ul>
          <div className="social-icons ps-lg-5 text-center">
            <a href="/" title="Facebook">
              <i className="fab fa-facebook-f fa " aria-hidden="true"></i>
            </a>

            <a href="/" title="linkedin">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="/" title="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
