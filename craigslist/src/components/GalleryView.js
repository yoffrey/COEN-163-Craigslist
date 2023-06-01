import React, {useState, useEffect} from "react";
import GalleryCard from "./GalleryCard";

function GalleryView(subCategorySelection) {

    return (
        <>
            {subCategorySelection.data &&
                Object.entries(subCategorySelection.data)?.map( ([key, value]) => (
                <GalleryCard
                    key={key}
                    name={value.name}
                    price={value.price}
                    image={value.image}
                />
            ))}
        </>
    );
}

export default GalleryView;