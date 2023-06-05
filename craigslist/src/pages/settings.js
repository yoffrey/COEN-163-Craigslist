import React, { useState } from 'react';
import './settings.css';
import User from '../images/user.png';

const Settings = () => {
    // Initial user profile data
    const initialProfile = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: '123 Main St, City, State, Zip',
        password: '',
    };

    // State to store the user profile
    const [profile, setProfile] = useState(initialProfile);
    const [password, setPassword] = useState("")

    // State to control the edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any necessary actions here, like updating the user profile on the server
        setIsEditing(false);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(true);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword('');
    }

    const handlePasswordChange = (e) => {
        const bulletString = '•'.repeat(e.target.value.length);
        setPassword(bulletString);
    }

    return (
        <div className={'settings-page-container'}>
            <div className={'account-settings-container'}>
                <div className={'account-name-image-container'}>
                    <img className={'profile-picture'} src={User} alt={'Profile Picture'} />
                    <strong className={'user-name-text'} >{profile.name}</strong>
                    <h3 className={'logout-text'}>Logout</h3>
                </div>
                <div className={'profile-fav-location-container'}>
                    <div className={'profile-info'}>
                        {isEditing ? (
                            <form className={'settings-form-container'} onSubmit={handleSubmit}>
                                <div className={'profile-content'}>
                                    <h1 className={'account-labels'}>Email:</h1>
                                        <input
                                            className={'settings-inputs'}
                                            type="text"
                                            name="name"
                                            value={profile.name}
                                            onChange={handleInputChange}
                                        />
                                </div>
                                <div>
                                    <h1 className={'account-labels'}>Email:</h1>
                                        <input
                                            className={'settings-inputs'}
                                            type="email"
                                            name="email"
                                            value={profile.email}
                                            onChange={handleInputChange}
                                        />
                                </div>
                                <div>
                                    <h1 className={'account-labels'}>Address:</h1>
                                        <input
                                            className={'settings-inputs'}
                                            type="text"
                                            name="address"
                                            value={profile.address}
                                            onChange={handleInputChange}
                                        />
                                </div>
                                <button type="submit" className={'browse-button'}>Save</button>
                                <button className={'browse-button'} onClick={() => setIsEditing(false)}>Cancel</button>
                            </form>
                        ) : (
                            <form className={'settings-form-container'}>
                                <div className={'profile-content'}>
                                    <h1 className={'account-labels'}>Email:</h1>
                                    <input
                                        className={'settings-inputs'}
                                        type="text"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleInputChange}
                                        readOnly={true}
                                    />
                                </div>
                                <div>
                                    <h1 className={'account-labels'}>Email:</h1>
                                    <input
                                        className={'settings-inputs'}
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleInputChange}
                                        readOnly={true}
                                    />
                                </div>
                                <div>
                                    <h1 className={'account-labels'}>Address:</h1>
                                    <input
                                        className={'settings-inputs'}
                                        type="text"
                                        name="address"
                                        value={profile.address}
                                        onChange={handleInputChange}
                                        readOnly={true}
                                    />
                                </div>
                                <button onClick={handleEdit} className={'browse-button'}>Edit</button>
                            </form>
                        )}
                        <form className={'settings-form-container'}>
                            <h1 className={'account-labels'}>Change Password:</h1>
                            <input
                                className={'settings-inputs'}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button onClick={handlePassword} className={'browse-button'}>Save</button>
                        </form>
                    </div>
                    <div className={'fav-location'}>
                        <div className={'location-title'}>Favorite Meetup Locations
                            <button className="add-button">+</button>
                        </div>
                        <div className={'locations'}>
                            <div className={'location-name'}>Voyager-Santa Clara University</div>
                            <div className={'location-address'}>2221 The Alameda, Santa Clara, CA 95050</div>
                            <div className={'location-distance'}>5 min</div>
                        </div>
                        <div className={'locations'}>
                            <div className={'location-name'}>Santa Clara Police Department</div>
                            <div className={'location-address'}>601 El Camino Real, Santa Clara, CA 95050</div>
                            <div className={'location-distance'}>7 min</div>
                        </div>
                        <div className={'locations'}>
                            <div className={'location-name'}>City of Santa Clara City Hall</div>
                            <div className={'location-address'}>1500 Warburton Ave, Santa Clara, CA 95050</div>
                            <div className={'location-distance'}>10 min</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
