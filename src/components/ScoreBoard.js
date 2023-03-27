import React from 'react'
import './ScoreBoard.css';

export const ScoreBoard = ({scores, xPlaying}) => {

    const {xscore, oscore} = scores;

  return (
    <div className='scoreboard'>
    <span className={`score score-x ${!xPlaying && "inactive"}`}>X - {xscore}</span>
    <span className={`score score-y ${xPlaying && "inactive"}`}>O - {oscore}</span>
    </div>
  )
}
