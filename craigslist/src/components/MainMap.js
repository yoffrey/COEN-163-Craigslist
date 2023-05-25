import React, {useState, useEffect} from "react";
import './MainCategory.css';
import SubMap from "./SubMap";

function MainMap() {
    const [category, setMap] = useState('for sale')

    const handleClick = (category) => {
        setMap(category)
    }

    return (
        <>
            <div>hi</div>
        </>
    );

}

export default MainMap;