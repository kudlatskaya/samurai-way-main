import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import userPhoto from '../../../asets/images/avatar.jpg'
import {ChangeEvent, useEffect, useState} from "react";
import ProfileData from "../ProfileData/ProfileData";
import {ContactsType, ProfileType} from "../ProfileContainer";
import ProfileDataForm, {ProfileDataFormErrorType} from "../ProfileDataForm/ProfileDataForm";
import {FormikErrorType} from "../../Login/LoginForm";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    // console.log(editMode)
    if (!props.profile) return <Preloader/>

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const submit = (formData: ProfileDataFormErrorType) => {
         const {social, fullname, jobLooking, skills, aboutMe} = formData
        // console.log('ku')
        // loginTC(email, password, rememberMe, setStatus)
    }

    return (
        <div className={s.userInfo}>
            <div className={s.userAvatar}>
                <img
                    src={props.profile?.photos.large || userPhoto}
                    alt=""/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            {
                editMode
                    ? <ProfileDataForm profile={props.profile} submit={submit}/>
                    : <ProfileData profile={props.profile} activateEditMode={() => setEditMode(true)}
                                   isOwner={props.isOwner}/>
            }
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};


export default ProfileInfo;