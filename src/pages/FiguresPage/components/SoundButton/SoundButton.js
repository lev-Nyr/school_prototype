import { useEffect, useState } from "react";
import { getSoundState, setSoundState } from "../../../../audios/audios";
import './SoundButton.css'


function SoundButton() {

    const [isSound, setSound] = useState(getSoundState())
    const [buttonText, setButtonText] = useState("")

    useEffect(() => {
        setSoundState(isSound)
        if (isSound) {
            setButtonText("🔈")

        } else {
            setButtonText("🔇")
        }
    }, [isSound])

    function changeSound() {
        setSound(!isSound)
    }
    return (<div className="SoundButton">
        <button className="SoundButton__button" onClick={changeSound} >{buttonText}</button>
    </div>)

}
export default SoundButton;