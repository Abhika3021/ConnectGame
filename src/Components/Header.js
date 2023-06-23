import React from 'react'

import{
    GAME_STATE_DRAW,
    GAME_STATE_PLAY, GAME_STATE_WIN }from "./Constants";

const Header = ({gameState, player, winPlayer}) => {
    const renderLabel = () => {
        switch(gameState){
            case GAME_STATE_PLAY:
                return <div>Player {player} Turn</div>;
            case GAME_STATE_WIN:
                return <div>Player {winPlayer} Win</div>;
            case GAME_STATE_DRAW:
                return <div>Game Draw!!!</div>;
            default:
        }
    }
  return (
    <div className='panel header'>
        <div className='header-text'>
            {renderLabel()}
        </div>
    </div>
  )
}

export default Header