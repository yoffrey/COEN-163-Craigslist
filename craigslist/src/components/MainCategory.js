import React, {useState, useEffect} from "react";
import './MainCategory.css';
import SearchFilter from "./SearchFilter";
import SubCategory from "./SubCategory";
import categories from '../data/categories.json';

function MainCategory() {
    const [category, setCategory] = useState('for sale')
    const [showMap, setShowMap] = useState(false);
    const [mapBrowseText, setMapBrowseText] = useState('Map');

    const onClickMap = () => {
        setShowMap(!showMap);
        if (showMap) {
            setMapBrowseText('Browse')
        }
        else {
            setMapBrowseText('Map')
        }
    }

    const handleClick = (category) => {
        setCategory(category)
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
            <div className={'filter-container'}>
                <button className={'browse-button'} onClick={onClickMap}>{mapBrowseText}</button>
                <SearchFilter />
            </div>
            <div className={'gallery-sub-category-container'}>
                <SubCategory data={categories[category]} />
            </div>
        </>
    );

}

export default MainCategory;