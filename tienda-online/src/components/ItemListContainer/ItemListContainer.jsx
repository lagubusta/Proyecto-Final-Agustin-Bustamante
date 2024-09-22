
import './ItemListContainer.css';

import React from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {categoryID} = useParams();
    if(categoryID){
        //filtro
    } else{
        // muestro todo
    };
    const array = [1,2,3,4,5,6];
    return (
        <div className="container">
            <ItemList items= {array}  />
        </div>
    )
}

export default ItemListContainer;