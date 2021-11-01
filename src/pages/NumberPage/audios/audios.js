import { loadSound, saveSound } from "../../../storage"

export const AUDEO_GAME_EXAMPLE_EEROR = '/sounds/figure/example_error.mp3'
export const AUDIO_GAME_EXAMPLE_CORRECT ='/sounds/figure/example_correct.mp3'
export const AUDIO_GAME_WASTED ='/sounds/figure/Wasted.mp3'
export const AUDIO_GAME_WON  ='/sounds/figure/Victory.mp3'
export const AUDEO_GAME_BUTTON  ='/sounds/figure/startGame_Figure.mp3'
export const AUDEO_FIGURE_0  ='/sounds/numb/0.mp3'
export const AUDEO_FIGURE_1  ='/sounds/numb/1.mp3'
export const AUDEO_FIGURE_2  ='/sounds/numb/2.mp3'
export const AUDEO_FIGURE_3  ='/sounds/numb/3.mp3'
export const AUDEO_FIGURE_4  ='/sounds/numb/4.mp3'
export const AUDEO_FIGURE_5  ='/sounds/numb/5.mp3'
export const AUDEO_FIGURE_6  ='/sounds/numb/6.mp3'
export const AUDEO_FIGURE_7  ='/sounds/numb/7.mp3'
export const AUDEO_FIGURE_8  ='/sounds/numb/8.mp3'
export const AUDEO_FIGURE_9  ='/sounds/numb/9.mp3'
export const AUDEO_FIGURE_10  ='/sounds/numb/10.mp3'
export const AUDEO_FIGURE_11  ='/sounds/numb/11.mp3'
export const AUDEO_FIGURE_12  ='/sounds/numb/12.mp3'
export const AUDEO_FIGURE_13  ='/sounds/numb/13.mp3'
export const AUDEO_FIGURE_14  ='/sounds/numb/14.mp3'
export const AUDEO_FIGURE_15  ='/sounds/numb/15.mp3'
export const AUDEO_FIGURE_16  ='/sounds/numb/16.mp3'
export const AUDEO_FIGURE_17  ='/sounds/numb/17.mp3'
export const AUDEO_FIGURE_18  ='/sounds/numb/18.mp3'
export const AUDEO_FIGURE_19  ='/sounds/numb/19.mp3'
export const AUDEO_FIGURE_20  ='/sounds/numb/20.mp3'




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