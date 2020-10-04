import React from 'react';

const CakeCard = (props) => {

    return (
        <div className="card-container" >
            <div onClick={props.click}><img src={props.cake.photoURL} alt="cake"></img></div>
            <div>{props.cake.name}</div>
        </div>
    )
}

export default CakeCard