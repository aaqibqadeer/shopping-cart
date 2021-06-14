import { useContext, useEffect, useState } from "react";
import { CartItem } from "../components/CartItem";
import { arrayOfProducts } from "../products.json";
import { CartContext } from "../App";
import { Link } from 'react-router-dom';
import { TableWrapper } from '../style/CartStyle';

export function Cart(props) {

  const tableHeader = ["Product", "Name", "Price", "Quantity", "Total", "Remove"]
  const tableHeaderList = tableHeader.map(header => <th key={header} scope="col"> {header} </th>)

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

  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    if(cart.length>0) {
      const tempCart = cart.map(item => ({
        quantity:item.quantity,
        product:getProductInfo(item)
      }))
      setCartList(tempCart);
    }
  }, [cart]);
  
  const CartItems = () => cartList.map(({quantity, product}) => <CartItem quantity={quantity} key={product.id} product={product} handleQuantity={handleQuantity} handleRemove={handleRemove} />)
  
  return(
    <div className="container">
      <div className="text-end">
        <Link to="/checkout" className="btn btn-primary mb-3">Proceed to Checkout <i className="uil uil-angle-right"></i> </Link>
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