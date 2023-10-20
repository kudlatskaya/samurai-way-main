import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import userPhoto from '../../../asets/images/avatar.jpg'
import {ChangeEvent, useState} from "react";
import ProfileData from "../ProfileData/ProfileData";
import {ProfileType} from "../ProfileContainer";
import ProfileDataForm, {ProfileDataFormType} from "../ProfileDataForm/ProfileDataForm";
import {setProfileTC} from "../../../state/reducers/profileReducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) return <Preloader/>

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const submit = (formData: ProfileDataFormType | ProfileType) => {
         // formData.userId = props.profile?.userId
        setProfileTC(formData as ProfileType)
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
                    ? <ProfileDataForm profile={props.profile} submit={submit} deactivateEditMode={() => setEditMode(false)}/>
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