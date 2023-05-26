import React, {useState} from 'react';
import MainCategory from "../components/MainCategory";
import './index.css';

function Home(){
    const [showBrowse, setShowBrowse] = useState(false);
    const [showBrowseButton, setShowBrowseButton] = useState(true);
    const [showUpload, setShowUpload] = useState(false);
    const [showUploadButton, setShowUploadButton] = useState(true);

    const onClickBrowse = () => {
        setShowBrowse(true);
        setShowBrowseButton(false);
        setShowUploadButton(false);
    }

    const onClickUpload = () => {
        setShowUpload(true);
        setShowBrowseButton(false);
        setShowUploadButton(false);
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
        </>
    );
}

export default Home;