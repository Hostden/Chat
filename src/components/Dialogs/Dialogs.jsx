import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    return ( 
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Pety</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Tanya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                <div className={s.message}>Pariatur, eligendi molestiae.</div>
                <div className={s.message}> Exercitationem esse voluptatibus, modi porro minima magni dignissimos facere quas aliquam obcaecati, debitis eius ipsam animi ipsum harum possimus.</div>
            </div>

        </div>
     );
}
 
export default Dialogs;