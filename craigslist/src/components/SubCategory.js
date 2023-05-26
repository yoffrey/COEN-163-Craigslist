import React, {useState, useEffect} from "react";
import './SubCategory.css';
import GalleryView from './GalleryView';
import forSale from '../data/forsale.json';
import MainMap from './MainMap';
import MainCategory from "./MainCategory";

function SubCategory({category, mapBool}) {
    console.log(category, mapBool);
    const [subCategorySelection, setSubCategorySelection] = useState('general')
    const [showMap, setShowMap] = useState(false);

    const handleClick = (subCategorySelection) => {
        setSubCategorySelection(subCategorySelection['item'])
    }

    return (
        <>
            {!mapBool ? <div className={`sub-category-container ${mapBool ? 'shift-sub-category-container' : ''}`}>
                    {category?.map((item, index) => (
                        <button className='gallery-sidebar-button'
                                key={index}
                                onClick={() => handleClick({item})}>{item}</button>
                    ))}
                </div> : null}
            <div className={`gallery-view-container ${mapBool ? 'shift-gallery-view' : ''}`}>
                <GalleryView  data={forSale[subCategorySelection]} />
            </div>
            <div className={`hidden-map-container ${mapBool ? 'visible-map' : ''}`}>
                <MainMap  />
            </div>
        </>
    );
}

export default SubCategory;