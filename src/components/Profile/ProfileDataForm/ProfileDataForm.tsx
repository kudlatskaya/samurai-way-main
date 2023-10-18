import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import Contact from "../Contacts/Contact";
import {ContactsType, ProfileType} from "../ProfileContainer";


type ProfileDataType = {
    profile: ProfileType | null
}

const ProfileDataForm = ({profile}: ProfileDataType) => {
    return (
        <div>
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

export default ProfileDataForm;