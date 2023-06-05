import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DragDropFile from "../components/DragDropFile";
import './index.css';
import './post.css';

function Post(){
    const [input, setInput] = useState('');
    const [tags, setTags] = useState(['orange', 'motorcycle', 'new', '2014', 'white', 'black']);
    const [isKeyReleased, setIsKeyReleased] = useState(false);
    const navigate = useNavigate();
    const [addLocation, setAddLocation] = useState(false);
    const [addressInput, setAddressInput] = useState('');

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if (key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }

        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
            e.preventDefault();
            setTags(tagsCopy);
            setInput(poppedTag);
        }

        setIsKeyReleased(false);
    };

    const onKeyUp = () => {
        setIsKeyReleased(true);
    }

    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const onLocationKeyDown = (e) => {
        if (e.key === 'Enter') {
            setAddLocation(true);
            setAddressInput('');
        }
    }

    const handleAddressChange = (e) => (
        setAddressInput(e.value)
    )

    return (
        <div className={'post-page-container'}>
            <div className={'post-container'}>
                <div className={'inner-post-container'}>
                    <div className={'title-price-container'}>
                        <div className={'title'}>
                            <div className={'post-labels'}>Posting Title</div>
                            <input
                                className={'post-input'}
                                type="text"
                                name="title"
                            />
                        </div>
                        <div className={'price'}>
                            <div className={'post-labels'}>Price</div>
                            <input
                                className={'post-input'}
                                type="text"
                                name="price"
                            />
                        </div>
                    </div>
                    <div className={'post-labels'}>Description</div>
                    <input
                        className={'description-input'}
                        type="text"
                        name="title"
                    />
                    <div className={'post-labels'}>Tags</div>
                    <input
                        value={input}
                        className={'post-input'}
                        placeholder="  Enter a tag"
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        onChange={onChange}
                    />
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <div className="tag">
                                {tag}
                                <button onClick={() => deleteTag(index)}>x</button>
                            </div>
                        ))}
                    </div>
                    <div className={'post-labels'}>Selected Meetup Locations</div>
                    <div className={'post-location-container'}>
                        <div className={'post-locations'}>
                            <div className={'location-name'}>Voyager-Santa Clara University</div>
                            <div className={'location-address'}>2221 The Alameda, Santa Clara, CA 95050</div>
                            <div className={'location-distance'}>5 min</div>
                        </div>
                        <div className={'post-locations'}>
                            <div className={'location-name'}>Santa Clara Police Department</div>
                            <div className={'location-address'}>601 El Camino Real, Santa Clara, CA 95050</div>
                            <div className={'location-distance'}>7 min</div>
                        </div>
                        <div className={'post-locations'}>
                            <div className={'location-name'}>City of Santa Clara City Hall</div>
                            <div className={'location-address'}>1500 Warburton Ave, Santa Clara, CA 95050</div>
                            <div className={'location-distance'}>10 min</div>
                        </div>
                        <div className={'post-locations'}>
                            <div className={'location-name'}>SCU</div>
                            <div className={'location-address'}>500 El Camino Real, Santa Clara, CA 95053</div>
                            <div className={'location-distance'}>1 min</div>
                        </div>
                        {addLocation && <div className={'post-locations'}>
                            <div className={'location-name'}>SJSU</div>
                            <div className={'location-address'}>1 Washington Sq, San Jose, CA 95192</div>
                            <div className={'location-distance'}>13 min</div>
                        </div>}
                    </div>
                    <div className={'post-labels'}>Add Address</div>
                    <input
                        className={'post-input'}
                        type="text"
                        name="title"
                        value={addressInput}
                        onChange={handleAddressChange}
                        onKeyDown={onLocationKeyDown}
                    />
                    <button onClick={handleSubmit} className={'post-submit-button'}>Submit Post</button>
                </div>
            </div>
        </div>
    );
}

export default Post;