import React, {useState} from 'react';
import MainCategory from "../components/MainCategory";

function Home(){
    const [searchInput, setSearchInput] = useState("");
    const [showBrowse, setShowBrowse] = useState(false);
    const [showBrowseButton, setShowBrowseButton] = useState(true);
    const onClick = () => {
        setShowBrowse(true);
        setShowBrowseButton(false);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }
    return (
        <div className={'page-area'}>
            <div className={`hidden-search-bar-container ${showBrowse ? 'visible-search' : ''}`}>
                <input className={'search-input'} type={'text'} placeholder={'try: car newer than 2010 with less than 100,000 miles within 20 miles from me'} onChange={handleChange} value={searchInput} />
                <div>
                    {showBrowseButton ? <button className={'browse-button'} onClick={onClick}>Browse</button>: null}
                </div>
            </div>
            <div className={`hidden-browse-container ${showBrowse ? 'visible-browse' : ''}`}>
                {<MainCategory />}
            </div>
        </div>
    );
}

export default Home;