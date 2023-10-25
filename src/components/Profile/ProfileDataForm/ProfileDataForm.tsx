import {ContactsType, ProfileType} from "../ProfileContainer";
import {Field, Form, Formik} from "formik";

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

                        {props.touched.fullName && props.errors.fullName ?
                            <div style={{color: 'red'}}>{props.errors.fullName}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="lookingForAJob">Looking for a job: </label>
                        <Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>
                        {props.touched.lookingForAJob && props.errors.lookingForAJob ?
                            <div style={{color: 'red'}}>{props.errors.lookingForAJob}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="lookingForAJobDescription">My professional skills: </label>
                        <Field as="textarea" id="lookingForAJobDescription" name="lookingForAJobDescription"/>
                        {props.touched.lookingForAJobDescription && props.errors.lookingForAJobDescription ?
                            <div style={{color: 'red'}}>{props.errors.lookingForAJobDescription}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="aboutMe">About me: </label>
                        <Field as="textarea" id="aboutMe" name="aboutMe"/>
                        {props.touched.aboutMe && props.errors.aboutMe ?
                            <div style={{color: 'red'}}>{props.errors.aboutMe}</div> : null}
                    </div>

                    <div>
                        Contacts:
                        {profile.contacts && Object.keys(profile.contacts).length > 0 && (
                            Object.keys(profile.contacts).map((key, index) => (
                                <div key={index}>
                                    <label htmlFor={`${key}`}>{key}: </label>
                                    <Field id={`${key}`} name={`contacts.${key}`}/>
                                    {
                                        props.touched.contacts && props.errors.contacts
                                            ? <div style={{color: 'red'}}>{props.errors.contacts[key as keyof ContactsType]}</div>
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