import React from 'react';
import s from "./UserFoto.module.css";
import avatar from "../../../asets/images/avatar.jpg";

type UserFotoPropsType = {
    userFoto: null | string
}

const UserFoto = ({userFoto}: UserFotoPropsType) => {

    return (
        <div className={s.avatar}>
            <img src={userFoto || avatar} alt=""/>
        </div>
    );
};

export default UserFoto;