import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UnitDetail.css';

function UnitDetail() {
    const [units, setUnits] = useState([]);
    const { courseId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Dinamik olarak ilgili kursun JSON dosyasını yükle
        const loadCourseUnits = async () => {
            try {
                const unitsData = await import(`../../data/course${courseId}.json`);
                setUnits(unitsData.default);
            } catch (error) {
                console.error("Dosya yüklenirken bir hata oluştu", error);
                setUnits([]);
            }
        };

        loadCourseUnits();
    }, [courseId]);

    const handleUnitClick = (unitId) => {
        navigate(`/unit-content/${unitId}`);
    };

    return (
        <div>
            <div className="unit-detail">
                <h2>Course Units</h2>
                <ul className="unit-list">
                    {units.map((unit) => (
                        <li key={unit.id} onClick={() => handleUnitClick(unit.id)}>
                            {unit.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UnitDetail;
