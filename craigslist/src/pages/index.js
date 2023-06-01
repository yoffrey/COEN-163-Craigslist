import React, {useState} from 'react';
import { Link } from "react-router-dom";
import MainCategory from "../components/MainCategory";
import './index.css';

function Home({setShowBrowse}){
    const [showBrowseButton, setShowBrowseButton] = useState(true);
    const [showUploadButton, setShowUploadButton] = useState(true);
    const [localShowBrowse, setLocalShowBrowse] = useState(setShowBrowse);


    const onClickBrowse = () => {
        setLocalShowBrowse(true);
        setShowBrowseButton(false);
        setShowUploadButton(false);
    }

    return (
        <>
            <div className={'home-button-container'}>
                {showBrowseButton ? <button className={'browse-button'} onClick={onClickBrowse}>Browse</button>: null}
                {showUploadButton ? <Link to={'/upload'} >
                    <button className={'browse-button'}>Upload</button>
                </Link>: null}
            </div>
            <div className={`hidden-browse-container ${setShowBrowse || localShowBrowse ? 'visible-browse' : ''}`}>
                {<MainCategory />}
            </div>
        </>
    );
}

export default Home;