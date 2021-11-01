import { loadSound, saveSound } from "../../../storage"

export const AUDEO_GAME_EXAMPLE_EEROR = '/sounds/figure/example_error.mp3'
export const AUDIO_GAME_EXAMPLE_CORRECT ='/sounds/figure/example_correct.mp3'
export const AUDIO_GAME_WASTED ='/sounds/figure/Wasted.mp3'
export const AUDIO_GAME_WON  ='/sounds/figure/Victory.mp3'
export const AUDEO_GAME_BUTTON  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_RECTANGLE  ='/sounds/figure/figure/Прямоугольник.mp3'
export const AUDEO_FIGURE_TRIANGLE  ='/sounds/figure/figure/Треугольник.mp3'
export const AUDEO_FIGURE_STAR  ='/sounds/figure/figure/Звезда.mp3'
export const AUDEO_FIGURE_CIRCLE  ='/sounds/figure/figure/Круг.mp3'
export const AUDEO_FIGURE_TRAPEZIUM  ='/sounds/figure/figure/Трапецию.mp3'
export const AUDEO_FIGURE_SQUARE  ='/sounds/figure/figure/Квадрат.mp3'
export const AUDEO_FIGURE_OVAL  ='/sounds/figure/figure/Овал.mp3'
export const AUDEO_FIGURE_RHOMBUS  ='/sounds/figure/figure/Ромб.mp3'




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
export function stopAudio(path){
    if(loadSound()){
        const audio = new Audio(path)
        audio.pause()
    }
}