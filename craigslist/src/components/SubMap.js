import React, {useState, useEffect} from "react";
import './SubMap.css';
import GalleryView from './GalleryView';
import forSale from '../data/forsale.json';

function SubMap(map) {
    const [subMapSelection, setSubMapSelection] = useState('general')

    const handleClick = (subMapSelection) => {
        setSubMapSelection(subMapSelection['item'])
    }

    return (
        <div className={'gallery-sub-map-container'}>
            <div className={'sub-map-container'}>
                {map.data?.map((item, index) => (
                    <button className='gallery-sidebar-button'
                            key={index}
                            onClick={() => handleClick({item})}>{item}</button>
                ))}
            </div>
            <div className={'gallery-view-container'}>
                <GalleryView data={forSale[subMapSelection]} />
            </div>
        </div>
    );
}

export default SubMap