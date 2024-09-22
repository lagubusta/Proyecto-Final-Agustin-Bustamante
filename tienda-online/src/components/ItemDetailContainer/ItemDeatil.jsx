import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
const ItemDeatil = ({item}) => {
  return (
    <div>
        <h3>Esto es el detalle</h3>
        <p>name: {item.name} </p>
        <p>categoria: {item.category} </p>
        <p>price: {item.price}  </p>
        <ItemCount/>
    </div>
  )
}

export default ItemDeatil