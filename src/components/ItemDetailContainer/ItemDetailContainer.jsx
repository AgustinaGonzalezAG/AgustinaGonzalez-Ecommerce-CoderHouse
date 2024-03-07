import { useEffect, useState } from "react"
import { getProductsById } from "../../../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ()=> {
    const [products, setProducts] = useState(null)
    const {itemId} = useParams()
    
    useEffect(()=>{
        getProductsById(itemId)
        .then(response=>{
            setProducts(response)
        })
        .catch((error)=>{console.log(error)})
    }, [itemId])
    return (
        <div className="d-flex justify-content-center flex-column mt-4 mb-4">
            <ItemDetail {...products} />
        
        </div>
    )
}

export default ItemDetailContainer