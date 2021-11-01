import { loadSound, saveSound } from "../../../storage"

export const AUDEO_GAME_EXAMPLE_EEROR = '/sounds/figure/example_error.mp3'
export const AUDIO_GAME_EXAMPLE_CORRECT ='/sounds/figure/example_correct.mp3'
export const AUDIO_GAME_WASTED ='/sounds/figure/Wasted.mp3'
export const AUDIO_GAME_WON  ='/sounds/figure/Victory.mp3'
export const AUDEO_GAME_BUTTON  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_а  ='/sounds/Alphabet/a.mp3'
export const AUDEO_б  ='/sounds/Alphabet/б.mp3'
export const AUDEO_в  ='/sounds/Alphabet/в.mp3'
export const AUDEO_г  ='/sounds/Alphabet/г.mp3'
export const AUDEO_д  ='/sounds/Alphabet/д.mp3'
export const AUDEO_е  ='/sounds/Alphabet/е.mp3'
export const AUDEO_ё  ='/sounds/Alphabet/ё.mp3'
export const AUDEO_ж  ='/sounds/Alphabet/ж.mp3'
export const AUDEO_з  ='/sounds/Alphabet/з.mp3'
export const AUDEO_и  ='/sounds/Alphabet/и.mp3'
export const AUDEO_й  ='/sounds/Alphabet/й.mp3'
export const AUDEO_к  ='/sounds/Alphabet/к.mp3'
export const AUDEO_л  ='/sounds/Alphabet/л.mp3'
export const AUDEO_м  ='/sounds/Alphabet/м.mp3'
export const AUDEO_н  ='/sounds/Alphabet/н.mp3'
export const AUDEO_о  ='/sounds/Alphabet/о.mp3'
export const AUDEO_п  ='/sounds/Alphabet/п.mp3'
export const AUDEO_р  ='/sounds/Alphabet/р.mp3'
export const AUDEO_с  ='/sounds/Alphabet/с.mp3'
export const AUDEO_т  ='/sounds/Alphabet/т.mp3'
export const AUDEO_у  ='/sounds/Alphabet/у.mp3'
export const AUDEO_ф  ='/sounds/Alphabet/ф.mp3'
export const AUDEO_х  ='/sounds/Alphabet/х.mp3'
export const AUDEO_ц  ='/sounds/Alphabet/ц.mp3'
export const AUDEO_ч  ='/sounds/Alphabet/ч.mp3'
export const AUDEO_ш  ='/sounds/Alphabet/ш.mp3'
export const AUDEO_щ  ='/sounds/Alphabet/щ.mp3'
export const AUDEO_ъ  ='/sounds/Alphabet/ъ.mp3'
export const AUDEO_ы  ='/sounds/Alphabet/ы.mp3'
export const AUDEO_ь  ='/sounds/Alphabet/ь.mp3'
export const AUDEO_э  ='/sounds/Alphabet/э.mp3'
export const AUDEO_ю ='/sounds/Alphabet/ю.mp3'
export const AUDEO_я  ='/sounds/Alphabet/я.mp3'




export function getSoundState(){

    return loadSound()
}
export function setSoundState(sound){
    saveSound(sound)
}
export function playAudio(path){
    if(loadSound()){
        const audio = new Audio(path)
        audio.play()
    }
}