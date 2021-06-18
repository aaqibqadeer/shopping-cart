import "../style/css/CartItem.css";

export const CartItem = ({
  product,
  quantity,
  handleQuantity: updateQuantity,
}) => {
  const handleQuantity = (event) => {
    updateQuantity(event.target.value, product.id);
  };

  const handleRemove = () => handleRemove(product.id);

  return (
    <tr className="align-middle">
      <td>
        <img src={product.imgUrl} alt="" className="img-width" />
      </td>
      <td>
        <h6>{product.name}</h6>
      </td>
      <td> ${product.price} </td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantity}
          className="input-width"
        />
      </td>
      <td> ${product.price * quantity} </td>
      <td>
        <button onClick={handleRemove} className="btn">
          <i className="uil uil-multiply"></i>
        </button>
      </td>
    </tr>
  );
};
