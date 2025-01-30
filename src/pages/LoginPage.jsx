import { Link } from "react-router-dom";
import "./LoginPage.css";
import Label from "../components/Label";
import Input from "../components/Input";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <Label htmlFor="email" text="Email" />
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <Label htmlFor="password" text="Password" />
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
