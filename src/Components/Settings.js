import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FetchButton from './FetchButton'
import { useToggle }  from '../hooks/customHooks';

function Settings() {
  const [options, setOptions] = useState(null)

  const loading = useSelector((state) => state.options.loading)

  const questionCategory = useSelector(
    (state) => state.options.question_category
  )
  const questionDifficulty = useSelector(
    (state) => state.options.question_difficulty
  )
  const questionType = useSelector((state) => state.options.question_type)

  const buzzAppHost = useSelector((state) => state.options.buzz_application)

  const [toggle, setToggle] = useToggle(!buzzAppHost?.length)
  // const questionAmount = useSelector(
  //   (state) => state.options.amount_of_questions
  // )

  const dispatch = useDispatch()

  useEffect(() => {
    const handleLoadingChange = (value) => {
      dispatch({
        type: 'CHANGE_LOADING',
        loading: value,
      })
    }

    handleLoadingChange(true)
    const dcTypes = [
      {id: 1, name: 'Demo (Round Demo)'},
      {id: 3, name: 'Computer Science (Round 1)'},
      {id: 2, name: 'General Knowledge (Round 2)'},
      {id: 4, name: 'Odd Man Out (Round 3)'},
    ];

    handleLoadingChange(false);
    setOptions(dcTypes);
  }, [setOptions, dispatch]);

  const handleCategoryChange = (event) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      question_category: event.target.value,
    })
  }

  const handleDifficultyChange = (event) => {
    dispatch({
      type: 'CHANGE_DIFFICULTY',
      question_difficulty: event.target.value,
    })
  }

  const handleTypeChange = (event) => {
    dispatch({
      type: 'CHANGE_TYPE',
      question_type: event.target.value,
    })
  }

  const handleBuzzAppChange = (event) => {
    dispatch({
      type: 'CHANGE_BUZZ_APPLICATION',
      buzz_application: event.target.value,
    });
    setToggle();
  }

  if (!loading) {
    return (
      <div>
        <h1>Quiz App</h1>
        <div>
          <h2>Select Buzz App:
            <strong className="counter-action" onClick={setToggle}>{buzzAppHost}</strong>
          </h2>
            {toggle &&
            <select value={buzzAppHost} onChange={handleBuzzAppChange}>
              <option value="Local" key="type-0">
                Local
              </option>
              <option value="Server" key="type-1">
                Server
              </option>
              <option value="Future" key="type-2">
                In Future : Paste URL here
              </option>
            </select>
            }
        </div>

        <div>
          <h2>Select Category:</h2>
          <select value={questionCategory} onChange={handleCategoryChange}>
            {/* <option>All</option> */}
            {options &&
              options.length &&
              options.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>

        <div style={{display:'none'}}>
          <h2>Select Difficulty:</h2>
          <select value={questionDifficulty} onChange={handleDifficultyChange}>
            <option value="" key="difficulty-0">
              All
            </option>
            <option value="easy" key="difficulty-1">
              Easy
            </option>
            <option value="medium" key="difficulty-2">
              Medium
            </option>
            <option value="hard" key="difficulty-3">
              Hard
            </option>
          </select>
        </div>

        <div>
          <h2>Select Question Type:</h2>
          <select value={questionType} onChange={handleTypeChange}>
            {/* <option value="" key="type-0">
              All
            </option> */}
            <option value="multiple" key="type-1">
              Multiple Choice
            </option>
            {/* <option value="boolean" key="type-2">
              True/False
            </option> */}
          </select>
        </div>

        {/* <div>
          <h2>Amount of Questions:</h2>
          <input value={questionAmount} onChange={handleAmountChange} />
          <span>{questionAmount}</span>
        </div> */}

        <FetchButton text="Get started!" />
      </div>
    )
  }

  return <p>LOADING...</p>
}
export default Settings
