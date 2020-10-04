import React, {useState, useEffect} from 'react';
import CakeCard from './CakeCard'
import cakeList from './CakeList.json'

const shuffleCakes = (array) => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    return array
}

const GameBoard = (props) =>{
    const [cakes, setCakes] = useState(() => shuffleCakes(cakeList));

    const handleClick = (e) => {
        if (e.clicked === false){
            props.setScore( prev => prev + 1)
            e.clicked = true
        }
        else{
            cakes.map(cake => cake.clicked = false)
            props.setScore(0)
        }
    };

    useEffect(() => {
        setCakes(shuffleCakes(cakes))
    }, [props.score]);

    const boardList = cakes.map(cake => {return  <CakeCard click={() => handleClick(cake)} cake={cake} key={cake.id}/>})

    return (
        <div className="game-container">
            {boardList}
        </div>
    );
};
export default GameBoard