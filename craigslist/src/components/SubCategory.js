import React, {useState, useEffect} from "react";
import './SubCategory.css';
import GalleryView from './GalleryView';
import forSale from '../data/forsale.json';

function SubCategory(category) {
    const [subCategorySelection, setSubCategorySelection] = useState('general')

    const handleClick = (subCategorySelection) => {
        setSubCategorySelection(subCategorySelection['item'])
    }

    return (
        <>
            <div className={'sub-category-container'}>
                {category.data?.map((item, index) => (
                    <button className='gallery-sidebar-button'
                            key={index}
                            onClick={() => handleClick({item})}>{item}</button>
                ))}
            </div>
                <GalleryView data={forSale[subCategorySelection]} />
        </>
    );
}

export default SubCategory