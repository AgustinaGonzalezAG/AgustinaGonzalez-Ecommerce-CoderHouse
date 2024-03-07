import {Link} from 'react-router-dom'
const Item = ({id, name, img, price, stock }) => {
    return (

        <div className="card " style={{ width: "20rem", height: "25rem" }}>
            <div className="img-container" style={{  height:"100%", overflow: "hidden" }}>
                <img src={img} className="card-img-top" alt="..." style={{ width: "100%", height: "100%", overflow:"cover"}} />
            </div>  
            <div className="card-body text-center" >
                <hr />
                <h3 className="card-title">{name}</h3>
                <div className="d-flex justify-content-around">

                <h5 className="card-text"> ${price}</h5>
                <p className="card-text">Stock disponible: {stock}</p>
                </div>
        <Link to={`/item/${id}`}>
                <button className="btn btn-primary">Ver detalles</button>
        </Link>
            </div>

        </div>

    )
}
export default Item