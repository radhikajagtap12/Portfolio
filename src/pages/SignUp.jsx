import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import Label from "../components/Label";
import Input from "../components/Input";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Password must match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Label htmlFor="email" text="Email" />
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setErrors((prev) => ({ ...prev, email: "" }))}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="input-group">
            <Label htmlFor="password" text="Password" />
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setErrors((prev) => ({ ...prev, password: "" }))}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <div className="input-group">
            <Label htmlFor="confirmPassword" text="Confirm Password" />
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() =>
                setErrors((prev) => ({ ...prev, confirmPassword: "" }))
              }
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
          </div>
          <button type="submit">Login</button>
          <p className="signup-link">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
