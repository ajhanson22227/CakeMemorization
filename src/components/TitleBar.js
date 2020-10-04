import React from 'react';

const TitleBar = (props) => {


    return (
        <div className="score-container">
            <div style={{"fontSize":"32px"}}>Cake Memory</div>
            <div>Current Score: {props.score}</div>
            <div>High Score: {props.bestScore}</div>
        </div>
    )
}

export default TitleBar;