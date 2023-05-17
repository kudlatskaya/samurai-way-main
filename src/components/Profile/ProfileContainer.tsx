import {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import profileReducer, { setUserProfile } from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    profile: null | any
}

const ProfileContainer = (props: ProfileContainerPropsType) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if(!userId) userId = 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                setUserProfile(response.data);
            })
    }, [])

    return (
        <div>
            <Profile {...props} profile={props.profile}/>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    profile: state.profileReducer.profile
})

let ProfileContainerUrl =  withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);