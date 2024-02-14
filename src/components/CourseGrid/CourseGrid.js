import React from 'react';
import './CourseGrid.css';

function CourseGrid() {
    return (
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

    );
}

export default CourseGrid;
