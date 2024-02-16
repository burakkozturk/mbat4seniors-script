import React, { useState } from 'react';
import './CourseSection.css';
import { useParams } from 'react-router-dom';

function CourseSection() {
    const [activeContent, setActiveContent] = useState("Kurs içeriği burada gösterilecek.");
    const [activeUnitId, setActiveUnitId] = useState(null); // Aktif ünite ID'si için yeni state
    const { courseId } = useParams(); // URL'den courseId parametresini al

    // Örnek kurs üniteleri
    const units = [
        { id: 1, title: "Ünite 1", content: "Ünite 1 İçeriği" },
        { id: 2, title: "Ünite 2", content: "Ünite 2 İçeriği" },
        { id: 3, title: "Ünite 3", content: "Ünite 3 İçeriği" },
    ];

    const handleUnitClick = (id, content) => {
        setActiveUnitId(id); // Aktif ünite ID'sini güncelle
        setActiveContent(content); // Aktif içeriği güncelle
    };

    return (
        <div className="course-section-wrapper">
            <div className="course-section">
                <div className="units-list">
                    {units.map((unit) => (
                        <button 
                          key={unit.id} 
                          className={activeUnitId === unit.id ? 'active' : ''} // Aktif üniteye göre sınıf ekleme
                          onClick={() => handleUnitClick(unit.id, unit.content)}>
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
