import React from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  demoQues, round2Ques, round1Ques, round3Ques, round4Ques
} from '../constants/questions';

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
    if (parseInt(questionCategory, 10) === 3) {
      setQuestions(round2Ques);
    } else if (parseInt(questionCategory, 10) === 2) {
      setQuestions(round1Ques);
    }  else if (parseInt(questionCategory, 10) === 4) {
      setQuestions(round3Ques);
    } else if (parseInt(questionCategory, 10) === 5) {
      setQuestions(round4Ques);
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

  return <button className="action btn" onClick={handleQuery}> {props.text} </button>
}
export default FetchButton