import React from 'react';
import './CourseGrid.css';
import { useNavigate } from 'react-router-dom';
import AboutSection from '../AboutSection/AboutSection';

// Örnek olarak, mevcut kursların bir listesini oluşturun
const courses = [
  { id: 1, name: 'International in-depth Analysis', imageUrl: './home-1.jpg', description: 'The use and impact of Mindfulness Based Art Therapy to improve the mental health of the individuals' },
  { id: 2, name: 'MBAT4Seniors Manual', imageUrl: './home-4.jpg', description: 'Lorem ipsum dolor sit amet' },
  { id: 3, name: 'MBAT4Seniors Tool Kit', imageUrl: './home-5.jpg', description: 'Lorem ipsum dolor sit amet' },
];

function CourseGrid() {
    const navigate = useNavigate();

    // Kurs ID'si kullanılarak CourseSection komponentine yönlendirme yapın
    const startCourse = (courseId) => {
        navigate(`/course-section/${courseId}`);
    };

    return (
        <div>
            <AboutSection/>
            <div className='container'>
                {courses.map((course) => (
                    <div key={course.id} className='box'>
                        <img src={course.imageUrl} alt="Logo" />
                        <h1>{course.name}</h1>
                        <p>{course.description}</p>
                        <button className="button-30" onClick={() => startCourse(course.id)}>Start Course</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseGrid;
