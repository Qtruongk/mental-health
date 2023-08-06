import React, { useState } from 'react';
import './Quiz.css'; // Import your custom CSS for styling

const questions = [
  // ... Your questions data ...
  {
    id: 1,
    question: 'You are in a school environment, and suddenly, one day, an older student bullies you, hitting you relentlessly. This situation is genuinely challenging and can evoke many emotions and pressures within you, so what will you do ?',
    options: [
      'Meet the older student politely',
      'Report to a teacher or school administration office',
      'Know your rights and responsibilities      ',
      'Stay still to let he/her continue      ',
    ],
  },
  {
    id: 2,
    question: 'When at home, while using your phone, your parents forbid you from using it, make you go to school, and prohibit you from texting your friends, what will you do ?',
    options: [
      'Ignore them, continue using the phone      ',
      'Yell at them, say that you have studied too much even though ...      ',
      'Obey them, give them your phone and study      ',
      'Pack up your things, and ready for leave the home trip.      ',
    ],
  },
  {
    id: 3,
    question: 'In the academic environment, you are competing to be at the top of the class, but this time, you slipped out of the top position, what will you do ?    ',
    options: [
      'Reflect and Learn',
      'Stay Motivated and Persistent      ',
      'Don’t care about that anymore      ',
      'Study, but not care about what is going on now      ',
    ],
  },
  {
    id: 4,
    question: 'Peer pressure, when you no longer care about grades, but those around you are too excellent and accomplished, can put pressure on you to achieve similar results, if so, what will you do ?',
    options: [
      'Competitive Environment: Groups like flexin til the last breath, ...      ',
      'Fear of Judgement: Scare of what people say about you      ',
      'Use that as motivation, try harder and work smart      ',
      'Let eveything down, don’t care about anything      ',
    ],
  },
  {
    id: 5,
    question: 'Parents are getting divorced, and you are too young to make decisions on your own, what will you do ?',
    options: [
      'Sad and unable to make a decision      ',
      'Do not bottle things up. Share your feelings with people you trust      ',
      'Keep doing the things you enjoy Take regular breaks from worrying      ',
      'Make right decision ',
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
        depressionStatus = 'Severe depression. You should visit chill place, then try out these Music: Healing, Peacful Guitar, try out these Podcast: Regret, Healing Radio, The Healing Podcast';
      } else if (score >= 15) {
        depressionStatus = 'Moderately severe depression. You should visit chill place, then try out these Music: Lush Lofi, try out these Podcast: Speaking of Psychology, Mental Health Matters, try out these Movie: Moon Knight';
      } else if (score >= 10) {
        depressionStatus = 'Moderate depression. You should visit chill place, then try out these Music: Nhạc Thiền, DREamlike HeAven, try out these Podcast: Motivation Daily by Motiversity, try out these Movie: BLACK - ISH, Sex education';
      } else if (score >= 5) {
        depressionStatus = 'Mild depression. You should visit chill place, then try out these Music: Piano ~~, try out these Podcast: Let’s Talk About Mental Health, try out these Movie: A Beautiful Mind';
      } else {
        depressionStatus = 'Minimal depression. You should visit chill place, then try out these Music: Jazz Music, lofi study beats, try out these Podcast: how to feel your bad feelings, try out these Movie: BOB"S BURGERS, What About Bob?';
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