import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const decodeHTML = function (html) {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

const timerVal = 65; // timerVal

function Question() {
  const [questions, setQuestions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [options, setOptions] = useState([])
  
  const [showTimer, setShowTimer] = useState(false);
  const [seconds, setSeconds] = useState(timerVal);

  const tick = () => {
    if (isNaN(seconds)) { return; }
    if (seconds > 1) {
      setSeconds(seconds - 1);
    } else {
      const dateObject = new Date();
      // current hours
      const hours = dateObject.getHours();
      // current minutes
      const minutes = dateObject.getMinutes();
      // current seconds
      const seconds = dateObject.getSeconds();
      const milliseconds = dateObject.getMilliseconds();
      // Actual Time to display on board
      const time = `${hours}:${minutes}:${seconds}:${milliseconds}`
      setSeconds(`Sorry! Time up!! Time Stamp : ${time}`);
      setShowTimer(false);
    }
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const score = useSelector((state) => state.score)
  const encodedQuestions = useSelector((state) => state.questions);
  useEffect(() => {
    const decodedQuestions = encodedQuestions.map(q => {
      return {
        ...q,
        question: decodeHTML(q.question),
        correct_answer: decodeHTML(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map(a => decodeHTML(a))
      }
    });
    setQuestions(decodedQuestions);
  }, [encodedQuestions]);
  const questionIndex = useSelector((state) => state.index)

  const dispatch = useDispatch()

  const question = questions[questionIndex]
  const answer = question && question.correct_answer

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  useEffect(() => {
    if (!question) {
      return;
    }
    let answers = [...question.incorrect_answers];
    answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer);
    setOptions(!question?.correct_answer?.length ? [] : answers)
    setShowTimer(true);
    setSeconds(timerVal);
  }, [question])

  const handleListItemClick = (selectOption) => {
    setAnswerSelected(true)
    setSelectedAnswer(selectOption)

    if (selectOption === answer) {
      dispatch({
        type: 'SET_SCORE',
        score: score + 1,
      })
    }

    // Automatically load next question after 3s
    // if (questionIndex + 1 <= questions.length) {
    //   setTimeout(() => {
    //     handleNextQuestion();
    //   }, 3000)
    // }
  }

  const handleNextQuestion = () => {
    setSeconds(0);
    setAnswerSelected(false);
    setSelectedAnswer(null);
    setShowTimer(false);
    dispatch({
      type: 'SET_INDEX',
      index: questionIndex + 1,
    });
  }


  const getClass = (option) => {
    let cls = 'optionItem ';
    if (!answerSelected) {
      cls += ``;
    } else if (option === answer) {
      cls += `correct`;
    } else if (option === selectedAnswer) {
      cls += `selected`;
    }
    return cls;
  }

  if (!question) {
    return <div>Loading ...</div>
  }

  const timerCls = showTimer ? 'timerContainer timer': 'timerContainer';

  return (
    <div>
      <p>Question {questionIndex + 1}</p>
      <h1 dangerouslySetInnerHTML={{ __html: question.question }}></h1>
      <ul>
        {options.map((option, i) => (
          <div key={`option_key_${i}`} style={{display: 'inline'}}>
            <li onClick={() => handleListItemClick(option)} className={getClass(option)}>
            <span style={{float: 'left'}}><i>Option {i + 1} : </i></span>
              {option}
            </li>
          </div>
        ))}
      </ul>
      <div className={timerCls}>{seconds}</div>
      <button onClick={handleNextQuestion}>Next Question</button>
      <div>
        Score: {score} / {questions.length}
      </div>
    </div>
  )
}
export default Question
