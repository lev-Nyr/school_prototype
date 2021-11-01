import React, { useEffect, useState } from "react";
import { loadUser, saveUser } from "../../storage";

const USERS = {
    "cat": {name:"Котенок", imgUrl:'./img/users/cat.jpg'},
    "avocado": {name:"Авокадо", imgUrl:'./img/users/avocado.png'},
    "peper": {name:"Перец", imgUrl:'./img/users/peper.jpg'},
    "dog": {name:"Щенок", imgUrl:"./img/users/shenok.jpg"},
    "pikachu": {name:"pikachu", imgUrl:"./img/users/pikachu.jpg"},
}

export const UserContext = React.createContext();

function getRandomId(){
    const ids = Object.keys(USERS);
    const random = Math.floor(Math.random()* ids.length)
    return ids[random]
}

export function useUser(){

    const [users , setUsers] = useState(USERS);
    const [userId , setUserId] = useState(loadUser() ?? getRandomId());
    const [userName , setUserName] = useState("")
    const [imgUrl , setUrl] = useState("")

    useEffect(()=>{
        if(!userId){
            return;
        }
        saveUser(userId);
        setUserName(users[userId].name)
        setUrl(users[userId].imgUrl)
    },[userId])

    return {setUserId,userName,imgUrl,userId,users}
}