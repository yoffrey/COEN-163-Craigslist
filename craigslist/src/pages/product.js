import React, {useState} from 'react';
import bike from '../images/bike.jpeg';
import front from '../images/front.jpeg';
import back from '../images/back.jpeg';
import './product.css';


const Product = ()  => {
    const [imageChoice, setImageChoice] = useState(bike);

    const handlePrevious = () => {
        if (imageChoice === bike) {
            setImageChoice(back);
        }
        else {
            setImageChoice(front)
        }
    }

    const handleNext = () => {
        if (imageChoice === bike) {
            setImageChoice(front);
        }
        else {
            setImageChoice(back)
        }
    }

    return (
        <div className="product-container">
            <div className="image-container">
                <img src={imageChoice} alt="Product Image" />
                    <button id="prev-button" className="nav-button" onClick={handlePrevious}>Previous</button>
                    <button id="next-button" className="nav-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Product;