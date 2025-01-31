const Input = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  onFocus,
  autoComplete,
}) => {
  return (
    <input
      type={type}
      id={id}
      autoComplete={autoComplete}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export default Input;
