import React, {useState, useEffect} from "react";
import './MainCategory.css';
import SubMap from "./SubMap";

function MainMap() {
    const [category, setMap] = useState('for sale')

    const handleClick = (category) => {
        setMap(category)
    }

    return (
        <>
            <div className={'main-category-container'}>
                <button className='main-category-button'
                        onClick={() => handleClick('community')}>Community</button>
                <button className='main-category-button'
                        onClick={() => handleClick('services')}>Services</button>
                <button className='main-category-button'
                        onClick={() => handleClick('housing')}>Housing</button>
                <button className='main-category-button'
                        onClick={() => handleClick('for sale')}>For Sale</button>
                <button className='main-category-button'
                        onClick={() => handleClick('jobs')}>Jobs</button>
                <button className='main-category-button'
                        onClick={() => handleClick('gigs')}>Gigs</button>
            </div>
        </>
    );

}

export default MainMap;