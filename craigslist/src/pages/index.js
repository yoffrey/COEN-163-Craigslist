import React from 'react';
import { Link } from "react-router-dom";
import MainCategory from "../components/MainCategory";
import './index.css';

function Home({ setShowBrowse, onStateChange }){
    const onClickBrowse = () => {
        onStateChange(true);
    }

    return (
        <>
            <div className={'home-button-container'}>
                <button className={'browse-button'} onClick={onClickBrowse}>Browse</button>
                <Link to={'/upload'} >
                    <button className={'browse-button'}>Upload</button>
                </Link>
            </div>
            <div className={`hidden-browse-container ${setShowBrowse ? 'visible-browse' : ''}`}>
                {<MainCategory />}
            </div>
        </>
    );
}

export default Home;