import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import Contact from "../Contacts/Contact";
import {ContactsType, ProfileType} from "../ProfileContainer";


type ProfileDataType = {
    profile: ProfileType | null
    isOwner: boolean,
    activateEditMode: () => void
}

const ProfileData = ({profile, isOwner, activateEditMode}: ProfileDataType) => {

    return (
        <div>
            {
                isOwner && <div><button onClick={activateEditMode}>edit</button></div>
            }
            <div>
                <div>Full name: {profile?.fullName}</div>
                <div>Looking for a job: {profile?.lookingForAJob ? 'yes' : 'no'}</div>
                <div>My professional skills: {profile?.lookingForAJobDescription}</div>
                <div>About me: {profile?.aboutMe}</div>

                <div>
                    Contacts: {
                    profile && Object.keys(profile.contacts).map(key =>
                        <Contact key={key} contactTitle={key} contactValue={profile?.contacts[key as keyof ContactsType]}/>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default ProfileData;