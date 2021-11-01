import React, { useEffect, useState } from "react"
import { mixArray } from "../../../../utils/mixArray"
import {playAudio, AUDEO_а, AUDEO_б,AUDEO_г, AUDEO_д, AUDEO_е, AUDEO_ё, AUDEO_ж, AUDEO_в, AUDEO_я, AUDEO_ю, AUDEO_э, AUDEO_ь, AUDEO_ы, AUDEO_ъ, AUDEO_щ, AUDEO_ш, AUDEO_ч, AUDEO_ц, AUDEO_х, AUDEO_ф, AUDEO_у, AUDEO_т, AUDEO_с, AUDEO_р, AUDEO_п, AUDEO_о, AUDEO_н, AUDEO_м, AUDEO_л, AUDEO_к, AUDEO_й, AUDEO_и, AUDEO_з}
    from "../../audiosAlphabet/audiosAlphabet"
import './GameAlphabet.css'

const LETTERS = [
    { id: "а", sound: AUDEO_а, text: 'А' ,soundText:"покажи а" },
    { id: "б", sound: AUDEO_б, text: 'Б',soundText:"покажи б" },
    { id: "в", sound: AUDEO_в, text: 'В' ,soundText:"покажи в" },
    { id: "г", sound: AUDEO_г, text: 'Г',soundText:"покажи г" },
    { id: "д", sound: AUDEO_д, text: 'Д' ,soundText:"покажи д" },
    { id: "е", sound: AUDEO_е, text: 'Е' ,soundText:"покажи е" },
    { id: "ё", sound: AUDEO_ё, text: 'Ё' ,soundText:"покажи ё" },
    { id: "ж", sound: AUDEO_ж, text: 'Ж',soundText:"покажи ж" },
    { id: "з", sound: AUDEO_з, text: 'З',soundText:"покажи з" },
    { id: "и", sound: AUDEO_и, text: 'И',soundText:"покажи и" },
    { id: "й", sound: AUDEO_й, text: 'Й',soundText:"покажи й" },
    { id: "к", sound: AUDEO_к, text: 'К',soundText:"покажи к"},
    { id: "л", sound: AUDEO_л, text: 'Л',soundText:"покажи л"},
    { id: "м", sound: AUDEO_м, text: 'М',soundText:"покажи м"},
    { id: "н", sound: AUDEO_н, text: 'Н',soundText:"покажи н"},
    { id: "о", sound: AUDEO_о, text: 'О',soundText:"покажи о"},
    { id: "п", sound: AUDEO_п, text: 'П',soundText:"покажи п"},
    { id: "р", sound: AUDEO_р, text: 'Р',soundText:"покажи р"},
    { id: "с", sound: AUDEO_с, text: 'С',soundText:"покажи с"},
    { id: "т", sound: AUDEO_т, text: 'Т',soundText:"покажи т"},
    { id: "у", sound: AUDEO_у, text: 'у',soundText:"покажи у"},
    { id: "ф", sound: AUDEO_ф, text: 'Ф',soundText:"покажи ф"},
    { id: "х", sound: AUDEO_х, text: 'Х',soundText:"покажи х"},
    { id: "ц", sound: AUDEO_ц, text: 'Ц',soundText:"покажи ц"},
    { id: "ч", sound: AUDEO_ч, text: 'Ч',soundText:"покажи ч"},
    { id: "ш", sound: AUDEO_ш, text: 'Ш',soundText:"покажи ш"},
    { id: "щ", sound: AUDEO_щ, text: 'Щ',soundText:"покажи щ"},
    { id: "ъ", sound: AUDEO_ъ, text: 'Ъ',soundText:"покажи ъ"},
    { id: "ы", sound: AUDEO_ы, text: 'Ы',soundText:"покажи ы"},
    { id: "ь", sound: AUDEO_ь, text: 'Ь',soundText:"покажи ь"},
    { id: "э", sound: AUDEO_э, text: 'Э',soundText:"покажи э"},
    { id: "ю", sound: AUDEO_ю, text: 'Ю',soundText:"покажи ю"},
    { id: "я", sound: AUDEO_я, text: 'Я',soundText:"покажи я"},
]



function getShowFigures(id, showCount) {
    const showFigurs = [...LETTERS]
    while (showFigurs.length > showCount) {
        const index = Math.floor(Math.random() * showFigurs.length);
        if (showFigurs[index].id !== id) {
            showFigurs.splice(index, 1);
        }
    }

    return showFigurs;
}

export default function GameAlphabet({onWasted, onVictory, tabSize, showCount, onClose, maxErrors, maxTime , lvlName}) {

    const [index, setIndex] = useState(0)
    const [figur, setFigure] = useState("")
    const [letters, setLetters] = useState([]) 
    const [selectedId, setSelectedId] = useState("") 
    const [showFigurs, setShowFigurs] = useState([])
    const [soundText, setSoundText]=useState("")
    const [worongs, setWorongs] = useState(0)
    const [time, setTime] = useState(0)


    const onRight = () => {
        setIndex(index + 1)
        setSelectedId("")
    }
    useEffect(()=>{
        
        setLetters(mixArray(LETTERS.slice(0,tabSize)))
    },[])
    useEffect(() => {
        if(letters.length === 0){
            return;
        }
        if (time > maxTime * letters.length) {
            onWasted({ worongs, time })
        }
        const id = setInterval(() => setTime(time + 1), 1000)
        return () => {
            clearInterval(id);
        };

    }, [time, maxTime,onWasted,letters ])

    const onWrong = () => {
        playAudio('./sounds/figure/OnWrong.mp3')
        setSelectedId(letters[index].id)
        setWorongs(worongs+1)
    }
    useEffect(() => {
        
        if (worongs >= maxErrors) {
            onWasted({ worongs, time })
        }
    }, [worongs])

    useEffect(() => {
        if(letters.length === 0){
            return;
        }
        if (index >= tabSize || index >= letters.length) {
            setFigure("")
            onVictory({worongs, time})
        } else {
            let arr = getShowFigures(letters[index].id, showCount,letters)
            arr = mixArray(arr)
            setShowFigurs(arr)
            setSoundText(letters[index].soundText)
            setFigure(letters[index].id)
            playAudio(letters[index].sound)
        }

    }, [index, letters])
    
    const check = (event) => {
        const id = event.target.id
        if (id === figur) {
            onRight()
        } else {
            onWrong()
        }
    }
    
    const onRiPlay = () => {
        if(letters.length === 0){
            return;
        }
        playAudio(letters[index].sound)
    }

    return (<div>
        
        <p><progress className="Game__progress_time" id="file" max={letters.length * maxTime } value={time} /></p>
        <p><progress className="Game__progress_progress" id="file" max={letters.length} value={index} /></p>
        <h1 >{lvlName}</h1>
        <p >ошибок {worongs}/{maxErrors}</p>
        <p className='soundText' >{soundText}</p>
        
        
        {
            showFigurs.map(({text,id}) => {
                return <button id={id} className={`GameNumber__number ${ id == selectedId ? "GameNumber__number__wrong":"" }`} draggable="false" onClick={check}>{text}</button>
            })
        }
        <button onClick={onRiPlay}><img src="./Logo/Обновить_Звук.png"/></button>
        <button className="button_go_out" onClick={onClose}><img src="./Logo/Закрыть.png"/></button>
        </div>)

}