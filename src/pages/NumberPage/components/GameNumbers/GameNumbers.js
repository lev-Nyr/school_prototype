import React, { useEffect, useState } from "react"
import { mixArray } from "../../../../utils/mixArray"
import {playAudio, AUDEO_FIGURE_1, AUDEO_FIGURE_2, AUDEO_FIGURE_3, AUDEO_FIGURE_4, AUDEO_FIGURE_5, AUDEO_FIGURE_6, AUDEO_FIGURE_7, AUDEO_FIGURE_8, AUDEO_FIGURE_9, AUDEO_FIGURE_10, AUDEO_FIGURE_0, AUDEO_FIGURE_11, AUDEO_FIGURE_12, AUDEO_FIGURE_13, AUDEO_FIGURE_14, AUDEO_FIGURE_15, AUDEO_FIGURE_16, AUDEO_FIGURE_17, AUDEO_FIGURE_18, AUDEO_FIGURE_19, AUDEO_FIGURE_20 }
    from "../../audios/audios"
import './GameNumbers.css'
const NAMBERS = [
    { id: "namber0", sound: AUDEO_FIGURE_0, text:"0", soundText:"покажи ноль" },
    { id: "namber1", sound: AUDEO_FIGURE_1, text:"1", soundText:"покажи один"  },
    { id: "namber2", sound: AUDEO_FIGURE_2, text:"2", soundText:"покажи два"  },
    { id: "namber3", sound: AUDEO_FIGURE_3, text:"3", soundText:"покажи три" },
    { id: "namber4", sound: AUDEO_FIGURE_4, text:"4", soundText:"покажи четыре"  },
    { id: "namber5", sound: AUDEO_FIGURE_5, text:"5", soundText:"покажи пять"  },
    { id: "namber6", sound: AUDEO_FIGURE_6, text:"6", soundText:"покажи шесть"  },
    { id: "namber7", sound: AUDEO_FIGURE_7, text:"7", soundText:"покажи семь"  },
    { id: "namber8", sound: AUDEO_FIGURE_8, text:"8", soundText:"покажи восемь"  },
    { id: "namber9", sound: AUDEO_FIGURE_9, text:"9", soundText:"покажи девять"  },
    { id: "namber10", sound: AUDEO_FIGURE_10, text:"10", soundText:"покажи десять"  },
    { id: "namber11", sound: AUDEO_FIGURE_11, text:"11", soundText:"покажи одинадцать"  },
    { id: "namber12", sound: AUDEO_FIGURE_12, text:"12", soundText:"покажи двенадцать"  },
    { id: "namber13", sound: AUDEO_FIGURE_13, text:"13", soundText:"покажи тринадцать"  },
    { id: "namber14", sound: AUDEO_FIGURE_14, text:"14", soundText:"покажи четырнадцать"  },
    { id: "namber15", sound: AUDEO_FIGURE_15, text:"15", soundText:"покажи пятнадцать"  },
    { id: "namber16", sound: AUDEO_FIGURE_16, text:"16", soundText:"покажи шестнадцать"  },
    { id: "namber17", sound: AUDEO_FIGURE_17, text:"17", soundText:"покажи семнадцать"  },
    { id: "namber18", sound: AUDEO_FIGURE_18, text:"18", soundText:"покажи восемнадцать"  },
    { id: "namber19", sound: AUDEO_FIGURE_19, text:"19", soundText:"покажи девятнадцать"  },
    { id: "namber20", sound: AUDEO_FIGURE_20, text:"20", soundText:"покажи двадцать"  },
    
]



function getShowNumbers(id, showCount, nambers) {
    const showNumbers = [...nambers]
    
    while (showNumbers.length > showCount) {
        const index = Math.floor(Math.random() * showNumbers.length);
        if (showNumbers[index].id !== id) {
            showNumbers.splice(index, 1);
        }
    }
    return showNumbers;
}

export default function GameNumber({onWasted, onVictory, tabSize, showCount, onClose, maxErrors, maxTime }) {
    const [nambers, setNambers] = useState([]) 
    const [selectedId, setSelectedId] = useState("") 
    const [index, setIndex] = useState(0)
    const [figur, setFigure] = useState("")
    const [showNumbers, setShowNumbers] = useState([])
    const [worongs, setWorongs] = useState(0)
    const [time, setTime] = useState(0)
    const [soundText, setSoundText]=useState("")
    
    const onRight = () => {
        setIndex(index + 1)
        setSelectedId("")
    }

    useEffect(()=>{
        
        setNambers(mixArray(NAMBERS.slice(0,tabSize)))
    },[])

    useEffect(() => {
        if(nambers.length === 0){
            return;
        }
        if (time > maxTime * nambers.length) {
            onWasted({ worongs, time })
        }
        const id = setInterval(() => setTime(time + 1), 1000)
        return () => {
            clearInterval(id);
        };

    }, [time, maxTime,onWasted,nambers ])

    const onWrong = () => {
        playAudio('./sounds/figure/OnWrong.mp3')
        setSelectedId(nambers[index].id)
        setWorongs(worongs+1)
    }
    useEffect(() => {
        
        if (worongs >= maxErrors) {
            onWasted({ worongs, time })
        }
    }, [worongs])

    useEffect(() => {
        if(nambers.length === 0){
            return;
        }
        if (index >= tabSize || index >= nambers.length) {
            setFigure("")
            onVictory({worongs, time})
        } else {
            let arr = getShowNumbers(nambers[index].id, showCount,nambers)
            arr = mixArray(arr)
            setShowNumbers(arr)
            setSoundText(nambers[index].soundText)
            setFigure(nambers[index].id)
            playAudio(nambers[index].sound)
        }

    }, [index, nambers])
    
    const check = (event) => {
        const id = event.target.id
        if (id === figur) {
            onRight()
        } else {
            onWrong()
        }
    }
    
    const onRiPlay = () => {
        if(nambers.length === 0){
            return;
        }
        playAudio(nambers[index].sound)
    }
    console.log(nambers.length)
    return (<div>
        
        <p> <progress className="Game__progress_time" id="file" max={maxTime * nambers.length} value={time} /></p>
        <progress className="Game__progress_progress" id="file" max={nambers.length} value={index} />
        <p >ошибок {worongs}/{maxErrors}</p>
        <p>{soundText}</p>
        
        {
            showNumbers.map(({ text, id, worongs }) => {
                return <button id={id} className={`GameNumber__number ${ id == selectedId ? "GameNumber__number__wrong":"" }`} draggable="false" onClick={check} >{text}</button>
            })
        }
        <button onClick={onRiPlay}><img src="./Logo/Обновить_Звук.png"/></button>
        <button className="button_go_out" onClick={onClose}><img src="./Logo/Закрыть.png"/></button>
        </div>)

}