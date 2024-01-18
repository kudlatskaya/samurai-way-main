import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import React, {useState} from "react";
import ProfileData from "../ProfileData/ProfileData";
import {ProfileType} from "../ProfileContainer";
import ProfileDataForm from "../ProfileDataForm/ProfileDataForm";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType, setStatus: (status: any) => void) => void
}

const ProfileInfo = ({profile, savePhoto, saveProfile, isOwner, status, updateStatus}: ProfileInfoPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) return <Preloader/>

    const submit = async (formData: ProfileType, setStatus: (status: any) => void) => {
        await saveProfile(formData, setStatus)
        setEditMode(false)
    }

    return (
        <div className={s.userInfo}>

            {
                editMode
                    ? <ProfileDataForm profile={profile} submit={submit}/>
                    : <ProfileData profile={profile} activateEditMode={() => setEditMode(true)}
                                   isOwner={isOwner}/>
            }

        </div>
    );
};


export default ProfileInfo;