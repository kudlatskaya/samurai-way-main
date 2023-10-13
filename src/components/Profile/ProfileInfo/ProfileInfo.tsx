import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import userPhoto from '../../../asets/images/avatar.jpg'

type ProfileInfoPropsType = {
    profile: null | any
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) return <Preloader/>

    return (
        <div className={s.userInfo}>
            <div className={s.userAvatar}>
                <img
                    src={props.profile.photos.large || userPhoto}
                    alt=""/>
                {props.isOwner && <input type={'file'}/>}
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