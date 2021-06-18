export const InputField = ({
  label,
  type: proptype,
  placeholder,
  value,
  onChange,
}) => {
  const defaultTypes = ["email", "password"];
  const type = proptype
    ? proptype
    : defaultTypes.includes(label.toLowerCase())
    ? label
    : "text";

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}:</label>
      <input
        type={type}
        className="form-control"
        name={label.toLowerCase()}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required
      />
      <div className="invalid-feedback"> Invalid value! </div>
      {/* <div className="valid-feedback"> Looks good! </div> */}
    </div>
  );
};
