import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../redux/authSlice";
import FormInput from "./FormInput";
import validateForm from "../utils/validateForm";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Retrieve stored users
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Find matching user
        const validUser = storedUsers.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        if (!validUser) {
          setErrors({ email: "Invalid credentials or user not registered!" });
          return;
        }

        dispatch(loginSuccess({ email: formData.email }));
        navigate("/home"); // Redirect to home page on successful login
      } catch (error) {
        dispatch(loginFailure("Login failed"));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        type="email"
        id="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        onFocus={() => setErrors((prev) => ({ ...prev, email: "" }))}
        error={errors.email}
      />
      <FormInput
        label="Password"
        type="password"
        id="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        onFocus={() => setErrors((prev) => ({ ...prev, password: "" }))}
        error={errors.password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
