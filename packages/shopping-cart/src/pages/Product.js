export default function Product(props) {

  return(
    <div className="card col-3" style={{width: "18rem"}}>
      <img src={props.product.imgUrl} style={{width: "12rem"}} className="mx-auto d-block card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{"minHeight": "3rem"}}> {props.product.name} </h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <p className="card-text fw-bold"> Price: ${props.product.price} </p>
        { props.authStatus && <a href="/" className="btn btn-sm btn-success mx-auto d-block">Add to cart</a>}
      </div>
    </div>
  )
}