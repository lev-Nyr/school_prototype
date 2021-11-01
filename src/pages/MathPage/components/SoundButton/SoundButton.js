import { useEffect, useState } from "react";
import { getSoundState, setSoundState } from "../../audios/audios";
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
    return (<button className="SoundButton" onClick={changeSound} >{buttonText}</button>)

}
export default SoundButton;