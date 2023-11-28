import React from 'react';
import cs from "../common.module.css";
import {NavLink} from "react-router-dom";
import {LoginType} from "../../../state/reducers/authReducer";

type UserNamePropsType = {
    login: LoginType
}

const UserName = ({login}: UserNamePropsType) => {
    return (
        <div>
            <NavLink to="/profile/28736" className={cs.link}
                     activeClassName={cs.active}>@{login}</NavLink>
        </div>
    );
};

export default UserName;