
import React, {useState} from 'react'
import { saveGameLvl } from '../../storage'
import { AUDIO_GAME_WASTED, AUDIO_GAME_WON, playAudio } from './audios/audios'
import GameFigures from './components/Game/GameFigures'
import Lvls from './components/lvls/Lvls'
import VictoryWindow from './components/victory/VictoryWindow '
import LossWindow from './components/wasted/WastedWindow'
import './FiguresPage.css'







function PageFigurs({ onClose, sign }) {

  const [state, setState] = useState("MENU")
  const [gameLvl, setGameLvl] = useState({})
  const [title, setTitle] = useState("")
  


  function handleWasted({ worongs, time }) {
    playAudio(AUDIO_GAME_WASTED);
    saveGameLvl(gameLvl.lvl, { time, errors: worongs, isWon: false })
    setState('WASTED')
  }

  function handleVictory({ worongs, time }) {
    playAudio(AUDIO_GAME_WON);
    saveGameLvl(gameLvl.lvl, { time, errors: worongs, isWon: true })
    setState('VITORY')
  }

  function handleStartGame(settings) {
    setGameLvl(settings)
    setState('GAME')
  }

  function handleClose() {
    setState('MENU')
  }
  return (
    <div className="FigursPage">
      <div className="FigursPage__menu">
        <h1>Фигуры</h1>
      </div>
      <div className="FigursPage__page">

        {state === 'WASTED' && <LossWindow onWasted={handleWasted} onClose={handleClose} />}
        {state === 'VITORY' && <VictoryWindow onVictory={handleVictory} onClose={handleClose} />}
        {state === 'GAME' && <GameFigures
          maxErrors={gameLvl.maxErrors}
          tabSize={gameLvl.tabSize}
          showCount={gameLvl.showCount}
          maxTime={gameLvl.maxTime}
          
          onWasted={handleWasted}
          onVictory={handleVictory}
          onClose={handleClose}

        />}
        {state === 'MENU' && <Lvls onStartGame={handleStartGame} />}


      </div>
    </div>
  );
}

export default PageFigurs;
