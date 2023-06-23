import React, { useState, useEffect } from 'react';
import GameCircle from './GameCircle';

import "../App.css";
import Header from './Header';
import Footer from './Footer';

import { isWinner, isDraw ,getComputerMove } from '../helper';

import { GAME_STATE_PLAY, GAME_STATE_WIN, GAME_STATE_DRAW, No_CIRCLES, NO_PLAYER, PLAYER_1, PLAYER_2 } from './Constants';

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const[gamState, setGameState] = useState(GAME_STATE_PLAY);
    const[winPlayer, setWinPlayer] = useState(NO_PLAYER);

    useEffect( () => {
        initGame();
    }, []
    );

    const initGame = () => {
        setGameBoard(Array(16).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAY);
    }
    const initBoard = () => {
        const circles = [];

        for (let i = 0; i < No_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const suggestMove= () => {
        circleClicked(getComputerMove(gameBoard));
    }

    const circleClicked = (id) => {
        console.log("circle clicked :" + id);

        if(gameBoard[id] !== NO_PLAYER) return; 
        if(gamState !== GAME_STATE_PLAY) return;

        if(isWinner(gameBoard, id, currentPlayer)){
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }

        if(isDraw(gameBoard, id, currentPlayer)){
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
        }

        setGameBoard(prevv => {
            return prevv.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }

    const renderCircle = id => {
        return <GameCircle key= {id} id={id} className={`player${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }

    return (
        <>
        <Header gameState={gamState} player={currentPlayer} winPlayer={winPlayer}/>
        < div className='gameBoard' >
            {initBoard()}
        </div >
        <Footer onClickEvent={initGame} onSuggestClick={suggestMove} gameState={gamState}/>
        </>
    )

}

export default GameBoard;
