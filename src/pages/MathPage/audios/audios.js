import { loadSound, saveSound } from "../../../storage"

export const AUDEO_GAME_EXAMPLE_EEROR = '/sounds/game/example_error.mp3'
export const AUDIO_GAME_EXAMPLE_CORRECT ='/sounds/game/example_correct.mp3'
export const AUDIO_GAME_WASTED ='/sounds/game/Wasted.mp3'
export const AUDIO_GAME_WON  ='/sounds/game/Victory.mp3'
export const AUDEO_GAME_BUTTON  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_RECTANGLE  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_TRIANGLE  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_STAR  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_CIRCLE  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_TRAPEZIUM  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_SQUARE  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_OVAL  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_RHOMBUS  ='/sounds/figure/startGame_Figure.mp3'






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