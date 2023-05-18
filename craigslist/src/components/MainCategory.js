import React, {useState, useEffect} from "react";
import './MainCategory.css';
import SubCategory from "./SubCategory";
import categories from '../data/categories.json';

function MainCategory() {
    const [category, setCategory] = useState('for sale')

    const handleClick = (category) => {
        setCategory(category)
    }

    return (
        <div>
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
            <div>
                Hi
            </div>
            <div>
                <SubCategory data={categories[category]} />
            </div>
        </div>

    );

}

export default MainCategory;