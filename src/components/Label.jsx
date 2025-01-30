const Label = ({ labelFor, text }) => {
  return <label htmlFor={labelFor}>{text}</label>;
};

export default Label;
