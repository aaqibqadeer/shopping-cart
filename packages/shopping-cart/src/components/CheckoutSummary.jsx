import { useState, useContext } from 'react';
import { InputField } from "./InputField";
import { PriceLabel } from "./PriceLabel";
import { CartContext } from "../App";


export function CheckoutSummary(props) {

  const [totalCharges, setTotalCharges] = useState(props.subtotal+props.deliveryCharges);
  const [validPromo, setValidPromo] = useState('');
  const [promo, setPromo] = useState('');
  const { cart } = useContext(CartContext);

  const handlePromo = () => {
    if(promo ==='25OFF') {
      setTotalCharges(totalCharges*.75)
      setValidPromo('valid');
    }
    else {
      setValidPromo('invalid');
    }
  }

  const handleChange = (promoObject) => setPromo(promoObject.value)

  return(
    <div className="bg-light py-4 px-5 mx-auto border border-2">
      <h3 className="text-center mb-4">Summary</h3>
      <div className="needs-validation">
        <h6>{cart.length} {cart.length===1 ? 'Item':'Items'}</h6>
        
        <hr />
        
        <InputField name="name" label="PROMO CODE:" type="text" onValueChange={handleChange} placeholder="Enter promo code"/>
        <button className="btn btn-primary btn-sm d-block w-100" onClick={handlePromo}>Apply</button>
        {validPromo ==='invalid' && <p className="text-danger text-center m-2">Wrong promo code!</p>}
        {validPromo === 'valid' && <p className="text-success text-center m-2">Promo code applied successfully!</p>}
        
        <hr />

        <PriceLabel label="SUBTOTAL: " value={props.subtotal} />
        <PriceLabel label="Delivery Charges: " value={props.deliveryCharges} />
        <PriceLabel label="TOTAL TO PAY: " bold={true} value={totalCharges} />
      </div>
    </div>
  )
}