import Item from "../Item/Item"

const ItemList = ({products})=> {
    return (
        <div className=" container d-flex justify-content-center flex-wrap " style={{gap: "20px", marginTop: "30px", marginBottom: "30px"}}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList