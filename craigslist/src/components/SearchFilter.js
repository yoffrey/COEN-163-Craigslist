import React, {useState, useEffect} from "react";
import './SearchFilter.css';
import './Dropdown';
import Dropdown from "./Dropdown";

function SearchFilter() {
    const distance = [
        {value: "5 min", label: "5 min"},
        {value: "15 min", label: "15 min"},
        {value: "30 min", label: "30 min"},
        {value: "1 hour", label: "1 hour"},
        {value: "2 hours", label: "2 hours"}
    ];

    const colors = [
        {value: "red", label: "Red"},
        {value: "orange", label: "Orange"},
        {value: "yellow", label: "Yellow"},
        {value: "green", label: "Green"},
        {value: "blue", label: "Blue"},
        {value: "purple", label: "Purple"},
        {value: "white", label: "White"},
        {value: "brown", label: "Brown"},
        {value: "black", label: "Black"},
        {value: "all", label: "All"}
    ]

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <div >
                Distance
                <Dropdown placeHolder={'15 min'} options={distance}/>
            </div>

            <div>
                color
                <Dropdown placeHolder={'All'} options={colors}/>
            </div>
        </>
    );
}

export default SearchFilter;