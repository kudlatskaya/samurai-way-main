import React from 'react';
import Contact from "../Contacts/Contact";
import {ContactsType, ProfileType} from "../ProfileContainer";
import {Field, Form, Formik} from "formik";

export type ProfileDataFormErrorType = {
    social?: ContactsType | undefined | null
    fullname?: string | null
    jobLooking?: string | null
    skills?: string | null
    aboutMe?: string | null
}

type ProfileDataFormPropsType = {
    profile: ProfileType | null
    submit: (values: ProfileDataFormErrorType) => void
}

const ProfileDataForm = ({profile, submit}: ProfileDataFormPropsType) => {

    return (
        <div>
            <Formik
                initialValues={{
                    social: profile?.contacts || null,
                    fullname: profile?.fullName || '',
                    jobLooking: profile?.lookingForAJob ? 'yes' : 'no',
                    skills: profile?.lookingForAJobDescription || '',
                    aboutMe: profile?.aboutMe || ''
                }}
                onSubmit={(values, actions) => {
                    // console.log(values)
                    submit(values)
                    // actions.resetForm()
                }}
            >
                {props => (
                <Form>
                    <div>
                        <button type="submit">save</button>
                    </div>
                    <div>
                        <label htmlFor="fullname">Full name:</label>
                        <Field id="fullname" name="fullname"/>
                    </div>
                    <div>
                        <label htmlFor="jobLooking">Looking for a job: </label>
                        <Field id="jobLooking" name="jobLooking"/>
                    </div>
                    <div>
                        <label htmlFor="skills">My professional skills: </label>
                        <Field id="skills" name="skills"/>
                    </div>
                    <div>
                        <label htmlFor="aboutMe">About me: </label>
                        <Field id="aboutMe" name="aboutMe"/>
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