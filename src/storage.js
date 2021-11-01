export function saveGameLvl(key, object){
    object.date = new Date().toLocaleString()
    const user = localStorage.getItem("settengUser")
    const objtext = JSON.stringify(object);
    localStorage.setItem(user+key, objtext);
} 

export function loadGameLvl(key){
    const user = localStorage.getItem("settengUser")
    const objtext = localStorage.getItem(user+key)
    try {
        return JSON.parse( objtext );
    } catch (e) {}
}


export function saveSound(sound){
    const user = localStorage.getItem("settengUser")
    const objtext = JSON.stringify({sound});
    localStorage.setItem(user+"settengSound", objtext);
}
export function loadSound(){
    const user = localStorage.getItem("settengUser")
    const objtext = localStorage.getItem(user+"settengSound")
    try {
        return JSON.parse( objtext ).sound;
    } catch (e) {}
    return false
}

export function saveUser(user){
    localStorage.setItem("settengUser",user)
}
export function loadUser(){
    return localStorage.getItem("settengUser")

}