import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { arrayOfProducts } from "../products.json";
import { CartContext } from "../App";
import { Link } from 'react-router-dom';
import { TableWrapper } from '../style/CartStyle';

export function Cart(props) {

  const tableHeader = ["Product", "Name", "Price", "Quantity", "Total", "Remove"]
  const tableHeaderList = tableHeader.map(header => <th key={header} scope="col"> {header} </th>)
  let price=0;
  const history = useHistory();

  function getProductInfo(id) {
    return arrayOfProducts.find(product => product.id === id)
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

  const proceedToCheckout = () => {
    if(cart.length>0) {
      cart.forEach(item => {
        const product = getProductInfo(item.id)
        price += (product.price * item.quantity)
      })
      history.push({
        pathname: '/checkout',
        state: { subtotal: price }
      });
    }
  }

  const {cart, updateCart} = useContext(CartContext);

  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    if(cart.length>0) {
      const tempCart = cart.map(item => ({
        quantity:item.quantity,
        product:getProductInfo(item.id)
      }))
      setCartList(tempCart);
    }
  }, [cart]);
  
  const CartItems = () => cartList.map(({quantity, product}) => <CartItem quantity={quantity} key={product.id} product={product} handleQuantity={handleQuantity} handleRemove={handleRemove} />)
  
  return(
    <div className="container">
      <div className="text-end">
        <button onClick={proceedToCheckout} className="btn btn-primary mb-3">Proceed to Checkout <i className="uil uil-angle-right"></i> </button>
      </div>
      <div className="table-responsive">
        <TableWrapper>
          <table className="table table-striped table-bordered align-middle">
            <thead>
              <tr className="align-middle">
                {tableHeaderList}
              </tr>
            </thead>
            <tbody>
              <CartItems/>
            </tbody>
          </table>
        </TableWrapper>
      </div>
    </div>
  )
}