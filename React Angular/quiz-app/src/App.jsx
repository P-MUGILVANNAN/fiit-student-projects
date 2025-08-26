import React, { useState } from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Which language is used primarily for web development?",
      options: ["Java", "C++", "Python", "JavaScript"],
      correctAnswer: "JavaScript"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au"
    }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Interactive Quiz</h1>
      <Quiz questions={quizQuestions} />
    </div>
  );
}

export default App;