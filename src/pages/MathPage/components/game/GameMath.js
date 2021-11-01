
import React, { useEffect, useState } from 'react'
import { mixArray } from '../../../../utils/mixArray';
import { AUDEO_GAME_BUTTON, AUDEO_GAME_EXAMPLE_EEROR, AUDIO_GAME_EXAMPLE_CORRECT,playAudio } from '../../audios/audios';

import Example from './examples/Example';
import './GameMath.css';

function genrateExamples(size) {
    const examples = []

    for (let a = 0; a <= 10; a++) {
        for (let b = 0; b <= a && examples.length < size; b++) {
            examples.push({ a, b })
        }
    }
    return examples
}


function signExamples(examples, sign) {

    const arr = examples.map((item) => {
        if (sign === '+' || sign === '*') {
            if (Math.random() > 0.5) {
                return { a: item.a, b: item.b }
            } else {
                return { a: item.b, b: item.a }
            }
        }
        if (sign === '-') {
            let c = item.a + item.b;
            if (Math.random() > 0.5) {
                return { a: c, b: item.a }
            } else {
                return { a: c, b: item.b }
            }
        }
        if (sign === '/') {
            let c = item.a * item.b;
            if (Math.random() > 0.5) {
                return { a: c, b: item.a }
            } else {
                return { a: c, b: item.b }
            }
        }
        return {}
    })

    if (sign === '/') {
        return arr.filter(item => item.b)
    }
    return arr;
}

const DEF_EX = genrateExamples(10);

export default function GameMath({ onWasted, onVictory, maxTime, maxErrors, lvlName, tabSize, onClose, sign }) {
    
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [index, setIndex] = useState(0)
    const [worongs, setWorongs] = useState(0)
    const [randomExamples, setRandomExamples] = useState(DEF_EX)
    const [time, setTime] = useState(0)
    const [errorClassName, setErrorClassName] = useState("Game__text")
    const [clue, setClue] = useState("")
    
    


    useEffect(() => {

        if (time > maxTime * randomExamples.length) {
            onWasted({ worongs, time })
        }
        const id = setInterval(() => setTime(time + 1), 1000)
        return () => {
            clearInterval(id);
        };

    }, [time, maxTime,randomExamples,onWasted ])
    useEffect(() => {
        playAudio(AUDEO_GAME_BUTTON)
        let newEx = genrateExamples(tabSize);
        newEx = mixArray(newEx)
        newEx = signExamples(newEx, sign)
        setRandomExamples(newEx)
    }, [])

    useEffect(() => {
        if (index < randomExamples.length) {
            setA(randomExamples[index].a)
            setB(randomExamples[index].b)
        } else {
            
            onVictory({ worongs, time })

        }
    }, [index, randomExamples])

    useEffect(() => {
        
        if (worongs >= maxErrors) {
            onWasted({ worongs, time })
        }
    }, [worongs])



    const onRight = () => {
        
        playAudio(AUDIO_GAME_EXAMPLE_CORRECT);
        console.log('Молор')
        setClue("")
        setIndex(index + 1)
        setErrorClassName("GameMath__right")
        setTimeout(()=>setErrorClassName("GameMath__text"),100)

    }
    
    const onWrong = (d) => {
        playAudio(AUDEO_GAME_EXAMPLE_EEROR);
        setWorongs(worongs + 1)
        setClue(`(${a} ${sign} ${b} = ${d})`)
        setErrorClassName("GameMath__error")
        setTimeout(()=>setErrorClassName("GameMath__text"),100)
        
        

    }
    
    return (
        <div className="GameMath">
            <div className={`GameMath__content ${errorClassName} `}>
        
                <h2>{lvlName}</h2>
                <progress className="GameMath__progress" id="file" max={maxTime * randomExamples.length} value={time} />
                <progress className="GameMath__progress" id="file" max={randomExamples.length} value={index} />
                <Example a={a} sign={sign} b={b} onRight={onRight} onWrong={onWrong} />
                <p >ошибок {worongs}/{maxErrors} {clue}</p>
                <button className="button_go_out" onClick={onClose}><img src="/Logo/Закрыть.png"/></button>
            </div>

        </div>
    );
}
