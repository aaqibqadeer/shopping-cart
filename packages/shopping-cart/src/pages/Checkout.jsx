import { useState } from "react";
import { SelectField, InputField, CheckoutSummary } from "../components";
import { useHistory, useLocation } from "react-router-dom";

export const Checkout = () => {
  const paymentOptions = [{ label: "Cash on delivery", value: "COD" }];

  const countries = [
    { label: "Pakistan", value: "pk" },
    { label: "United Kingdom", value: "uk" },
    { label: "United States", value: "us" },
    { label: "India", value: "ind" },
    { label: "United Arab Emirates", value: "uae" },
  ];

  const history = useHistory();
  const location = useLocation();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("pk");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/order-success");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="bg-light py-4 px-5 mx-auto border border-2">
            <h3 className="text-center mb-4">Checkout</h3>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <InputField
                label="FULL NAME"
                placeholder="Enter your full name"
                value={name}
                onChange={setName}
              />

              <SelectField
                label="COUNTRY:"
                value={country}
                options={countries}
                handleChange={setCountry}
              />

              <InputField
                name="address"
                label="ADDRESS"
                placeholder="Enter your address"
                value={address}
                onChange={setAddress}
              />

              <InputField
                name="number"
                label="NUMBER"
                placeholder="Enter your Phone number"
                value={number}
                onChange={setNumber}
              />

              <SelectField
                name="paymentMethod"
                label="PAYMENT METHOD:"
                value={paymentMethod}
                options={paymentOptions}
                handleChange={setPaymentMethod}
              />

              <div className="text-center">
                <button className="btn btn-success px-4 py-2 m-2">
                  PLACE ORDER
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-4">
          <CheckoutSummary
            subtotal={location.state.subtotal}
            deliveryCharges={2}
          />
        </div>
      </div>
    </div>
  );
};
