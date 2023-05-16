import './GalleryCard.css';

function GalleryCard({name, price, image}) {
    return (
        <div className={'gallery-card-container'}>
            <img className={'gallery-card-image-container'} src={image} alt={name} />
            <h4>{name}</h4>
            <h5>{price}</h5>
        </div>
    );
}

export default GalleryCard;