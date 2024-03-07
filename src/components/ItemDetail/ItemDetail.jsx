import ItemCount from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetail.css'
import {Link} from 'react-router-dom'
 
const ItemDetail = ({ name, price, img, stock, description})=>{
    return (
        <div className="card" style={{margin: "0 auto"}}>
        <div className="img-container">
          <img src={img} className="card-img-top" alt="Product" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <hr />
          <p className="card-text text-center">{description}</p>
         
              <h4 className="card-text text-center mb-2">${price}</h4>
          <div className="d-flex justify-content-between align-items-center">
              <div style={{width: "100%"}}>
              <ItemCount initial={1} stock={stock} />
              <Link to='/'>
              <button className="btn btn-primary mt-2" style={{width: "100%"}}>Volver</button>
              </Link>
              </div>
          </div>
        </div>
      </div>
    )
}

export default ItemDetail