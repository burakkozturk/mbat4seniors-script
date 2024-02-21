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
                const contentsResponse = await fetch(`http://51.20.106.123:8080/api/contents/unit/${unitId}`);
                if (!contentsResponse.ok) throw new Error('Content could not be loaded');
                const contentsData = await contentsResponse.json();
                setContents(contentsData);

                const unitDetailsResponse = await fetch(`http://51.20.106.123:8080/api/units/${unitId}`);
                if (!unitDetailsResponse.ok) throw new Error('Unit details could not be fetched');
                const unitDetailsData = await unitDetailsResponse.json();
                setUnitDetails(unitDetailsData);

                const quizExistenceResponse = await fetch(`http://51.20.106.123:8080/api/quizzes/units/${unitId}/hasQuiz`);
                if (!quizExistenceResponse.ok) throw new Error('Could not check quiz existence');
                const hasQuizText = await quizExistenceResponse.text();
                setHasQuiz(hasQuizText.toLowerCase() === 'true');
            } catch (error) {
                console.error("Error:", error);
                setError(error.toString());
            }
        }

        fetchData();
    }, [unitId]);

    const handleNext = () => setCurrentIndex(currentIndex < contents.length - 1 ? currentIndex + 1 : currentIndex);
    const handleDone = () => navigate(`/`);
    const handleViewPdf = () => unitDetails.pdfUrl ? window.open(unitDetails.pdfUrl, '_blank') : alert('PDF URL not found for this unit');
    const handleGoToQuiz = () => navigate(`/quizzes/${unitId}`);
    
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
                    <h3>Content {currentIndex + 1}</h3>
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
