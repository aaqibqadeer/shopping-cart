function InputField (props) {

  function handleChange(event) {
    const eventValue = {
      name:event.target.name,
      value:event.target.value
    }
    props.onValueChange(eventValue)
  }
  
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} value={props.value} placeholder={props.placeholder} onChange={handleChange}/>
    </div>
  );
}

export default InputField;
