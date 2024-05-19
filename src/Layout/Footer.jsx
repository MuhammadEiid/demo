import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer">Determinds</h5>
            <p className="text-white-50">
              A brief description of your company. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-white">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="linkStyle text-success" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="linkStyle text-success" to="/create">
                  Create Article
                </Link>
              </li>
              <li>
                <Link className="linkStyle text-success" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="linkStyle text-success" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-white">Contact Us</h5>
            <address className="text-white-50">
              123 Main Street
              <br />
              City, State ZIP
              <br />
              <Link
                className="linkStyle text-success"
                to="mailto:info@example.com"
              >
                info@example.com
              </Link>
              <br />
              <Link className="linkStyle text-success" to="tel:+1234567890">
                +1 (234) 567-890
              </Link>
            </address>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center footer fs-6 ">
          <p className="mb-0">&copy; {new Date().getFullYear()} Determinds</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
