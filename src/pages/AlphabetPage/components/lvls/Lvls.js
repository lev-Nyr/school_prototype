import React from 'react'
import { loadGameLvl } from '../../../../storage'
import './Lvls.css'
import { LVL_CONST } from './LvlsConst';


function Lvls({ onStartGame }) {
    function handleClick(event) {
        let id = event.target.id;
        let obj = { ...LVL_CONST[id], lvl: id }
        onStartGame(obj)
    }

    return (
        <div className="Lvls">
            <div className="Lvls__continer">
                {Object.keys(LVL_CONST).map((id) => {
                    const settengs = loadGameLvl(id)
                    const { time = 0, errors = 0, isWon = false, date = "дата"  } = settengs ?? {}
                    let styleName = ""
                    if (settengs) {
                        if (isWon) {
                            styleName = "Lvls__isWon"
                        } else {
                            styleName = "Lvls__isWested"
                        }
                    }




                    return (
                        <div className={`Lvls__card ${styleName}`}>
                            <h4>{LVL_CONST[id].lvlName}</h4>
                            <h4>{`время: ${time} секунд`}</h4>
                            <h4>{`ошибка: ${errors}`}</h4>
                            <h6>{`${date}`}</h6>
                            <button className="button" id={id} onClick={handleClick}>Играть</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Lvls;
