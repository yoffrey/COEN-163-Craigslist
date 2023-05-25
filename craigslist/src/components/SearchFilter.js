import React, {useState, useEffect} from "react";
import './SearchFilter.css';

function SearchFilter() {

    const [open, setOpen] = React.useState(false);
    const [showMap, setShowMap] = useState(false);
    const [showMapButton, setShowMapButton] = useState(true);

    const onClickMap = () => {
        setShowMap(true);
        setShowMapButton(false);
    }
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className={'dropdown'}>
            {showMapButton ? <button className={'browse-button'} onClick={onClickMap}>Map</button>: null}
            <button onClick={handleOpen}>Dropdown</button>
            {open ? (
                <ul className="menu">
                    <li className="menu-item">
                        <button>Menu 1</button>
                    </li>
                    <li className="menu-item">
                        <button>Menu 2</button>
                    </li>
                </ul>
            ) : null}
            {open ? <div>Is Open</div> : <div>Is Closed</div>}
        </div>
    );
}

export default SearchFilter;