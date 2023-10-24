import React from 'react';
import Contact from "../Contacts/Contact";
import {ContactsType, ProfileType} from "../ProfileContainer";
import {Field, Form, Formik} from "formik";
import {PhotosType} from "../../../state/reducers/profileReducer";

export type ProfileDataFormType = {
    contacts?: ContactsType | undefined | null
    fullName?: string | null
    lookingForAJob?: boolean | null
    lookingForAJobDescription?: string | null
    aboutMe?: string | null
}

type ProfileDataFormPropsType = {
    profile: ProfileType | null
    submit: (values: ProfileType) => void
    deactivateEditMode: () => void
}

// export type ProfileType = {
//     aboutMe: string | null,
//     contacts: ContactsType,
//     lookingForAJob: boolean,
//     lookingForAJobDescription: string | null,
//     fullName: string,
//     userId: string | undefined,
//     photos: PhotosType;
// }

const ProfileDataForm = ({profile, submit, deactivateEditMode}: ProfileDataFormPropsType) => {

    return (
        <div>
            <Formik
                initialValues={{
                    contacts: profile?.contacts || null,
                    fullName: profile?.fullName || '',
                    lookingForAJob: profile?.lookingForAJob ? true : false,
                    lookingForAJobDescription: profile?.lookingForAJobDescription || '',
                    aboutMe: profile?.aboutMe || ''
                }}
                onSubmit={(values: ProfileDataFormType | ProfileType, actions) => {
                    deactivateEditMode()
                    submit(values as ProfileType)

                    // actions.resetForm()
                }}
            >
                {props => (
                <Form>
                    <div>
                        <button type="submit">save</button>
                    </div>
                    <div>
                        <label htmlFor="fullName">Full name:</label>
                        <Field id="fullName" name="fullName"/>
                    </div>
                    <div>
                        <label htmlFor="lookingForAJob">Looking for a job: </label>
                        <Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>
                    </div>
                    <div>
                        <label htmlFor="lookingForAJobDescription">My professional skills: </label>
                        <Field as="textarea" id="lookingForAJobDescription" name="lookingForAJobDescription"/>
                    </div>
                    <div>
                        <label htmlFor="aboutMe">About me: </label>
                        <Field as="textarea" id="aboutMe" name="aboutMe"/>
                    </div>

                    <div>
                        Contacts:
                        {profile && Object.keys(profile?.contacts).length > 0 && (
                            Object.keys(profile?.contacts).map((key, index) => (
                                <div key={index}>
                                    <label htmlFor={`${key}`}>{key}: </label>
                                    <Field id={`${key}`} name={`${key}`}/>
                                </div>
                            ))
                        )}
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProfileDataForm;