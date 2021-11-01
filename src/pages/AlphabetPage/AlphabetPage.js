
import React, {useState} from 'react'
import { saveGameLvl } from '../../storage'

import './AlphabetPage.css'
import { AUDIO_GAME_WASTED, AUDIO_GAME_WON, playAudio } from './audiosAlphabet/audiosAlphabet'
import GameAlphabet from './components/alphabet/GameAlphabet'
import Lvls from './components/lvls/Lvls'
import VictoryWindow from './components/victory/VictoryWindow '
import LossWindow from './components/wasted/WastedWindow'








export default function AlphabetPage({ onClose, sign }) {

  const [state, setState] = useState("MENU")
  const [gameLvl, setGameLvl] = useState({})

  

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
    <div className="AlphabetPage">
      <div className="AlphabetPage__menu">
        <h1>Алфавит</h1>
      </div>
      <div className="AlphabetPage__page">

        {state === 'WASTED' && <LossWindow onWasted={handleWasted} onClose={handleClose} />}
        {state === 'VITORY' && <VictoryWindow onVictory={handleVictory} onClose={handleClose} />}
        {state === 'GAME' && <GameAlphabet
          maxErrors={gameLvl.maxErrors}
          lvlName={gameLvl.lvlName}
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

