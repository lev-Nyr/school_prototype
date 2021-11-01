import React from 'react'
import './VictoryWindow.css'

function VictoryWindow ({onClose}){
    return<div className="victory">
        <h1 className="v">victory </h1>
        <input className="button_go_out" type="button" onClick={onClose} value="выйти"/>
    </div>
}
export default VictoryWindow 