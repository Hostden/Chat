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

    let messagesElement = props.message.map ( m => <Message message={m.message}/> );
    let dialogElements = props.dialogs.map ( d => <DialogItems name={d.name} id={d.id}/>);

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