import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Dimych </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Andrey </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Masha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi Hi</div>
                <div className={s.message}>By</div>
                <div className={s.message}>By By</div>
            </div>
        </div>
    );
};

export default Dialogs;