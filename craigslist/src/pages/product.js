import React, {useState} from 'react';
import './product.css';

function Product() {
    return (
        <div className="product-container">
            <div className="image-container">
                <img id="product-image" src={process.env.PUBLIC_URL  + "../bike.jpeg"} alt="Product Image" />
                    <button id="prev-button" className="nav-button">Previous</button>
                    <button id="next-button" className="nav-button">Next</button>
            </div>
        </div>
    );
}

export default Product;