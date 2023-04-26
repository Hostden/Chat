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

const Dialogs = (props) => {
    return ( 
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name="Dima" id="1" />
                <DialogItems name="Sasha" id="2" />
                <DialogItems name="Petya" id="3" />
                <DialogItems name="Ivan" id="4" />
                <DialogItems name="Tanya" id="5" />
                <DialogItems name="Lena" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>
                <Message message="Exercitationem esse voluptatibus, modi porro minima magni dignissimos facere quas aliquam obcaecati, debitis eius ipsam animi ipsum harum possimus."/>
                <Message message="Pariatur, eligendi molestiae."/>
                <Message message="Hellow World!!"/>
            </div>

        </div>
     );
}
 
export default Dialogs;