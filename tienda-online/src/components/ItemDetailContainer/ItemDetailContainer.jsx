import React from "react";
import ItemDeatil from "./ItemDeatil";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const { id } = useParams();
    console.log(id);
    const data = {
        name: "Iphone",
        category: "Smartphone",
        price: 800,

    }
    return (
        <div>
            {
                <ItemDeatil item={data} />
            }
        </div>
    )
}
export default ItemDetailContainer;