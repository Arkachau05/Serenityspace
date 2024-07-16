import React, { useState } from 'react';
import gola from '../assets/services/gola.png';

const SelfAssessment = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [mentalHealthMessage, setMentalHealthMessage] = useState('');

  const questions = [
    {
      question: "Are you able to concentrate on your work?",
      options: [
        { option: "Never", score: 1 },
        { option: "Often", score: 2 },
        { option: "Fairly Well", score: 3 },
        { option: "Very Well", score: 4 }
      ]
    },
    {
      question: "How often do you feel overwhelmed?",
      options: [
        { option: "Rarely", score: 1 },
        { option: "Sometimes", score: 2 },
        { option: "Often", score: 3 },
        { option: "Always", score: 4 }
      ]
    },
    {
      question: "How well do you sleep at night?",
      options: [
        { option: "Very well", score: 1 },
        { option: "Fairly well", score: 2 },
        { option: "Not very well", score: 3 },
        { option: "Not at all", score: 4 }
      ]
    },
    {
      question: "How often do you engage in physical activity?",
      options: [
        { option: "Daily", score: 1 },
        { option: "Several times a week", score: 2 },
        { option: "Once a week or less", score: 3 },
        { option: "Rarely or never", score: 4 }
      ]
    },
    {
      question: "Do you feel satisfied with your work-life balance?",
      options: [
        { option: "Completely satisfied", score: 1 },
        { option: "Mostly satisfied", score: 2 },
        { option: "Somewhat satisfied", score: 3 },
        { option: "Not satisfied at all", score: 4 }
      ]
    },
    {
      question: "How often do you experience mood swings?",
      options: [
        { option: "Rarely or never", score: 1 },
        { option: "Sometimes", score: 2 },
        { option: "Often", score: 3 },
        { option: "Always", score: 4 }
      ]
    }
  ];

  const handleAnswerSelect = (score) => {
    setAnswers({ ...answers, [currentQuestionIndex]: score });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const renderCurrentQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <div className="md:col-span-1">
        <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
        <ul>
          {question.options.map((option, optionIndex) => (
            <li key={optionIndex} className="mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name={`question${currentQuestionIndex}`}
                  value={option.score}
                  checked={answers[currentQuestionIndex] === option.score}
                  onChange={() => handleAnswerSelect(option.score)}
                  className="mr-2 cursor-pointer"
                />
                <span className="text-lg">{option.option}</span>
              </label>
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 mr-4 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleNextQuestion}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    );
  };

  const calculateResult = () => {
    let totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    setShowResult(true);
    
    if (totalScore >= 0 && totalScore <= 5) {
      setMentalHealthMessage("Your mental health is very poor. Please seek professional help immediately.");
    } else if (totalScore > 5 && totalScore <= 10) {
      setMentalHealthMessage("Your mental health is poor. Consider taking steps to improve it.");
    } else if (totalScore > 10 && totalScore <= 15) {
      setMentalHealthMessage("Your mental health is fair. There's room for improvement.");
    } else {
      setMentalHealthMessage("Your mental health is good. Keep up the positive habits!");
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-8 bg-black text-white mb-8">
        <div className="bg-gray-600 rounded-2xl">
            <div className="md:flex md:items-center">
              <div className="md:w-full md:px-4 mb-8">
                <p className="text-4xl font-bold mb-4 text-center">Welcome to Serenity Space</p>
                <p className="text-lg mb-4 text-center">
                  Here we prioritize your mental well-being.
                  Before we proceed further, take a moment to assess your mental health. 
                  Scroll down, answer all the questions, and discover your mental health score.
                </p>
              </div>
              <div className="md:w-full md:px-4 flex justify-center">
                <img src={gola} alt="gola image" className="rounded-xl max-w-full h-auto" style={{ maxWidth: '320px' }} />
              </div>
            </div>
        </div>
      </div>

      {/* Self Assessment Section */}
      <div className="container mx-auto px-4 bg-white rounded-lg shadow-lg p-8 md:max-w-4xl md:p-12 md:grid md:grid-cols-2 md:gap-8">
        {!showResult ? (
          renderCurrentQuestion()
        ) : (
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-center">Result:</h2>
            <p className="text-xl mb-4 text-center">Your total score is: {Object.values(answers).reduce((acc, curr) => acc + curr, 0)}</p>
            <p className="text-lg mb-4 text-center">{mentalHealthMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelfAssessment;
