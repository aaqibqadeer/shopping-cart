import productsList from '../products.json';
import Product from './Product';

export default function Home(props) {
  let products = productsList.arrayOfProducts
  return(
    <div className="container">
      <div className="row">
        {products.map((product, index) =>
          <Product product={product} key={index}/>
        )}
      </div>
    </div>
  )
}