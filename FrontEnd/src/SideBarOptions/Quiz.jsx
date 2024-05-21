import { useState } from 'react';
import style from '../Css/quiz.module.css';
import PropTypes from 'prop-types';
const questions = [
  {
    question: 'Which of the following is used to define a block of code in Python language?',
    options: ['Indentation', 'Key', 'Brackets', 'All of the mentioned'],
    answer: 'Indentation',
  },
  {
    question: 'What is the output of the following code: `print("Hello, World!")`?',
    options: ['Hello', 'Hello, World!', 'Error', 'None'],
    answer: 'Hello, World!',
  },
  {
    question: 'What is the output of the following code: `print("Hello, World!")`?',
    options: ['Hello', 'Hello, World!', 'Error', 'None'],
    answer: 'Hello, World!',
  },
  // Add more questions here
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [score, setScore] = useState(0)

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [currentQuestion]: option }));
    setIsOptionSelected(true);
  };

  const handleSubmit = () => {
    if (isOptionSelected) {
      const correctAnswer = questions[currentQuestion].answer;
      const selectedOption = selectedOptions[currentQuestion];
      if (selectedOption === correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
      if (currentQuestion === questions.length - 1) {
        setButtonClicked(true);
        handleClick();
      }
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setIsOptionSelected(false);
      
    }
  };

  const [buttonClicked1, setButtonClicked1] = useState(false);
  

  const handleClick = () => {
    if (!buttonClicked1) {
      setButtonClicked1(true);
    }
  };

  return (
    <div>
      <h1 className={style.heading}>Quiz</h1>
      {currentQuestion < questions.length && (
        <div className={`card ${style.mcq}`}>
          <div className='card-body'>
            <div className='flex justify-center flex-col m-0'>

            <p className={style.p}>{questions[currentQuestion].question}</p>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className={style.button}>
                <button
                  type='submit'
                  size='lg'
                  style={{
                    backgroundColor: selectedOptions[currentQuestion] === option ? '#0ea5e9' : 'white',
                    borderColor: 'black',
                    width: '70vh',
                  }}
                  onClick={() => handleOptionSelect(option)}
                  className='btn'
                >
                  <span>{option}</span>
                </button>
              </div>
            ))}
            <div className={style.button1}>
              <button
                type='submit'
                size='lg'
                            onClick={handleSubmit}
                disabled={!isOptionSelected}
                className='btn bg-black text-white mt-3'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        </div>
      )}
      {currentQuestion >= questions.length && (
        <div className='h-full mt-40 font-bold gap-3 text-3xl flex justify-center items-center flex-col'>
          <h2>Quiz Complete!</h2>
          <p>You scored {score} out of {questions.length}.</p>
          {buttonClicked && (
            <div>
              <p>Congratulations! You have completed the quiz.</p>
              {/* Add the progress bar here */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
Quiz.propTypes = {
  progressbar:PropTypes.func.isRequired,
  setprogressbar:PropTypes.func.isRequired,
};