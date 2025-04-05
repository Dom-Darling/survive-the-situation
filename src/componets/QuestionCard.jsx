import React from 'react';
import PropTypes from 'prop-types';
import './QuestionCard.css';

const QuestionCard = ({ question, options, onAnswer }) => {
  return (
    <div className="question-card">
      <h2 className="question">{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default QuestionCard;