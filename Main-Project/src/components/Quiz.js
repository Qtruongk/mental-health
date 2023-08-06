import React, { useState } from 'react';
import './Quiz.css'; // Import your custom CSS for styling

const questions = [
  // ... Your questions data ...
  {
    id: 1,
    question: 'Little interest or pleasure in doing things',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
  {
    id: 2,
    question: 'Feeling down, depressed, or hopeless',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
  {
    id: 3,
    question: 'Trouble falling or staying asleep, or sleeping too much',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
  {
    id: 4,
    question: 'Feeling tired or having little energy',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
  {
    id: 5,
    question: 'Poor appetite or overeating',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
  {
    id: 6,
    question: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
  {
    id: 7,
    question: 'Trouble concentrating on things, such as reading the newspaper or watching television',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
  {
    id: 8,
    question: 'Moving or speaking so slowly that other people could have noticed Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
  {
    id: 9,
    question: 'Thoughts that you would be better off dead, or of hurting yourself',
    options: [
      'NOT AT ALL',
      'SEVERAL DAYS',
      'MORE THAN HALF THE DAYS',
      'NEARLY EVERY DAY',
    ],
  },
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false); // State to control showing the result

  const handleOptionClick = (questionId, optionIndex) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const calculateScore = () => {
    // Calculate the total score based on the user's answers
    let score = 0;
    for (const questionId in answers) {
      score += answers[questionId];
    }
    return score;
  };

  const renderQuiz = () => {
    if (showResult) {
      const score = calculateScore();
      // Determine the depression status based on the score
      let depressionStatus = '';
      if (score >= 20) {
        depressionStatus = 'Severe depression';
      } else if (score >= 15) {
        depressionStatus = 'Moderately severe depression ';
      } else if (score >= 10) {
        depressionStatus = 'Moderate depression';
      } else if (score >= 5) {
        depressionStatus = 'Mild depression';
      } else {
        depressionStatus = 'Minimal depression ';
      }

      return (
        <div>
          <h2>Result:</h2>
          <p>Depression status: {depressionStatus}</p>
          <button onClick={handleRestartQuiz}>Take another test</button>
        </div>
      );
    }

    const currentQuestionData = questions[currentQuestion];

    return (
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p>{currentQuestionData.question}</p>
        <ul>
          {currentQuestionData.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(currentQuestionData.id, index)}
              className={answers[currentQuestionData.id] === index ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    );
  };

  return (
    <div className="phq-9-quiz-container">
      {renderQuiz()}
    </div>
  );
};

export default Quiz;
