import React, {useState} from 'react';
import MainCategory from "../components/MainCategory";
import './index.css';
import MainMap from '../components/MainMap';

function Home(){
    const [showBrowse, setShowBrowse] = useState(false);
    const [showBrowseButton, setShowBrowseButton] = useState(true);
    const [showUpload, setShowUpload] = useState(false);
    const [showUploadButton, setShowUploadButton] = useState(true);
    const [showMap, setShowMap] = useState(false);
    const [showMapButton, setShowMapButton] = useState(true);
    const onClickBrowse = () => {
        setShowBrowse(true);
        setShowBrowseButton(false);
        setShowUploadButton(false);
    }

    const onClickUpload = () => {
        setShowUpload(true);
        setShowBrowseButton(false);
        setShowUploadButton(false);
        setShowMapButton(false);
    }

    const onClickMap = () => {
        setShowMap(true);
        setShowBrowseButton(false);
        setShowUploadButton(false);
        setShowMapButton(false);
    }

    return (
        <>
            <div className={'home-button-container'}>
                {showBrowseButton ? <button className={'browse-button'} onClick={onClickBrowse}>Browse</button>: null}
                {showUploadButton ? <button className={'browse-button'} onClick={onClickUpload}>Upload</button>: null}
            </div>
            <div className={`hidden-browse-container ${showBrowse ? 'visible-browse' : ''}`}>
                {<MainCategory />}
            </div>
            <div className={`hidden-map-container ${showMap ? 'visible-map' : ''}`}>
                {<MainMap />}
            </div>
        </>
    );
}

export default Home;