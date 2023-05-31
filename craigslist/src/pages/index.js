import React, {useState} from 'react';
import { Link } from "react-router-dom";
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

    return (
        <>
            <div className={'home-button-container'}>
                {showBrowseButton ? <button className={'browse-button'} onClick={onClickBrowse}>Browse</button>: null}
                {showUploadButton ? <Link to={'/upload'} className={'browse-button'}>Upload</Link>: null}
            </div>
            <div className={`hidden-browse-container ${showBrowse ? 'visible-browse' : ''}`}>
                {<MainCategory />}
            </div>
        </>
    );
}

export default Home;