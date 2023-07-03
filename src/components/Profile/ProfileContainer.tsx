import {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import profileReducer, { setUserProfile } from "../../redux/profileReducer";
import {useParams, withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    profile: null | any,
    setUserProfile: (profile: any) => {}
}

const ProfileContainer = (props: any) => {
    const params = useParams<{ userId: string }>();
    // console.log(params)
    let userId = +params.userId;
    if(!userId) userId = 2;

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data);
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerUrl);