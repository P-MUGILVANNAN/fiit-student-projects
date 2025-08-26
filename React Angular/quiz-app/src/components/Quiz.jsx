import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question
  const [timerActive, setTimerActive] = useState(true);

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setTimerActive(false);
    
    // Move to next question or end quiz
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTimeLeft(10);
        setTimerActive(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setQuizCompleted(true);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!timerActive) return;

    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      handleAnswerSubmit(false); // Auto-submit with incorrect answer
    }

    return () => clearInterval(timer);
  }, [timeLeft, timerActive]);

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(10);
    setTimerActive(true);
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <Question
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onSubmit={handleAnswerSubmit}
          timeLeft={timeLeft}
        />
      ) : (
        <Result 
          score={score} 
          totalQuestions={questions.length} 
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;