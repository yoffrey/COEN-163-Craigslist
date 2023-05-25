import React, {useState, useEffect} from "react";
import './SearchFilter.css';

function SearchFilter() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className={'dropdown'}>
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
        </div>
    );
}

export default SearchFilter;