import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios/index";

type HeaderContainerPropsType = {}

const HeaderContainer = (props: HeaderContainerPropsType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => {
                props.setUserProfile(response.data);
            })
    }, [])

    return <Header {...props}/>;
};

export default HeaderContainer;