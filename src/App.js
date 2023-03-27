import React, { useState } from 'react'
import { Board } from './components/Board';
import { ScoreBoard } from './components/ScoreBoard';
import { Reset } from './components/Reset';
import './App.css';

export default function App() {
  
  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board, setboard] = useState(Array(9).fill(null))
  const [xPlaying, setxPlaying] = useState(true)  
  const [scores, setscores] = useState({ xscore: 0, oscore: 0 })
  const [gameover, setgameover] = useState(false)
    
    //onclick on box X will print
  const handleBoxClick = (boxIdx) => {
    const updateboard = board.map((value,idx)=>{
      if(idx === boxIdx){
        return xPlaying === true ? "X" : "O";  
      }
      else{
        return value;
      }
    })
  
    const winner = checkwinner(updateboard);

  if(winner){
  if(winner === "O"){
    let {oscore} = scores;
    oscore += 1;
    setscores({...scores, oscore})
  }
  else{
    let {xscore} = scores;
    xscore +=1;
    setscores({...scores, xscore})
  }
    }
  console.log(scores);
    setboard(updateboard);
    setxPlaying(!xPlaying);   //if x playing x is print else o is print
  }

  const checkwinner = (board) => {
    for(let i = 0; i< WIN_CONDITIONS.length; i++){
      const [x,y,z] = WIN_CONDITIONS[i]

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setgameover(true);
        return board[x];
      }
    }
  }

  const reset = () => {
    setgameover(false)
    setboard(Array(9).fill(null))
  }

  return (
    
    <div className='App'>
    <ScoreBoard scores={scores} xPlaying={xPlaying}/>
    <Board board={board} onClick={gameover ? reset :handleBoxClick}/>
    <Reset reset={reset}/>
    </div>
  )
}
