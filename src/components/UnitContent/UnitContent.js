import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UnitContent.css';

function UnitContent() {
    const [contents, setContents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { unitId } = useParams();
    const navigate = useNavigate();
    const [unitDetails, setUnitDetails] = useState({});
    const [error, setError] = useState('');
    const [hasQuiz, setHasQuiz] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // Dinamik olarak ilgili unitId için JSON dosyasını import edin
                const module = await import(`../../data/units/unit${unitId}.json`);
                const data = module.default; // Eğer modülün default export'u varsa
                setContents(data.contents);
                setUnitDetails(data.unitDetails);
                setHasQuiz(data.hasQuiz);
            } catch (error) {
                console.error("Error:", error);
                setError('Failed to load unit data.');
            }
        }

        fetchData();
    }, [unitId]);

    const handleNext = () => setCurrentIndex(currentIndex < contents.length - 1 ? currentIndex + 1 : currentIndex);
    const handleDone = () => navigate(`/`);
    const handleViewPdf = () => {
        if (unitDetails && unitDetails.pdfUrl) {
            window.open(unitDetails.pdfUrl, '_blank');
        } else {
            alert('PDF URL not found for this unit'); // Bu satır, PDF URL'si bulunamadığında konsola bilgi mesajı yazdırır.
        }
    };
    const handleGoToQuiz = () => hasQuiz ? navigate(`/quizzes/${unitId}`) : console.log('No quiz available for this unit');
    
    const renderContentItem = (content) => (
        <>
            {content.description && <p>{content.description}</p>}
            {content.imgUrl && <img src={content.imgUrl} alt="Content" style={{ maxWidth: '100%', height: 'auto' }} />}
        </>
    );

    return (
        <div className="unit-content">
            <h2>Unit Contents</h2>
            {error && <p className="error">{error}</p>}
            {contents.length > 0 ? (
                <div className="content-item">
                    <h3>Content {currentIndex + 1} of {contents.length}</h3>
                    {renderContentItem(contents[currentIndex])}
                    <div className="content-navigation">
                        {currentIndex < contents.length - 1 ? (
                            <button onClick={handleNext} className="next-button">Next</button>
                        ) : (
                            <button onClick={handleDone} className="done-button">Done</button>
                        )}
                        <button onClick={handleViewPdf} className="view-button">View PDF</button>
                        {hasQuiz && <button onClick={handleGoToQuiz} className="quiz-button">Go to Quiz</button>}
                    </div>
                </div>
            ) : <p>No contents available.</p>}
        </div>
    );
}

export default UnitContent;
