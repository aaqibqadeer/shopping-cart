import { useReducer } from 'react';
import { InputField } from '../components/InputField';
import { SelectField } from '../components/SelectField';
import { CheckoutSummary } from '../components/CheckoutSummary';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Checkout(props) {

  const [formObject, setFormObject] = useReducer(formReducer, {name:"", country:"pk", address:"", number:"", deliveryMethod:"COD"});

  const deliveryOptions = [
    {label:"Cash on delivery", value:"COD"}
  ]

  const countries = [
    {label:"Pakistan", value:"pk"},
    {label:"United Kingdom", value:"uk"},
    {label:"United States", value:"us"},
    {label:"India", value:"ind"},
    {label:"United Arab Emirates", value:"uae"},
  ]

  const history = useHistory();
  const location = useLocation();

  function formReducer(state, event) {
    return {
      ...state,
      [event.name]: event.value
    }
  }
  
  function handleChange(event) {
    setFormObject(event)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/order-success")
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="bg-light py-4 px-5 mx-auto border border-2">
            <h3 className="text-center mb-4">Checkout</h3>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <InputField name="name" label="FULL NAME:" type="text" placeholder="Enter your full name" 
                  value={formObject.name}  onValueChange={handleChange} />
              
              <SelectField name="country" label="COUNTRY:" value={formObject.country} options={countries} handleChange={handleChange}/>
              
              <InputField name="address" label="ADDRESS:" type="text" placeholder="Enter your address" 
                  value={formObject.address}  onValueChange={handleChange} />
              
              <InputField name="number" label="NUMBER:" type="text" placeholder="Enter your Phone number" 
                  value={formObject.number}  onValueChange={handleChange} />
              
              <SelectField name="paymentMethod" label="PAYMENT METHOD:" value={formObject.paymentMethod} options={deliveryOptions} handleChange={handleChange}/>
              
              <div className="text-center">
                <button className="btn btn-success px-4 py-2 m-2">PLACE ORDER</button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-4">
          <CheckoutSummary subtotal={location.state.subtotal} deliveryCharges={2}/>
        </div>
      </div> 
    </div>
  )
}