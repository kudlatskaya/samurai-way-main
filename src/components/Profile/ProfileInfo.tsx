import s from "./ProfileInfo.module.css";
import Preloader from "../Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: null | any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) return <Preloader/>

    return (
        <div className={s.userInfo}>
            <div className={s.userAvatar}><img
                src={props.profile.photos.large}
                alt=""/></div>
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