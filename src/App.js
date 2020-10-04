import React, {useState, useEffect} from 'react';
import GameBoard from './components/GameBoard'
import TitleBar from './components/TitleBar'


const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        if (score > bestScore){
            setBestScore(score);
        }
    }, [score])

    return (
            <div>
                <TitleBar score={score} bestScore={bestScore}/>
                <GameBoard setScore={setScore} score={score}/>
            </div>
        )
}

export default App;