import React, {useState} from 'react';
import GameBoard from './components/GameBoard'


const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
            <div>
                <GameBoard setScore={setScore} score={score}/>
            </div>
        )
}

export default App;