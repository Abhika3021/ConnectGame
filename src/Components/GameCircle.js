import React from 'react'

import "../App.css";

const GameCircle = ({  id, children, className, onCircleClicked }) => {   
    
    return (
        <div className={`gameCircle ${className}`} onClick={ () => onCircleClicked(id)}>
        </div>
    )
}

export default GameCircle;