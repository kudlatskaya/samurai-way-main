import {Redirect} from "react-router-dom";

const AuthRedirect = (Component: React.FC<any>) => {
    const RedirectComponent = (props: any) => {
        if(!props.isAuth) return <Redirect to={'/login'} />
        return <Component {...props}/>
    };

    return RedirectComponent
};

export default AuthRedirect;