import React, { useState } from 'react';

const Question = ({ question, questionNumber, totalQuestions, onSubmit, timeLeft }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
      onSubmit(selectedOption === question.correctAnswer);
    }
  };

  const getOptionClass = (option) => {
    let className = "list-group-item list-group-item-action";
    
    if (isSubmitted) {
      if (option === question.correctAnswer) {
        className += " list-group-item-success";
      } else if (option === selectedOption && option !== question.correctAnswer) {
        className += " list-group-item-danger";
      }
    } else if (option === selectedOption) {
      className += " active";
    }
    
    return className;
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>Question {questionNumber} of {totalQuestions}</span>
        <span className={`badge ${timeLeft < 5 ? 'bg-warning' : 'bg-primary'}`}>
          Time: {timeLeft}s
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{question.question}</h5>
        <div className="list-group mt-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={getOptionClass(option)}
              onClick={() => handleOptionSelect(option)}
              disabled={isSubmitted}
            >
              {option}
            </button>
          ))}
        </div>
        
        {!isSubmitted && (
          <button 
            className="btn btn-primary mt-3" 
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            Submit Answer
          </button>
        )}
        
        {isSubmitted && (
          <div className="mt-3">
            {selectedOption === question.correctAnswer ? (
              <div className="alert alert-success">Correct! Well done!</div>
            ) : (
              <div className="alert alert-danger">
                Incorrect. The correct answer is: <strong>{question.correctAnswer}</strong>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;