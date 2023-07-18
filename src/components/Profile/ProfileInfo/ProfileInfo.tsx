import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: null | any
    status: string
    updateStatus: (status: string) => void,
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) return <Preloader/>

    return (
        <div className={s.userInfo}>
            <div className={s.userAvatar}>
                <img
                src={props.profile.photos.large}
                alt=""/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.userName}>
                <p>My name</p>
                <p>{props.profile.name}</p>
                <p>My age</p>
                <p>{props.profile.age}</p>
                <p>My city</p>
                <p>{props.profile.city}</p>
            </div>
        </div>

    );
};

export default ProfileInfo;