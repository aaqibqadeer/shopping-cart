export function SelectField(props) {
  const OptionList = () => props.options.map(option => <option key={option.value} value={option.value}> {option.label} </option> )
  return (
    <div className="mb-3">
      <label className="form-label"> { props.label } </label>
      <select className="form-control" value={props.value} name={props.name} id={props.id} onChange={props.handleChange}>
        <OptionList/>
      </select>
    </div>
  )
}