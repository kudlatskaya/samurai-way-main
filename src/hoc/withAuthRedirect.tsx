import {Redirect} from "react-router-dom";
import {AppStateType} from "../state/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.authReducer.isAuth
})

 function withAuthRedirect <T>(Component: React.ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if(!isAuth) return <Redirect to={'/login'} />
        return <Component {...restProps as T}/>
    };

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent
};

export default withAuthRedirect;