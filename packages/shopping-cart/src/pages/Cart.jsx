import { useContext } from "react";
import { CartItem } from "./CartItem";
import { arrayOfProducts } from "../products.json";
import { CartContext } from "../App";
import { Link } from 'react-router-dom';

export function Cart(props) {

  const tableHeader = ["Product", "Name", "Price", "Quantity", "Total", "Remove"]
  const tableHeaderList = tableHeader.map(header => <th scope="col"> {header} </th>)

  function getProductInfo(item) {
    return arrayOfProducts.find(product => product.id === item.id)
  }

  function handleQuantity(quantity, id) {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(item => item.id === id)
    updatedCart[productIndex].quantity = quantity;
    updateCart(updatedCart);
  }

  function handleRemove(id) {
    const updatedCart = cart.filter(item => item.id !== id)
    updateCart(updatedCart);
  }

  const {cart, updateCart} = useContext(CartContext);

  
  return(
    <div>
      <div className="table-responsive container table-wrapper">
        <div className="text-end">
          <Link to="/checkout" className="btn btn-primary mb-3">Proceed to Checkout <i class="uil uil-angle-right"></i> </Link>
        </div>
        <table className="table table-striped table-bordered align-middle">
          <thead>
            <tr className="align-middle">
              {tableHeaderList}
            </tr>
          </thead>
          <tbody>
            {cart.map(item => {
              const product = getProductInfo(item)
              return(
                <CartItem quantity={item.quantity} key={product.id} product={product} handleQuantity={handleQuantity} handleRemove={handleRemove} />
              )
            })}
          </tbody>
        </table>
    </div>
    </div>
  )
}