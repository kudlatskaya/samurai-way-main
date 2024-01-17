import React, {ChangeEvent, FocusEvent, useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'
import cs from "../../common/common.module.css";
import {toggleFocus} from "../../../utils/forms";
import {accentColor, elementBgColor} from "../../../constants";
import {TextField} from "@mui/material";
import edit from "../../../asets/images/edit.svg";

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
                        {/*<b>Status: </b>*/}
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


/*
class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        statusValue: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(
        prevProps: Readonly<any>,
        prevState: Readonly<any>,
        snapshot?: any
    ) {
        console.log(prevState)
        console.log(prevProps)
        console.log('update')
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                        </div>
                        : <div>
                            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.statusValue}
                                   onInput={this.onStatusChange}
                            />
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus*/

