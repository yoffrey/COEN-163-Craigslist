import React, {useState, useEffect} from "react";
import categories from '../data/categories.json';
import './SubCategory.css';
import GalleryView from './GalleryView';

function SubCategory(category) {
    const [subCategory, setSubCategory] = useState(categories['for sale']);

    // Use useEffect to update the subcategory state when the category changes
    useEffect(() => {
        setSubCategory(categories[category.data]);
    }, [category.data]);

    const [subCategorySelection, setSubCategorySelection] = useState('general')

    const handleClick = (subCategorySelection) => {
        setSubCategorySelection(subCategorySelection)
    }

    return (
        <div className={'gallery-sub-category-container'}>
            <div className={'sub-category-container'}>
                {subCategory?.map((item, index) => (
                    <button className='gallery-sidebar-button'
                            key={index}
                            onClick={() => handleClick({item})}>{item}</button>
                ))}
            </div>
            <div>
                <GalleryView data={subCategorySelection} />
            </div>
        </div>
    );
}

export default SubCategory