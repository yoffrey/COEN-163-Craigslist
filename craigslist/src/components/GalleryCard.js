import './GalleryCard.css';
import { Link } from "react-router-dom";

function GalleryCard({key, name, price, image}) {
    return (
        <div className={'gallery-card-container'} >
            <Link to={'/product'} >
                <div className={'image-wrapper'}>
                    <img className={'gallery-card-image-container'} src={image} alt={name} />
                </div>
                <div className={'card-product-name'}>{name}</div>
                <div className={'card-product-price'}>{price}</div>
            </Link>

        </div>
    );
}

export default GalleryCard;