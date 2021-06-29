import { useState } from "react";
import { withCart } from "../store";
import { InputField, PriceLabel } from "./";

export const CheckoutSummary = withCart(
  ({ cart, subtotal, deliveryCharges }) => {
    const [totalCharges, setTotalCharges] = useState(
      subtotal + deliveryCharges
    );
    const [validPromo, setValidPromo] = useState("");
    const [promo, setPromo] = useState("");

    const handlePromo = () => {
      if (promo === "25OFF") {
        setTotalCharges(totalCharges * 0.75);
        setValidPromo("valid");
      } else {
        setValidPromo("invalid");
      }
      setPromo("");
    };

    return (
      <div className="bg-light py-4 px-5 mx-auto border border-2">
        <h3 className="text-center mb-4">Summary</h3>
        <div className="needs-validation">
          <h6>
            {cart.length} {cart.length === 1 ? "Item" : "Items"}
          </h6>

          <hr />

          <InputField
            label="PROMO CODE:"
            onChange={setPromo}
            value={promo}
            placeholder="Enter promo code"
          />
          <button
            className="btn btn-primary btn-sm d-block w-100"
            onClick={handlePromo}
          >
            Apply
          </button>
          {validPromo === "invalid" && (
            <p className="text-danger text-center m-2">Wrong promo code!</p>
          )}
          {validPromo === "valid" && (
            <p className="text-success text-center m-2">
              Promo code applied successfully!
            </p>
          )}

          <hr />

          <PriceLabel label="SUBTOTAL: " value={subtotal} />
          <PriceLabel label="Delivery Charges: " value={deliveryCharges} />
          <PriceLabel label="TOTAL TO PAY: " bold={true} value={totalCharges} />
        </div>
      </div>
    );
  }
);
