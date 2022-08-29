import React from "react";
import './Product.css'
const Product = (props) => {
    return(
        <div className="product">
            <label>{props.name}</label><br />
            <label>{props.rate}</label>
            <img src={props.image} />
        </div>
    );
    
}
export default Product