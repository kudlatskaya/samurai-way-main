import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {LoginType, logoutTC} from "../../state/reducers/authReducer";
import {AppStateType} from "../../state/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: LoginType
    photo: null | string
}

type MapDispatchToPropsType = {
    logoutTC: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const HeaderContainer = (props: HeaderContainerPropsType) => {

    return <Header {...props}/>;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
    photo: state.profileReducer.profile.photos.small,
})

export default connect(mapStateToProps, {logoutTC})(HeaderContainer);