import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import PLAYERS  from '../constants/players';

const Player = (props) => {
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
          <div className= "counter-score"> {props.score} </div>
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

  const onScoreChange = (index, delta) => {
    setPlayers((current) =>
      current.map((obj, id) => {
        if (id === index) {
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

  return(
    <div className = "scoreboard">
      <Header title ={props.title} players={players} />
      <div className = "players">
        {players.map((player, index) => {
            return ( 
              <Player 
                onScoreChange = {(delta) => { onScoreChange(index,delta)}}
                // onRemove = {() => {onRemovePlayer(index)}}
                name = {player.name} 
                score = {player.score} 
                key = {player.id}/>
            )
        })}
        {/* <AddPlayerForm onAdd={onPlayerAdd}/> */}
      </div>
      <button onClick={goToSettings}>Open Home Page</button>
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
