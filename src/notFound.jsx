import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h2 className="text-center mb-4 text-danger">Sorry</h2>
      <p className="text-center text-muted">This page cannot be found.</p>
      <Link to={"/"} className="btn btn-primary mt-4">
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
