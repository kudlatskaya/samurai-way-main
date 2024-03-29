import React from 'react';
import Contact from "../Contacts/Contact";
import {ContactsType, ProfileType} from "../ProfileContainer";
import s from './ProfileData.module.css';
import edit from '../../../asets/images/edit.svg';


type ProfileDataType = {
    profile: ProfileType | null
    isOwner: boolean,
    activateEditMode: () => void
}

const ProfileData = ({profile, isOwner, activateEditMode}: ProfileDataType) => {

    return (
        <div className={s.userInfo}>

            <table>
                <tr>
                    <td>Full name:</td>
                    <td>{profile?.fullName}</td>

                </tr>
                <tr>
                    <td>Looking for a job:</td>
                    <td>{profile?.lookingForAJob ? 'yes' : 'no'}</td>
                </tr>
                <tr>
                    <td>My professional skills:</td>
                    <td>{profile?.lookingForAJobDescription}</td>
                </tr>
                <tr>
                    <td>About me:</td>
                    <td>{profile?.aboutMe}</td>
                </tr>
                <tr>
                    <td colSpan={2}><b>Contacts</b></td>
                </tr>
                {
                    profile?.contacts && Object.keys(profile.contacts).map(key =>
                        <Contact key={key} contactTitle={key}
                                 contactValue={profile.contacts[key as keyof ContactsType]}/>
                    )
                }
            </table>
            <div>
                {
                    isOwner && <div>
                        <button className={s.edit} onClick={activateEditMode}>
                            <img src={edit} alt=""/>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProfileData;