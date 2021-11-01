
import React, { useEffect, useState } from 'react'
import './NumberPage.css'

import LossWindow from './components/wasted/WastedWindow'
import VictoryWindow from './components/victory/VictoryWindow '
import Lvls from './components/lvls/Lvls'

import {saveGameLvl} from '../../storage'
import Game from './components/GameNumbers/GameNumbers'
import { AUDIO_GAME_WASTED, AUDIO_GAME_WON, playAudio } from './audios/audios'






export default function NumberPage({ onClose, sign }) {

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
    <div className="NumberPage">
      <div className="NumberPage__menu">
        <h1>Числа</h1>
      </div>
      <div className="NumberPage__page">

        {state === 'WASTED' && <LossWindow onWasted={handleWasted} onClose={handleClose} />}
        {state === 'VITORY' && <VictoryWindow onVictory={handleVictory} onClose={handleClose} />}
        {state === 'GAME' && <Game
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

