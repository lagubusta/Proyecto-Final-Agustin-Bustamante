import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

import React from "react";

const Item = ({item}) => {
    return(
        <div className='card'>
            <p>Nombre:{item}</p>
            <p>Categoria:</p>
            <p>Price:</p>
            <ItemCount/>
        </div>

    )
}
export default Item;