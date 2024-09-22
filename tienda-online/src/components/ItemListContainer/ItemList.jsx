import './ItemList.css';
import React from "react";
import Item from "./Item";


const ItemList = ( {items} ) => {
    
    return (
        <div className="itemStyle">
            {items.map(el => (
                <Item item={el}/>
            ))}
            
        </div>
    )
}

export default ItemList;