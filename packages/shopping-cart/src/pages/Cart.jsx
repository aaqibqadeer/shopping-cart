import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartItem } from "../components";
import { TableWrapper } from "../style/CartStyle";
import { useProductsHook } from "../utils/api";
import { combineHOCs } from "../helper";
import { withAuth, withCart } from "../store";
import { Overlay } from "../AppStyle.jsx";

const withHocs = combineHOCs(withAuth, withCart);

export const Cart = withHocs(({ authStatus, cart, updateCart }) => {
  const tableHeader = [
    "Product",
    "Name",
    "Price",
    "Quantity",
    "Total",
    "Remove",
  ];

  const { res, getProducts, products } = useProductsHook();
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (cart.length > 0 && !isProductEmpty()) {
      const tempCart = cart.map((item) => ({
        quantity: item.quantity,
        product: getProductInfo(item._id),
      }));
      setCartList(tempCart);
    }
  }, [cart, products]);

  const history = useHistory();

  const TableHeaderList = () =>
    tableHeader.map((header) => (
      <th key={header} scope="col">
        {header}
      </th>
    ));

  const isProductEmpty = () => Object.keys(products).length === 0;

  const getProductInfo = (_id) =>
    products.find((product) => product._id === _id);

  const handleQuantity = (quantity, _id) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item._id === _id);
    updatedCart[productIndex].quantity = quantity;
    updateCart(updatedCart);
  };

  const handleRemove = (_id) => {
    const updatedCart = cart.filter((item) => item._id !== _id);
    updateCart(updatedCart);
  };

  const proceedToCheckout = (e) => {
    e.preventDefault();
    if (!authStatus) {
      alert("Please login first in order to checkout");
      history.push({
        pathname: "/login",
      });
    } else {
      let price = 0;
      if (cart.length > 0) {
        cart.forEach((item) => {
          const product = getProductInfo(item._id);
          price += product.price * item.quantity;
        });
        history.push({
          pathname: "/checkout",
          state: { subtotal: price, cart: cart },
        });
      }
    }
  };

  const CartItems = () => {
    return cartList.map(({ quantity, product }) => (
      <CartItem
        quantity={quantity}
        key={product._id}
        product={product}
        handleQuantity={handleQuantity}
        handleRemove={handleRemove}
      />
    ));
  };

  return (
    <div className="container">
      {res.loading && (
        <Overlay>
          <div className="d-flex justify-content-center">
            <div className="spinner-border m-5 p-5" role="status"></div>
          </div>
        </Overlay>
      )}
      {!res.loading && cart.length > 0 && (
        <div>
          <div className="text-end">
            <button
              onClick={proceedToCheckout}
              className="btn btn-primary mb-3"
            >
              Proceed to Checkout <i className="uil uil-angle-right"></i>{" "}
            </button>
          </div>
          <div className="table-responsive">
            <TableWrapper>
              <table className="table table-striped table-bordered align-middle">
                <thead>
                  <tr className="align-middle">
                    <TableHeaderList />
                  </tr>
                </thead>
                <tbody>
                  <CartItems />
                </tbody>
              </table>
            </TableWrapper>
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <div className="text-center">
          <h1>Cart is empty</h1>
          <h5>Please add products in the cart</h5>
        </div>
      )}
    </div>
  );
});
