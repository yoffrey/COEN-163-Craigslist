import React, {useState, useEffect} from "react";
import GalleryCard from "./GalleryCard";
import forSale from '../data/forsale.json';

function GalleryView(subCategorySelection) {
    const [gallery, setGallery] = useState(forSale['general']);

    useEffect(() => {
        setGallery(forSale[subCategorySelection.data['item']]);
    }, [subCategorySelection.data]);

    const [itemIndex, setItemIndex] = useState('')

    const handleClick = (index) => {
        setItemIndex(index)
    }

    console.log(gallery)

    return (
        <div className={'gallery-container'}>
            {gallery &&
                Object.entries(gallery)?.map( ([key, value]) => (
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