import React from 'react';
import cs from "../common.module.css";
import {NavLink} from "react-router-dom";
import {LoginType} from "../../../state/reducers/authReducer";

type UserNamePropsType = {
    login: LoginType,
    url: string
}

const UserName = ({login, url}: UserNamePropsType) => {
    return (
        <div>
            <NavLink to={url} className={cs.link}
                     activeClassName={cs.active}>@{login}</NavLink>
        </div>
    );
};

export default UserName;