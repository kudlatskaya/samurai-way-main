import React, {ChangeEvent} from 'react';
import s from "./Avatar.module.css";
import userPhoto from "../../../asets/images/avatar.jpg";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import editPoint from "../../../asets/images/editPoint.svg";
import {ProfileType} from "../ProfileContainer";

type AvatarPropsType = {
    savePhoto: (file: File) => void,
    isOwner: boolean,
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
}

const Avatar = ({savePhoto, isOwner, profile, status, updateStatus}: AvatarPropsType) => {
    let fileStyle = s.file

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.userAvatar}>
            <div className={s.avatar}>
                <img src={profile?.photos?.large || userPhoto}
                     alt=""/>
                {isOwner && <input type={'file'} className={fileStyle} onChange={onMainPhotoSelected}/>}
            </div>

            <ProfileStatus status={status} updateStatus={updateStatus}/>

            <div className={s.edit}><img src={editPoint} alt=""/></div>
        </div>
    );
};

export default Avatar;