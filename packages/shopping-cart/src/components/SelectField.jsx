export const SelectField = ({
  label,
  value,
  name,
  id,
  handleChange,
  options,
}) => {
  const OptionList = () =>
    options.map((option) => (
      <option key={option.value} value={option.value}>
        {" "}
        {option.label}{" "}
      </option>
    ));
  return (
    <div className="mb-3">
      <label className="form-label"> {label} </label>
      <select
        className="form-control"
        value={value}
        name={name}
        id={id}
        onChange={handleChange}
      >
        <OptionList />
      </select>
    </div>
  );
};
