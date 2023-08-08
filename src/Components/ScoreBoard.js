import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import PLAYERS  from '../constants/players';
import { useToggle }  from '../hooks/customHooks';

const Player = (props) => {
  const [edit, setEdit] = useToggle(false);
  
  const [, setValue] = useState(props.score);

  const handleScoreChange = (e, isToggled=true) => {
    let val = parseInt(e?.target?.value, 10);
    if (isNaN(val)) {
      val = 0;
    }
    props.onScoreChange(val, true);
    setValue(val); 
    if (isToggled) {
      setEdit(false);
    }
  }

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 27 || evt.keyCode === 13) {
      handleScoreChange(evt);
    }
  };

  return(
    <div className = "player">
      <div className= "player-name">
        {/* <a className="remove-player" onClick={props.onRemove}> X </a> */}
        {props.name}
      </div>
      <div className = "player-score">
        {/* <Counter initialScore={props.score} onChange={props.onScoreChange} /> */}
        <div className= "counter" >
          <button className= "counter-action decrement" onClick={() => {props.onScoreChange(-5);}}> - 5</button>
          {edit &&
            <input
              onBlur={handleScoreChange}
              onChange={(e) => handleScoreChange(e, false)}
              onKeyDown={handleKeyDown}
              className= "counter-score"
              value={props.score}
            />
          }
          {!edit && 
            <div className= "counter-score" onClick={() => setEdit(true)}> {props.score} </div>
          }
          <button className= "counter-action increment" onClick={() => {props.onScoreChange(10);}} > + 10</button>
        </div>
      </div>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func,
  onRemove: PropTypes.func
}


const ScoreBoard = (props) => {

  const [players, setPlayers] = useState(props.initialPlayers);
  const [toggle, setToggle] = useToggle();
  
  const Stats = ({players}) => {
    const totalPlayers = players.length;
    const totalPoints = players.reduce((total, player) => {
      return ( total += player.score )
    }, 0);

    return(
      <table className="stats">
        <tbody>
          <tr>
            <td> Teams: </td>
            <td> {totalPlayers}</td>
          </tr>
          <tr>
            <td> Total Points: </td>
            <td> {totalPoints} </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const Header = ({ title, players }) => {
    return(
      <div className = "header">
        <Stats players={players} />
        <h1> {title} </h1>
      </div>
    );
  };

  const onScoreChange = (index, delta, reset=false) => {
    setPlayers((current) =>
      current.map((obj, id) => {
        if (id === index) {
          if (reset) {
            return {...obj, score: delta};
          }
          return {...obj, score: obj.score + delta};
        }
        return obj;
      }),
    );
  }

  const dispatch = useDispatch();

  const goToSettings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  const toggleCls = `expand-collapse-icon ${toggle? 'collapsed': ''}`;
  return(
    <div className = "scoreboard">
      <button className={toggleCls} onClick={setToggle} />
      {toggle && <>
        <Header title ={props.title} players={players} />
        <div className = "players">
          {players.map((player, index) => {
              return ( 
                <Player 
                  onScoreChange = {(delta, reset) => { onScoreChange(index,delta,reset)}}
                  // onRemove = {() => {onRemovePlayer(index)}}
                  name = {player.name} 
                  score = {player.score} 
                  key = {player.id}/>
              )
          })}
          {/* <AddPlayerForm onAdd={onPlayerAdd}/> */}
        </div>
        <button onClick={goToSettings}>Open Home Page</button>
        </>
      }
    </div>
  );
}

ScoreBoard.propTypes = {
  title: PropTypes.string, 
  initialPlayers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
  }))
};

ScoreBoard.defaultProps = {
  title: "Scoreboard",
  initialPlayers: PLAYERS,
}

export default ScoreBoard;
