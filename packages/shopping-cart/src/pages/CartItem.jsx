function CartItem(props) {

  function handleQuantity(event) {
    props.handleQuantity(event.target.value, props.product.id)
  }

  function handleRemove() {
    props.handleRemove(props.product.id)
  }

  
  return(
    <tr className="align-middle">
      <td> <img src={props.product.imgUrl} alt="" style={{width: "12rem"}} /> </td>
      <td> <h6>{props.product.name}</h6> </td>
      <td> ${props.product.price} </td>
      <td> <input type="number" value={props.quantity} onChange={handleQuantity} style={{width: "3rem"}}/> </td>
      <td> ${props.product.price*props.quantity} </td>
      <td> <button onClick={handleRemove} className="btn"> <i className="uil uil-multiply"></i> </button> </td>
    </tr>
  )
}

export default CartItem;