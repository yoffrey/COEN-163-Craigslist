import './GalleryCard.css';

function GalleryCard({name, price, image}) {
    return (
        <div className={'gallery-card-container'}>
            <div className={'image-wrapper'}>
                <img className={'gallery-card-image-container'} src={image} alt={name} />
            </div>
            <div className={'card-product-name'}>{name}</div>
            <div className={'card-product-price'}>{price}</div>
        </div>
    );
}

export default GalleryCard;