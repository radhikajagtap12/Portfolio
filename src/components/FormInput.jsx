import Label from "./Label";
import Input from "./Input";

const FormInput = ({ label, type, id, value, onChange, onFocus, error }) => {
  return (
    <div className="input-group">
      <Label htmlFor={id} text={label} />
      <Input
        type={type}
        id={id}
        placeholder={`Enter your ${label.toLowerCase()}`}
        autoComplete="off"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FormInput;
