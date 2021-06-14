import { useContext, useState } from 'react';
import { CartContext } from "../App";

export function Product(props) {

  const {cart, addToCart, updateCart} = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  function handleUpdate() {
    const product = {id:props.id, quantity:1}
    setIsAddedToCart(true);
    addToCart(product)
  }

  function handleRemove() {
    const updatedCart = cart.filter(item => item.id !== props.id)
    updateCart(updatedCart);
    setIsAddedToCart(false);
  }

  return(
    <div className="card col-3">
      <img src={props.product.imgUrl} style={{width: "12rem"}} className="mx-auto d-block card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{"minHeight": "3rem"}}> {props.product.name} </h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <p className="card-text fw-bold"> Price: ${props.product.price} </p>
        { props.authStatus && !isAddedToCart && <button onClick={handleUpdate} className="btn btn-sm btn-success mx-auto d-block">Add to cart</button>}
        { props.authStatus && isAddedToCart &&  <button onClick={handleRemove} className="btn btn-sm btn-success mx-auto d-block">Remove from cart</button>}
      </div>
    </div>
  )
}