import React, {useState, useEffect} from "react";
import GalleryCard from "./GalleryCard";

function GalleryView(subCategorySelection) {
    const [itemIndex, setItemIndex] = useState('');

    const handleClick = (index) => {
        setItemIndex(index)
    }

    return (
        <div className={'gallery-view-container'}>
            {subCategorySelection.data &&
                Object.entries(subCategorySelection.data)?.map( ([key, value]) => (
                <GalleryCard
                    key={key}
                    name={value.name}
                    price={value.price}
                    image={value.image}
                />
            ))}
        </div>
    );
}

export default GalleryView;