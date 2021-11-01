import React , {useState}from 'react'
import './WastedWindow.css'

function LossWindow({onClose}){
    return<div className="WastedWindow">
        <p className="defeat">Defeat</p>
        <div className="Amogus"></div>
        <input className="button_go_out" type="button" onClick={onClose} value="go out"/>
    </div>
}
export default LossWindow
