import { useRef } from "react";
import UseForm from "../useForm.jsx";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, handleChange] = UseForm({ email: "", password: "", name: "" });
  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const handleSubmit = () => {
    for (const field in values) {
      if (!values[field]) {
        inputRefs[field].current.focus();
        return;
      }
    }
    console.log(values);
    // You can put your form submission logic here
  };

  return (
    <div className="register" style={{ padding: "8rem 0rem 2rem 0rem" }}>
      <form
        className="p-4 bg-light rounded shadow-sm"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h2 className="text-center mb-4">Register</h2>
        <div className="mb-3">
          <input
            ref={inputRefs.name}
            type="text"
            className="form-control"
            value={values.name}
            onChange={handleChange}
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            ref={inputRefs.email}
            type="email"
            className="form-control"
            value={values.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            ref={inputRefs.password}
            type="password"
            className="form-control"
            value={values.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
      <div className="text-center mt-3">
        <p>
          Already have an account?{" "}
          <Link className="linkStyle text-primary" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
