import React from 'react'
import { GAME_STATE_PLAY } from './Constants'

const Footer = ({onClickEvent , onSuggestClick, gameState}) => {
  return (
    <div className='panel footer'>
      {
        gameState !== GAME_STATE_PLAY && 
        <button onClick={onClickEvent}>New Game</button>
      }
      {
        gameState === GAME_STATE_PLAY &&
        <button onClick={onSuggestClick}>Suggest</button>
      }
    </div>
  )
}

export default Footer