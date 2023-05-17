import React, {useState} from 'react';
import MainCategory from "../components/MainCategory";
import SubCategory from "../components/SubCategory";

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
        <div className={'search-browse-container'}>
            <div className={`search-bar-container ${showBrowse ? 'visible-search' : ''}`}>
                <input className={'search-input'} type={'text'} placeholder={'Search here'} onChange={handleChange} value={searchInput} />
            </div>
            {showBrowseButton ? <button onClick={onClick}>Browse</button>: null}
            <div className={`browse-container ${showBrowse ? 'visible-browse' : ''}`}>
                {showBrowse && <MainCategory />}
            </div>
        </div>
    );
}

export default Home;