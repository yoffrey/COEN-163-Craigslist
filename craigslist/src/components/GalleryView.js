import GalleryCard from "./GalleryCard";

function GalleryView(subCategorySelection) {
    return (
        <>
            {subCategorySelection.data &&
                Object.entries(subCategorySelection.data)?.map( ([key, value]) => (
                <GalleryCard
                    key={parseInt(key)}
                    name={value.name}
                    price={value.price}
                    image={value.image}
                />
            ))}
        </>
    );
}

export default GalleryView;