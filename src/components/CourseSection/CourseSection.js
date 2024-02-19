import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseSection.css';

function CourseSection() {
    const [units, setUnits] = useState([]);
    const [activeContent, setActiveContent] = useState("");
    const { courseId } = useParams();

    useEffect(() => {
        // API'den ders ünitelerini çekme
        const fetchUnits = async () => {
            console.log(courseId); // courseId değerini konsolda kontrol et
            const response = await fetch(`http://localhost:8080/api/courses/${courseId}/units`);
            if(response.ok) {
                const data = await response.json();
                setUnits(data);
                // Varsayılan olarak ilk ünitenin içeriğini göster
                if(data.length > 0) {
                    setActiveContent(data[0].content);
                }
            }
        };

        fetchUnits();
    }, [courseId]); // courseId değiştiğinde useEffect tekrar çalışır

    const handleUnitClick = (content) => {
        setActiveContent(content);
    };

    return (
        <div className="course-section-wrapper">
            <div className="course-section">
                <div className="units-list">
                    {units.map((unit) => (
                        <button 
                          key={unit.id} 
                          className="unit-button"
                          onClick={() => handleUnitClick(unit.content)}
                        >
                            {unit.title}
                        </button>
                    ))}
                </div>
                <div className="unit-content">
                    {activeContent}
                </div>
            </div>
        </div>
    );
}

export default CourseSection;