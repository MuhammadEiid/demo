import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import UseForm from "../useForm.jsx";

const Login = () => {
  const [values, handleChange] = UseForm({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const inputRefs = {
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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login" style={{ padding: "8rem 0rem 4rem 0rem" }}>
      <form
        className="p-4 bg-light rounded shadow-sm"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h2 className="text-center mb-4">Login</h2>
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
          <div className="input-group">
            <input
              ref={inputRefs.password}
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={values.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center mt-3">
        <p>
          Don't have an account?{" "}
          <Link className="linkStyle text-primary " to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
