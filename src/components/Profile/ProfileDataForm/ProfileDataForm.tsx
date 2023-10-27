import {ContactsType, ProfileType} from "../ProfileContainer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

// export type ProfileDataFormType = {
//     contacts?: ContactsType | undefined | null
//     fullName?: string | null
//     lookingForAJob?: boolean | null
//     lookingForAJobDescription?: string | null
//     aboutMe?: string | null
// }

type ProfileDataFormPropsType = {
    profile: ProfileType
    submit: (values: ProfileType, setStatus: (status: any) => void) => void
}

const ProfileDataForm = ({profile, submit}: ProfileDataFormPropsType) => {

    // console.log('ProfileDataForm')

    // const [state, setState] = useState({});
    //
    // useEffect(() => {
    //     return () => {
    //         setState({}); // This worked for me
    //     };
    // }, []);

    return (
        <div>
            <Formik
                initialValues={{
                    userId: profile.userId,
                    contacts: profile.contacts,
                    fullName: profile.fullName || '',
                    lookingForAJob: profile.lookingForAJob,
                    lookingForAJobDescription: profile.lookingForAJobDescription || '',
                    aboutMe: profile.aboutMe || ''
                }}
                onSubmit={(values: ProfileType, actions) => {
                    submit(values as ProfileType, actions.setStatus)
                    // console.log('ProfileDataForm submit')
                    //   actions.resetForm()
                }}
            >
                {({ errors, touched, status }) => (
                <Form>
                    <div>
                        <button type="submit">save</button>
                    </div>
                    <div>
                        <label htmlFor="fullName">Full name:</label>
                        <Field id="fullName" name="fullName"/>
                        <ErrorMessage component="div" name="fullName" />
                        {console.log(errors)}
                        {/*{touched.fullName && errors.fullName ?*/}
                        {/*    <div style={{color: 'red'}}>{errors.fullName}</div> : null}*/}
                    </div>
                    <div>
                        <label htmlFor="lookingForAJob">Looking for a job: </label>
                        <Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>
                        <ErrorMessage component="div" name="lookingForAJob" />
                        {/*{touched.lookingForAJob && errors.lookingForAJob ?*/}
                        {/*    <div style={{color: 'red'}}>{errors.lookingForAJob}</div> : null}*/}
                    </div>
                    <div>
                        <label htmlFor="lookingForAJobDescription">My professional skills: </label>
                        <Field as="textarea" id="lookingForAJobDescription" name="lookingForAJobDescription"/>
                        <ErrorMessage component="div" name="lookingForAJobDescription" />
                        {/*{touched.lookingForAJobDescription && errors.lookingForAJobDescription ?*/}
                        {/*    <div style={{color: 'red'}}>{errors.lookingForAJobDescription}</div> : null}*/}
                    </div>
                    <div>
                        <label htmlFor="aboutMe">About me: </label>
                        <Field as="textarea" id="aboutMe" name="aboutMe"/>
                        {touched.aboutMe && errors.aboutMe ?
                            <div style={{color: 'red'}}>{errors.aboutMe}</div> : null}
                    </div>

                    <div>
                        Contacts:
                        {profile.contacts && Object.keys(profile.contacts).length > 0 && (
                            Object.keys(profile.contacts).map((key, index) => (
                                <div key={index}>
                                    <label htmlFor={`${key}`}>{key}: </label>
                                    <Field id={`${key}`} name={`contacts.${key}`}/>
                                    {
                                        touched.contacts && errors.contacts
                                            ? <div style={{color: 'red'}}>{errors.contacts[key as keyof ContactsType]}</div>
                                            : null
                                    }
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