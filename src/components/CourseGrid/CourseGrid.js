import React from 'react';
import './CourseGrid.css';
import { useNavigate } from 'react-router-dom';
import AboutSection from '../AboutSection/AboutSection';


function CourseGrid() {
    const navigate = useNavigate(); // useNavigate hook'unu kullanarak navigate fonksiyonunu oluşturun

    // Örnek olarak, bir kursa tıklanınca çalışacak fonksiyon
    const startCourse = (courseId) => {
        navigate(`/course-section/${courseId}`); // courseId ile dinamik bir yol oluşturun
    };

    return (
        <div>
            <AboutSection/>
            <div className='container'>
                <div className='box'>
                    <img src='./home-1.jpg' alt="Logo" />
                    <h1>International in-depth Analysis</h1>
                    <p>The use and impact of Mindfulness Based Art Therapy to improve the mental health of the individuals</p>
                    <button className="button-30" role="button" onClick={() => startCourse('international-analysis')}>Start Course</button>
                </div>
                <div className='box'>
                    <img src='./home-4.jpg' alt="Logo" />
                    <h1>MBAT4Seniors Manual</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                    <button className="button-30" role="button" onClick={() => startCourse('mbat4seniors-manual')}>Start Course</button>
                </div>
                <div className='box'>
                    <img src='./home-5.jpg' alt="Logo" />
                    <h1>MBAT4Seniors Tool Kit</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                    <button className="button-30" role="button" onClick={() => startCourse('mbat4seniors-toolkit')}>Start Course</button>
                </div>
            </div>
        </div>
    );
}

export default CourseGrid;
