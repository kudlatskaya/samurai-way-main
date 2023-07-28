import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthTC, logoutTC} from "../../state/authReducer";
import {AppStateType} from "../../state/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthTC: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const HeaderContainer = (props: HeaderContainerPropsType) => {

    useEffect(() => {
        props.getAuthTC()
    }, [])

    return <Header {...props}/>;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

export default connect(mapStateToProps, {getAuthTC, logoutTC})(HeaderContainer);