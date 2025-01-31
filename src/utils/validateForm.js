const validateForm = (formData) => {
  let errors = {};

  // Ensure formData is always an object with default values
  const { email = "", password = "", confirmPassword = null } = formData || {};

  console.log("Validation input:", { email, password, confirmPassword }); // Debugging

  // Email validation
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email format";
  }

  // Password validation
  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Confirm Password validation (only for SignUp)
  if (confirmPassword !== null) {
    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords must match";
    }
  }

  console.log("Validation errors:", errors); // Debugging

  return errors;
};

export default validateForm;
