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
        props.setScore( prev => prev + 1)
        setCakes(shuffleCakes(cakes))
    };

    useEffect(() => {
        setCakes(shuffleCakes(cakes))
    }, [props.score]);

    const listy = cakes.map(cake => {return  <CakeCard click={() => handleClick(cake)} cake={cake} key={cake.id}/>})

    return (
        <div>
            {listy}
        </div>
    );
};
export default GameBoard