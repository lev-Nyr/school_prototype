import React from 'react'
import { loadGameLvl } from '../../../../storage'
import './Lvls.css'
import { LVL_CONST } from './LvlsConst';


function s() {
    const settings = []
    let time = 10
    let tabSize = 8.999
    for (let i = 20 ; i > 0; i--) {
        
        settings.push(`
        'lvl_${i}_figure': {
            lvlName: "Уровень ${i}",
            tabSize: ${Math.floor(tabSize)},
            showCount: 3,
            maxTime: ${time},
            maxErrors: 3,
        },
        `)
        time *= 1.04
        tabSize -= 0.3333
        
    }

    console.log(settings.reverse().join("\n"))
}



s()
function Lvls({ onStartGame, sign }) {
    function handleClick(event) {
        let id = event.target.id;
        let obj = { ...LVL_CONST[id], lvl: id }
        onStartGame(obj)
    }
    return (
        <div className="Lvls">
            <div className="Lvls__continer">
                {Object.keys(LVL_CONST).map((id) => {
                    const settengs = loadGameLvl(id + sign)
                    const { time = 0, errors = 0, isWon = false, date = "дата"   } = settengs ?? {}
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
                            <h4>{`time: ${time}`}</h4>
                            <h4>{`errors: ${errors}`}</h4>
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
