import React from "react";
import {StoreType} from "./redux/state";
// import store from "./redux/redux-store";
import App from "./App";

const StoreContext = React.createContext({} as StoreType);

export type ProviderPropsType = {
    store: StoreType,
    children: React.ReactNode,
}

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store} >
            {props.children}
            < /StoreContext.Provider>
    )
}

export default StoreContext;