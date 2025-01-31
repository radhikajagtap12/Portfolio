import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import "./LoginPage.css";

const SignUp = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign Up</h2>
        <SignUpForm />
        <p>
          Already have an account?{" "}
          <Link to="/" className="signup-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
