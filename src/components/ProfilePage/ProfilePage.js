// components/ProfilePage.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './ProfilePage.css'; // Stil dosyasını import edin
import CourseGrid from '../CourseGrid/CourseGrid';
import LanguageBar from '../LanguageBar/LanguageBar';

function ProfilePage() {
    const { currentUser } = useAuth(); // Kullanıcı adını almak için AuthContext'i kullanın

    return (
        <div>
            <div className="profile-container">
                <div className="profile-card">
                    <h2>Welcome {currentUser?.username}</h2>
                    <div className="progress-bars">
                        <div className="progress-bar">
                            <label>International in-depth Analysis - 70%</label>
                            <progress value="70" max="100"></progress>
                            <button class="button-30" role="button">Update Progress</button> {/* Buton */}
                        </div>
                        <div className="progress-bar">
                            <label>MBAT4Seniors Manual - 40%</label>
                            <progress value="40" max="100"></progress>
                            <button class="button-30" role="button">Update Progress</button> {/* Buton */}
                        </div>
                        <div className="progress-bar">
                            <label>MBAT4Seniors Tool Kit - 40%</label>
                            <progress value="40" max="100"></progress>
                            <button class="button-30" role="button">Update Progress</button> {/* Buton */}
                            <button class="button-30 button-update" role="button">Update Profile</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='container'>

                <div className='box'>
                    <img src='./home-1.jpg' alt="Logo" />
                    <h1>International in-depth Analysis</h1>
                    <p>The use and impact of Mindfulness Based Art Therapy to improve the
                        mental health of the individuals</p>
                    <button class="button-30" role="button">Start Course</button>
                </div>

                <div className='box'>
                    <img src='./home-4.jpg' alt="Logo" />
                    <h1>MBAT4Seniors Manual</h1>
                    <p>Lorem ipsum dolor sit amet</p>

                    <button class="button-30" role="button">Start Course</button>
                </div>

                <div className='box'>
                    <img src='./home-5.jpg' alt="Logo" />
                    <h1>MBAT4Seniors Tool Kit</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                    <button class="button-30" role="button">Start Course</button>
                </div>

            </div>
        </div>
    );
}

export default ProfilePage;
