import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import userPhoto from '../../../asets/images/avatar.jpg'
import {ChangeEvent, useState} from "react";
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
    // console.log('ProfileInfo')
    let [editMode, setEditMode] = useState<boolean>(false)
    let fileStyle = s.file

    if (!profile) return <Preloader/>

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    // const openFile = () => {
    //     fileStyle += ` ${s.fileEnter}`
    //     console.log(fileStyle)
    // }

    const submit = async (formData: ProfileType, setStatus: (status: any) => void) => {
        await saveProfile(formData, setStatus)
        setEditMode(false)
    }

    return (
        <div className={s.userInfo}>
            <div className={s.userAvatar}>
                <div className={s.avatar}>
                    <img src={profile?.photos?.large || userPhoto}
                         alt=""/>
                    {isOwner && <input type={'file'} className={fileStyle} onChange={onMainPhotoSelected}/>}
                </div>

            </div>
            {
                editMode
                    ? <ProfileDataForm profile={profile} submit={submit}/>
                    : <ProfileData profile={profile} activateEditMode={() => setEditMode(true)}
                                   isOwner={isOwner}/>
            }
            <div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};


export default ProfileInfo;