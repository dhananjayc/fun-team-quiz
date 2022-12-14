import React from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { demoQues, sportQues, compQuests, oddManOutQues } from '../constants/questions';

function FetchButton(props) {
  const questionCategory = useSelector(
    (state) => state.options.question_category
  )
  // const questionDifficulty = useSelector(
  //   (state) => state.options.question_difficulty
  // )
  // const questionType = useSelector((state) => state.options.question_type)
  // const questionAmount = useSelector(
  //   (state) => state.options.amount_of_questions
  // )
  const questionIndex = useSelector((state) => state.index)

  const dispatch = useDispatch()

  const setLoading = (value) => {
    dispatch({
      type: 'CHANGE_LOADING',
      loading: value,
    })
  }

  const setQuestions = (value) => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: value,
    })
  }

  const handleQuery = async () => {
    setLoading(true);
    if (parseInt(questionCategory, 10) === 2) {
      setQuestions(sportQues);
    } else if (parseInt(questionCategory, 10) === 3) {
      setQuestions(compQuests);
    }  else if (parseInt(questionCategory, 10) === 4) {
      setQuestions(oddManOutQues);
    } else {
      setQuestions(demoQues);
    }

    if (questionIndex > 0) {
      dispatch({
        type: 'SET_INDEX',
        index: 0,
      });
      dispatch({
        type: 'SET_SCORE',
        score: 0,
      });
    }
    setLoading(false);
  }

  return <button onClick={handleQuery}> {props.text} </button>
}
export default FetchButton