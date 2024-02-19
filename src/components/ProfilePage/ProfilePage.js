import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './ProfilePage.css';

function ProfilePage() {
    const { currentUser } = useAuth();
    const [progressValues, setProgressValues] = useState({ c1Status: 0, c2Status: 0, c3Status: 0 });

    useEffect(() => {
        // currentUser.username mevcut olduğunda API isteğini yap
        if(currentUser && currentUser.username) {
            fetchProgress(currentUser.username);
        }
    }, [currentUser]); // currentUser değiştiğinde useEffect tetiklenecek

    const fetchProgress = (username) => {
        fetch(`http://localhost:8080/auth/progress/${username}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProgressValues({
                    c1Status: data.c1Status * 10, // API'den gelen değerleri kullan
                    c2Status: data.c2Status * 10,
                    c3Status: data.c3Status * 10,
                });
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    };

    return (
        <div>
            <div className="profile-container">
                <div className="profile-card">
                    <h2>Welcome {currentUser?.username}</h2>
                    <div className="progress-bars">
                        <div className="progress-bar">
                            <label>International in-depth Analysis</label>
                            <progress value={progressValues.c1Status} max="100"></progress>
                            <button class="button-30" role="button">Start Course</button>
                
                        </div>
                        <div className="progress-bar">
                            <label>MBAT4Seniors Manual</label>
                            <progress value={progressValues.c2Status} max="100"></progress>
                            <button class="button-30" role="button">Start Course</button>
                
                        </div>
                        <div className="progress-bar">
                            <label>MBAT4Seniors Tool Kit</label>
                            <progress value={progressValues.c3Status} max="100"></progress>
                            <button class="button-30" role="button">Start Course</button>
                
                        </div>
                        
                    </div>
                    <button class="button-30 button-update" role="button">Update Profile</button>
                
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
