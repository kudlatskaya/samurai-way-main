import {ProfileType} from "../ProfileContainer";
import {Field, Form, Formik} from "formik";
import React from "react";
import {createErrorsObject} from "../../../utils/object-helpers";
import cs from "../../common/common.module.css";
import {toggleFocus} from "../../../utils/forms";
import {accentColor, elementBgColor, iconColor} from "../../../constants";
import s from '../ProfileDataForm/ProfileDataForm.module.css'
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import ls from '../../Login/Login.module.css'

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
                {({
                      errors,
                      touched,
                      status,
                      values,
                      handleChange
                  }) => {

                    let errorsList = createErrorsObject(profile)

                    status?.errors.map((e: string) => {
                        errorsList.map((el) => {
                            e.toLowerCase().includes(el.toLowerCase()) /*&& console.log(el)*/ //fieldsError[key as keyof ProfileType]
                        })
                    })

                    return (
                        <Form>
                            <div className={s.item}>
                                <label className={s.label} htmlFor="fullName">Full name:</label>
                                {/*<Field id="fullName" name="fullName"/>*/}
                                <div id='user-input-block' className={`${cs.inputBlock} ${s.input}`}
                                     onFocus={(e) => toggleFocus(e, accentColor)}
                                     onBlur={(e) => toggleFocus(e, elementBgColor)}>
                                    <Field id="fullName" className={cs.inputField} type="text" name="fullName"
                                           placeholder={"Enter user name"}/>
                                </div>
                                {/*<ErrorMessage component="div" name="fullName" />*/}
                            </div>

                            <div className={s.item}>
                                <label className={s.label} htmlFor="lookingForAJob">Looking for a job: </label>
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
                                {/*{touched.lookingForAJob && errors.lookingForAJob ?*/}
                                {/*    <div style={{color: 'red'}}>{status?.error}</div> : null}*/}
                            </div>

                            <div className={s.item}>
                                <label className={s.label} htmlFor="lookingForAJobDescription">My professional skills: </label>

                                {/*<Field as="textarea" id="lookingForAJobDescription" name="lookingForAJobDescription"/>*/}

                                <div id={'skills-input-block'} className={`${cs.inputBlock} ${s.input}`}
                                     onFocus={(e) => toggleFocus(e, accentColor)}
                                     onBlur={(e) => toggleFocus(e, elementBgColor)}>
                                    <TextField className={cs.inputField}
                                               placeholder={"Enter your skills"}
                                               id={"lookingForAJobDescription"}
                                               value={values.lookingForAJobDescription}
                                               multiline
                                               maxRows={10}
                                               name={'lookingForAJobDescription'}
                                               onChange={handleChange}
                                    />
                                </div>
                                {/*<ErrorMessage component="div" name="lookingForAJobDescription" />*/}

                                {/*{touched.lookingForAJobDescription && errors.lookingForAJobDescription ?*/}
                                {/*    <div style={{color: 'red'}}>{errors.lookingForAJobDescription}</div> : null}*/}
                            </div>

                            <div className={s.item}>
                                <label className={s.label} htmlFor="aboutMe">About me: </label>
                                {/*<Field as="textarea" id="aboutMe" name="aboutMe"/>*/}

                                <div id={'about-input-block'} className={`${cs.inputBlock} ${s.input}`}
                                     onFocus={(e) => toggleFocus(e, accentColor)}
                                     onBlur={(e) => toggleFocus(e, elementBgColor)}>
                                    <TextField className={cs.inputField}
                                               placeholder={"Enter your skills"}
                                               id={"aboutMe"}
                                               value={values.aboutMe}
                                               multiline
                                               maxRows={10}
                                               name={'aboutMe'}
                                               onChange={handleChange}
                                    />
                                </div>

                                {/*{touched.aboutMe && errors.aboutMe ?*/}
                                {/*    <div style={{color: 'red'}}>{errors.aboutMe}</div> : null}*/}
                            </div>

                            <div className={s.item}>
                                Contacts:
                                {profile.contacts && Object.keys(profile.contacts).length > 0 && (
                                    Object.keys(profile.contacts).map((key, index) => (

                                        <div key={index}>
                                            <label className={s.label} htmlFor={`${key}`}>{key}: </label>

                                            {/*<Field key={index} id={`${key}`} name={`contacts.${key}`}/>*/}

                                            <div key={index} className={`${cs.inputBlock} ${s.input}`}
                                                 onFocus={(e) => toggleFocus(e, accentColor)}
                                                 onBlur={(e) => toggleFocus(e, elementBgColor)}>
                                                <Field id={`${key}`} className={cs.inputField} type="text"
                                                       name={`contacts.${key}`}
                                                       placeholder={"Enter your contact"}/>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {status?.errors
                                ? <div className={`${ls.errorBlock} ${s.formErrors}`}>
                                    {status.errors.map((e: string, index: number) => {
                                        return <div key={index} className={ls.error}>{e}</div>
                                    })}
                                </div>
                                : null
                            }

                            <div className={`${ls.buttonBlock} ${s.button}`}>
                                <button className={ls.loginButton} type={'submit'}>
                                    Save Changes
                                </button>
                            </div>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default ProfileDataForm;