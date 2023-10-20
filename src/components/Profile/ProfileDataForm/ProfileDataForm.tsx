import React from 'react';
import Contact from "../Contacts/Contact";
import {ContactsType, ProfileType} from "../ProfileContainer";
import {Field, FieldArray, Form, Formik, useFormik} from "formik";

export type ProfileDataFormErrorType = {
    fullname?: string | null
    jobLooking?: string | null
    skills?: string | null
    aboutMe?: string | null
}

type ProfileDataFormPropsType = {
    profile: ProfileType | null
    submit: (values: ProfileDataFormErrorType, setStatus: (status: any) => void) => void
}

const ProfileDataForm = ({profile, submit}: ProfileDataFormPropsType) => {

    return (
        <div>
            <Formik
                initialValues={{
                    social: profile && Object.keys(profile.contacts),
                    fullname: profile?.fullName || '',
                    jobLooking: profile?.lookingForAJob ? 'yes' : 'no',
                    skills: profile?.lookingForAJobDescription || '',
                    aboutMe: profile?.aboutMe || ''
                }}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(false);
                }}
            >
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
                            {/*<div>*/}
                            {/*    Contacts: {*/}
                            {/*    initialValues.social.map(key =>*/}
                            {/*        <Field key={key} name="lastName" placeholder="Doe" component={*/}
                            {/*            <Contact key={key} contactTitle={key}*/}
                            {/*                     contactValue={profile?.contacts[key as keyof ContactsType]}/>*/}
                            {/*        } />)*/}
                            {/*}*/}
                            {/*</div>*/}
                    <FieldArray
                        name="social"
                        render={arrayHelpers => (
                            <div>
                                {values.social && values.social.length > 0 && (
                                    values.social.map((s, index) => (
                                        <div key={index}>
                                            <Field name={`social.${index}`} />

                                        </div>
                                    ))
                                )}
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        )}
                    />

                </Form>
            </Formik>

        </div>
    );
};

export default ProfileDataForm;