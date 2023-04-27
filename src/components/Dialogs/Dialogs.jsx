import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

    let dialogsData = [
        { id:1, name:"Dima"},
        { id:2, name:"Sasha"},
        { id:3, name:"Petya"},
        { id:4, name:"Lena"},
        { id:5, name:"Ivan"},
        { id:6, name:"Tanya"}
    ];

    let messageData = [
        {id:1, message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
        {id:2, message:"Exercitationem esse voluptatibus, modi porro minima magni dignissimos facere quas aliquam obcaecati, debitis eius ipsam animi ipsum harum possimus."},
        {id:3, message: "Pariatur, eligendi molestiae."},
        {id:4, message:"Hellow World!!"}
    ];

    let dialogElements = dialogsData.map ( d => <DialogItems name={d.name} id={d.id}/>); 

    let messagesElement = messageData.map ( m => <Message message={m.message}/> );

const Dialogs = (props) => {
    return ( 
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
     );
}
 
export default Dialogs;