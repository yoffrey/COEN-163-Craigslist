import React, {useState, useEffect} from "react";
import GalleryCard from "./GalleryCard";
import forSaleGeneral from '../data/forsale_general.json';
import {generatePath} from "react-router-dom";

function GalleryView(subCategorySelection) {
    const [gallery, setGallery] = useState(forSaleGeneral['general']);

    useEffect(() => {
        setGallery(forSaleGeneral[subCategorySelection.data]);
        console.log(subCategorySelection.data);
        console.log(gallery);
    }, [subCategorySelection.data]);

    const [itemIndex, setItemIndex] = useState('')

    const handleClick = (index) => {
        setItemIndex(index)
    }

    return (
        <div className={'gallery-container'}>
            {/*<GalleryCard*/}
            {/*    name='test'*/}
            {/*    price='100'*/}
            {/*    image='https://images.craigslist.org/00f0f_4yFqSChli8m_0CI0t2_300x300.jpg' />*/}
            {Object.entries(gallery).map( ([key, value]) => (
                <GalleryCard
                    name={value.name}
                    price={value.price}
                    image={value.image}
                />
            ))}
        </div>
    );
}

export default GalleryView;