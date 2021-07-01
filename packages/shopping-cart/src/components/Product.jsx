import { useState, useEffect } from "react";
import { combineHOCs } from "../helper";
import { withAuth, withCart } from "../store";
import "../style/css/Product.css";

const withHocs = combineHOCs(withAuth, withCart);

export const Product = withHocs(
  ({ id, product, cart, addToCart, updateCart }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleUpdate = () => {
      const product = { _id: id, quantity: 1 };
      setIsAddedToCart(true);
      addToCart(product);
    };

    const handleRemove = () => {
      const updatedCart = cart.filter((item) => item._id !== id);
      updateCart(updatedCart);
      setIsAddedToCart(false);
    };

    useEffect(() => {
      const addedToCart = cart.find(({ _id: itemId }) => itemId === id);
      if (addedToCart) {
        setIsAddedToCart(true);
      }
    }, [cart, id]);

    return (
      <div className="card col-3">
        <img
          src={product.imgUrl}
          className="mx-auto d-block card-img-top img-width"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title heading-height"> {product.name} </h5>
          {/* <p className="card-text">Some quick example text.</p> */}
          <p className="card-text fw-bold"> Price: ${product.price} </p>
          {!isAddedToCart && (
            <button
              onClick={handleUpdate}
              className="btn btn-sm btn-success mx-auto d-block"
            >
              Add to cart
            </button>
          )}
          {isAddedToCart && (
            <button
              onClick={handleRemove}
              className="btn btn-sm btn-success mx-auto d-block"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    );
  }
);
