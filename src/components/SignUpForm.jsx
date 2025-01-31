import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpSuccess, signUpFailure } from "../redux/authSlice";
import FormInput from "./FormInput";
import validateForm from "../utils/validateForm";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
        // Get existing users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Check if user already exists
        const userExists = existingUsers.some(
          (user) => user.email === formData.email
        );
        if (userExists) {
          setErrors({ email: "User already exists! Please log in." });
          return;
        }

        // Save user details in localStorage
        const updatedUsers = [
          ...existingUsers,
          { email: formData.email, password: formData.password },
        ];
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        dispatch(signUpSuccess({ email: formData.email }));
        navigate("/"); // Redirect to login page after signup
      } catch (error) {
        dispatch(signUpFailure("Signup failed"));
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
      <FormInput
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        onFocus={() => setErrors((prev) => ({ ...prev, confirmPassword: "" }))}
        error={errors.confirmPassword}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
