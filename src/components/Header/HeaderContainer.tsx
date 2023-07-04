import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {socialNetworkApi} from "../../api/social-network-api";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserData: (userId: number, email: string, login: string) => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const HeaderContainer = (props: HeaderContainerPropsType) => {

    useEffect(() => {
        socialNetworkApi.getAuth()
            .then(response => {
                if(response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    props.setUserData(id, email, login)
                }
            })
    }, [])

    return <Header {...props}/>;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);