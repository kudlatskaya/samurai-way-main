import {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import profileReducer, { setUserProfile } from "../../redux/profileReducer";

type ProfileContainerPropsType = {
    profile: null | any
}

const ProfileContainer = (props: ProfileContainerPropsType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);