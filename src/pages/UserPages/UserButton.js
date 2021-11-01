import React, { useContext } from "react"
import { UserContext } from "./UserContext";
import './UserButton.css'

export default function UserButton() {
    const { userName, imgUrl } = useContext(UserContext)

    return (<a className="UserButton" href="/user">
        <p>{userName}</p>
        <img className="UserButton__img" src={imgUrl} alt={userName} />
    </a>

    )
}