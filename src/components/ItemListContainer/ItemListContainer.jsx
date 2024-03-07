import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])
    return(
        <div className="contenedor mb-4">
            <div className="background-container">
                <div className="text-overlay">
                    <h1>{greeting}</h1>
                    <button className="catalog-button">Ver catálogo</button>
                </div>
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
