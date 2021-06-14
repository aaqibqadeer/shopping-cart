export function PriceLabel(props) {
  
  return(
    <div className="d-flex">
      <p className={props.bold ? "price-label fw-bold":"price-label"}>{props.label} </p>
      <p className={props.bold? 'price-value ms-auto fw-bold':'price-value ms-auto'}>${props.value}</p>
    </div>
  )
}