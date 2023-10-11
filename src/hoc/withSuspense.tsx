import React, {Suspense} from 'react';
import Preloader from "../components/Preloader/Preloader";

function withSuspense<T>(Component: React.ComponentType<T>) {
    return (props: any) => {
        return (
            <Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </Suspense>
        )
    }
};

export default withSuspense;