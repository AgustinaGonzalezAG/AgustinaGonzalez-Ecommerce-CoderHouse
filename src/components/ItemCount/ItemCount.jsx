import { useState } from "react"
import '../ItemCount/ItemCount.css'
const ItemCount = ({ initial = 1, stock }) => {
    const [quantity, SetQuantity] = useState(initial)

    const increment = ()=> {
        if(quantity < stock) {
            SetQuantity(quantity+1)
        }
    }
    const decrement = ()=> {
        if(quantity > 1) {
            SetQuantity(quantity -1 )
        }
    }
    return (
        <div className="item-count-container">
      <div className="quantity-controls" style={{width: "100%"}}>
        <button className="decrement-btn" onClick={decrement}>
          -
        </button>
        <div className="quantity-box">
          <p className="quantity">{quantity}</p>
        </div>
        <button className="increment-btn" onClick={increment}>
          +
        </button>
      </div>
      <div style={{width:"100%", marginTop: "5px"}}>
      <button className="btn add-to-cart-btn" style={{width: "100%"}}>
        <i className="fa-solid fa-cart-shopping" style={{ color: "#ffffff" }} />
      </button>
      </div>
    </div>
    )
}

export default ItemCount