import { Link } from "react-router-dom";
import "./LoginPage.css";
import { Input } from "@mui/material";
import { Label } from "@mui/icons-material";

const SignUp = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <Label htmlfor="email" text="Email" />
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <Label htmlfor="password" text="Password" />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-group">
            <Label htmlfor="confirmPassword" text="Confirm Password" />
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit">Sign Up</button>
          <p className="signup-link">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
