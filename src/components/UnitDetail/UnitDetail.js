import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate'i import edin
import './UnitDetail.css';

function UnitDetail() {
    const [units, setUnits] = useState([]);
    const { courseId } = useParams();
    const navigate = useNavigate(); // useNavigate hook'unu kullanın

    useEffect(() => {
        const fetchUnits = async () => {
            try {
                const response = await fetch(`http://51.20.106.123:8080/api/courses/${courseId}/units`);
                if (!response.ok) throw new Error('Veri yüklenemedi');
                const data = await response.json();
                setUnits(data);
            } catch (error) {
                console.error("Hata:", error);
            }
        };

        fetchUnits();
    }, [courseId]);

    // Üniteye tıklanınca çağrılacak fonksiyon
    const handleUnitClick = (unitId) => {
        navigate(`/unit-content/${unitId}`); // Ünitenin içeriklerini gösteren sayfaya yönlendir
    };

    return (
        <div>
            <div className="unit-detail">
                <h2>Course Units</h2>
                <ul className="unit-list">
                    {units.map(unit => (
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
