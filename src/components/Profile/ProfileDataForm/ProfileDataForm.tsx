import {ProfileType} from "../ProfileContainer";
import {Field, Form, Formik} from "formik";
import React from "react";
import {createErrorsObject} from "../../../utils/object-helpers";
import cs from "../../common/common.module.css";
import {toggleFocus} from "../../../utils/forms";
import {accentColor, elementBgColor, iconColor} from "../../../constants";
import s from '../ProfileDataForm/ProfileDataForm.module.css'
import {Checkbox, FormControlLabel} from "@mui/material";

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
                {({errors, touched, status, values, handleChange}) => {
                    let errorsList = createErrorsObject(profile)
                    status?.errors.map((e: string) => {
                        errorsList.map((el) => {
                            e.toLowerCase().includes(el.toLowerCase()) /*&& console.log(el)*/ //fieldsError[key as keyof ProfileType]
                        })
                    })

                    return (<Form>
                        <div>
                            <button type="submit">save</button>
                        </div>
                        {touched.fullName ?
                            <div style={{color: '#B22c12'}}>{status?.errors}</div> : null}
                        <div>
                            <label htmlFor="fullName">Full name:</label>
                            {/*<Field id="fullName" name="fullName"/>*/}
                            <div id='user-input-block' className={cs.inputBlock}
                                 onFocus={(e) => toggleFocus(e, accentColor)}
                                 onBlur={(e) => toggleFocus(e, elementBgColor)}>
                                <Field id="fullName" className={cs.inputField} type="text" name="fullName"
                                       placeholder={"Enter user name"}/>
                            </div>
                            {/*<ErrorMessage component="div" name="fullName" />*/}

                            {/*{console.log(`touched.fullName - ${touched.fullName}`)}*/}
                            {/*{console.log(status)}*/}
                        </div>
                        <div>
                            <label htmlFor="lookingForAJob">Looking for a job: </label>
                            <div className={s.checkbox}>
                                {/*<Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>*/}
                                <FormControlLabel control={
                                    <Checkbox defaultChecked name="lookingForAJob" id="lookingForAJob"
                                              checked={values.lookingForAJob}
                                              onChange={handleChange}
                                              sx={{
                                        color: iconColor,
                                        '&.Mui-checked': {
                                            color: elementBgColor,
                                            backgroundColor: accentColor
                                        },
                                    }}/>
                                } label="" sx={{'& .MuiSvgIcon-root': {fontSize: 23}}}
                                />
                            </div>


                            {/*<ErrorMessage component="div" name="lookingForAJob" />*/}
                            {touched.lookingForAJob && errors.lookingForAJob ?
                                <div style={{color: 'red'}}>{status?.error}</div> : null}
                        </div>
                        <div>
                            <label htmlFor="lookingForAJobDescription">My professional skills: </label>
                            <Field as="textarea" id="lookingForAJobDescription" name="lookingForAJobDescription"/>
                            {/*<ErrorMessage component="div" name="lookingForAJobDescription" />*/}
                            {touched.lookingForAJobDescription && errors.lookingForAJobDescription ?
                                <div style={{color: 'red'}}>{errors.lookingForAJobDescription}</div> : null}
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
                                        <Field key={index} id={`${key}`} name={`contacts.${key}`}/>
                                        {
                                            // touched.contacts && errors.contacts
                                            //     ? <div style={{color: 'red'}}>{errors.contacts[key as keyof ContactsType]}</div>
                                            //     : null
                                            touched.contacts && errors.contacts
                                                ? <div style={{color: 'red'}}>{status?.errors}</div>
                                                : null
                                        }
                                    </div>
                                ))
                            )}
                        </div>
                    </Form>)
                }}
            </Formik>
        </div>
    );
};

export default ProfileDataForm;