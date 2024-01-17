import React, {ChangeEvent, FocusEvent, useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'
import cs from "../../common/common.module.css";
import {toggleFocus} from "../../../utils/forms";
import {accentColor, elementBgColor} from "../../../constants";
import {TextField} from "@mui/material";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatus = (props: ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [statusValue, setStatusValue] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
        setStatusValue(props.status)
    }
    const deactivateEditMode = (e: FocusEvent<HTMLDivElement>) => {
        toggleFocus(e, elementBgColor)
        setEditMode(false)
        props.updateStatus(statusValue)
    }

    useEffect(() => {
        setStatusValue(props.status)
    }, [])

    const updateStatusValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.target.value)
    }

    return (
        <div className={s.profileStatus}>
            {
                !editMode
                    ? <div className={s.status}>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
                    // : <div>
                    //     <input autoFocus={true} onBlur={deactivateEditMode} value={statusValue}
                    //            onChange={updateStatusValue}
                    //     />
                    // </div>
                    : <div id={'status-input-block'} className={`${cs.inputBlock} ${s.statusInput}`}
                           onFocus={(e) => toggleFocus(e, accentColor)}
                           onBlur={(e) => deactivateEditMode(e)}>
                        <TextField className={cs.inputField}
                                   id={"status"}
                                   value={statusValue}
                                   multiline
                                   maxRows={5}
                                   onChange={updateStatusValue}
                                   autoFocus={true}
                        />
                    </div>
            }
        </div>
    );
};

export default ProfileStatus;



