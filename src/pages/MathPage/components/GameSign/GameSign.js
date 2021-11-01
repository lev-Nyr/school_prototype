
import React, { useEffect, useState } from 'react'
import './GameSign.css'
import Game from '../game/GameMath'
import LossWindow from '../wasted/WastedWindow'
import VictoryWindow from '../victory/VictoryWindow '
import Lvls from '../lvls/Lvls'
import { AUDIO_GAME_WON, AUDIO_GAME_WASTED, playAudio,  } from '../../audios/audios'
import { saveGameLvl } from '../../../../storage'







function GameSign({ onClose, sign }) {

  const [state, setState] = useState("MENU")
  const [gameLvl, setGameLvl] = useState({})
  const [title, setTitle] = useState("")

  function handleWasted({ worongs, time }) {
    playAudio(AUDIO_GAME_WASTED);
    saveGameLvl(gameLvl.lvl + sign ,{ time, errors: worongs, isWon: false })
    setState('WASTED')
  }

  function handleVictory({ worongs, time }) {
    playAudio(AUDIO_GAME_WON);
    saveGameLvl(gameLvl.lvl + sign ,{ time, errors: worongs, isWon: true })
    setState('VITORY')
  }

  function handleStartGame(lvl) {
    setGameLvl(lvl)
    setState('GAME')
  }

  function handleClose() {
    setState('MENU')
  }
  useEffect(() => {
    switch (sign) {
      case '+': setTitle("Сложение"); break;
      case '*': setTitle("Умножение"); break;
      case '/': setTitle("Деление"); break;
      case '-': setTitle("Вычитание"); break;
      default: setTitle("")
    }

  }, [sign])

  return (
    <div className="GameSign">
      <div className="GameSign__menu">
        <h1>{title} </h1>
      </div>
      <div className="GameSign__page">

        {state === 'WASTED' && <LossWindow onWasted={handleWasted} onClose={handleClose} />}
        {state === 'VITORY' && <VictoryWindow onVictory={handleVictory} onClose={handleClose} />}
        {state === 'GAME' && <Game
          {...gameLvl}
          sign={sign}
          onWasted={handleWasted}
          onVictory={handleVictory}
          onClose={handleClose}

        />}
        {state === 'MENU' && <Lvls sign={sign} onStartGame={handleStartGame} />}

      </div>
    </div>
  );
}

export default GameSign;
