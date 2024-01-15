import {ContactsType, ProfileType} from "../ProfileContainer";
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import React, {useEffect, useState} from "react";
import {loginFormValidator} from "../../../utils/validators";
import {createErrorsObject, isObject} from "../../../utils/object-helpers";
import {PhotosType} from "../../../state/reducers/profileReducer";
import cs from "../../common/common.module.css";
import {toggleFocus} from "../../../utils/forms";
import {accentColor, elementBgColor, iconColor} from "../../../constants";
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
                    // console.log('ProfileDataForm submit')
                    // actions.resetForm()
                }}
            >
                {({errors, touched, status}) => {
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
                            {/*<Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>*/}
                            <FormControlLabel control={
                                <Checkbox defaultChecked sx={{
                                    color: iconColor,
                                    '&.Mui-checked': {
                                        color: elementBgColor,
                                        backgroundColor: accentColor
                                    },
                                }}/>
                            } label="Remember" name={"lookingForAJob"}
                                              onChange={formik.handleChange}
                                              checked={formik.values.rememberMe}
                                              sx={{'& .MuiSvgIcon-root': {fontSize: 23}}}
                            />
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