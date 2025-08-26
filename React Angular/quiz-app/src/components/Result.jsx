import React from 'react';

const Result = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage === 100) return "Perfect! You're a genius!";
    if (percentage >= 80) return "Excellent! Well done!";
    if (percentage >= 60) return "Good job!";
    if (percentage >= 40) return "Not bad, but you can do better!";
    return "Keep practicing! You'll improve!";
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        <h3>Quiz Completed!</h3>
      </div>
      <div className="card-body">
        <h4 className="card-title">{getResultMessage()}</h4>
        <div className="progress mt-4 mb-4" style={{ height: '30px' }}>
          <div 
            className={`progress-bar ${percentage >= 70 ? 'bg-success' : percentage >= 40 ? 'bg-warning' : 'bg-danger'}`} 
            role="progressbar" 
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {percentage}%
          </div>
        </div>
        <p className="card-text">
          You scored {score} out of {totalQuestions} questions correctly.
        </p>
        <button 
          className="btn btn-primary mt-3"
          onClick={onRestart}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;