import React, { useEffect, useState } from "react"
import { mixArray } from "../../../../utils/mixArray"
import {stopAudio, AUDEO_FIGURE_RECTANGLE, AUDEO_FIGURE_CIRCLE, AUDEO_FIGURE_TRIANGLE, AUDEO_FIGURE_STAR, AUDEO_FIGURE_TRAPEZIUM, AUDEO_FIGURE_SQUARE, AUDEO_FIGURE_RHOMBUS, AUDEO_FIGURE_OVAL, playAudio }
    from "../../audios/audios"
import './GameFigures.css'
const FIGERES = [
    { id: "rectangle", sound: AUDEO_FIGURE_RECTANGLE, img: './Logo/Прямоугольник.png',imgSelected:'./Logo/Прямоугольник2.png',soundText:"покажи прямоугольник"},
    { id: "triangle", sound: AUDEO_FIGURE_TRIANGLE, img: './Logo/Треугольник.png',imgSelected:'./Logo/Треугольник2.png',soundText:"покажи треугольник" },
    { id: "star", sound: AUDEO_FIGURE_STAR, img: './Logo/Звезда.png',imgSelected:'./Logo/Звезда2.png',soundText:"покажи звезду" },
    { id: "circle", sound: AUDEO_FIGURE_CIRCLE, img: './Logo/Круг.png',imgSelected:'./Logo/Круг2.png',soundText:"покажи круг" },
    { id: "trapezium", sound: AUDEO_FIGURE_TRAPEZIUM, img: './Logo/Трапеция.png',imgSelected:'./Logo/Трапеция2.png',soundText:"покажи трапецию" },
    { id: "square", sound: AUDEO_FIGURE_SQUARE, img: './Logo/Квадрат.png',imgSelected:'./Logo/Квадрат2.png',soundText:"покажи квадрат" },
    { id: "oval", sound: AUDEO_FIGURE_OVAL, img: './Logo/Овал.png',imgSelected:'./Logo/Овал2.png',soundText:"покажи овал" },
    { id: "rhombus", sound: AUDEO_FIGURE_RHOMBUS, img: './Logo/Ромб.png',imgSelected:'./Logo/Ромб2.png',soundText:"покажи ромб" },
]



function getShowFigures(id, showCount) {
    const showFigurs = [...FIGERES]
    while (showFigurs.length > showCount) {
        const index = Math.floor(Math.random() * showFigurs.length);
        if (showFigurs[index].id !== id) {
            showFigurs.splice(index, 1);
        }
    }
    for (let i = 0; i < showFigurs.length; i++) {
        let random = Math.floor(Math.random() * showFigurs.length)
        let element = showFigurs[random]
        showFigurs[random] = showFigurs[i]
        showFigurs[i] = element
    }
    return showFigurs;
}

export default function GameFigures({onWasted, onVictory, tabSize, showCount, onClose, maxErrors, maxTime }) {

    const [index, setIndex] = useState(0)
    const [figur, setFigure] = useState("")
    const [figures, setLetters] = useState([]) 
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
        
        setLetters(mixArray(FIGERES.slice(0,tabSize)))
    },[])
    useEffect(() => {
        if(figures.length === 0){
            return;
        }
        if (time > maxTime * showFigurs.length) {
            onWasted({ worongs, time })
        }
        const id = setInterval(() => setTime(time + 1), 1000)
        return () => {
            clearInterval(id);
        };

    }, [time, maxTime,showFigurs,onWasted,figures ])

    const onWrong = () => {
        playAudio('./sounds/figure/OnWrong.mp3')
        setSelectedId(figures[index].id)
        stopAudio(figures[index].sound)
        setWorongs(worongs+1)
    }
    useEffect(() => {
        
        if (worongs >= maxErrors) {
            onWasted({ worongs, time })
            stopAudio(figures[index].sound)
        }
    }, [worongs])

    useEffect(() => {
        if(figures.length === 0){
            return;
        }
        if (index >= tabSize || index >= figures.figures) {
            setFigure("")
            onVictory({worongs, time})
        } else {
            let arr = getShowFigures(figures[index].id, showCount,figures)
            arr = mixArray(arr)
            setShowFigurs(arr)
            setSoundText(figures[index].soundText)
            setFigure(figures[index].id)
            stopAudio(figures[index].sound)
            playAudio(figures[index].sound)
        }

    }, [index, figures])
    
    const check = (event) => {
        const id = event.target.id
        if (id === figur) {
            onRight()
        } else {
            onWrong()
        }
    }
    
    const onRiPlay = () => {
        if(figures.length === 0){
            return;
        }
        playAudio(figures[index].sound)
    }

 

    return (<div>
        
        <p>time <progress className="Game__progress" id="file" max={maxTime * showFigurs.length} value={time} /></p>
        <p >ошибок {worongs}/{maxErrors}</p>
        <p className >{soundText}</p>
        
        
        {
            showFigurs.map(({ img, id, imgSelected }) => {
                return <img id={id} className="GameFigures__figur-img" draggable="false" onClick={check} src={id == selectedId ? imgSelected :img  } />
            })
        }
        <button onClick={onRiPlay}><img src="./Logo/Обновить_Звук.png"/></button>
        <button className="button_go_out" onClick={onClose}><img src="./Logo/Закрыть.png"/></button>
        </div>)

}