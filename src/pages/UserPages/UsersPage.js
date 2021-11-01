import React, { useContext} from "react"
import { UserContext } from "./UserContext";
import "./UsersPage.css"


export default function UsersPage() {
    const {setUserId,users,userId} = useContext(UserContext)


    const handleClick = (event)=>{
        const id = event.target.id;
        setUserId(id);
    }

    
    
    return (<div className={"UsersPage"}>
        {Object.keys(users).map((id)=>{
            const {name,imgUrl} = users[id]
            return <button key={id} id={id} className={`UsersPage__card ${userId==id ? "UsersPage__card_selected":"" }`} onClick={handleClick} >
                <h1>{name}</h1>
                <img className={"UsersPage__img"} src={imgUrl} alt={name}/>
            </button>
        })}
    </div>)
}