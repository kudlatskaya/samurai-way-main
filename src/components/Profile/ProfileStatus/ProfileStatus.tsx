import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus = ({status, updateStatus}: ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [statusValue, setStatusValue] = useState<string>(status)

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(statusValue)
        // setStatusValue(status)
    }

    useEffect(() => {
        updateStatus(statusValue)
        // if (status !== statusValue) setStatusValue(status)
    }, [statusValue])

    const updateStatusValue = (e: ChangeEvent<HTMLInputElement>) => setStatusValue(e.target.value)

    return (
        <div>
            {
                !editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode}>{statusValue}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={deactivateEditMode} value={statusValue}
                               onInput={updateStatusValue}/>
                    </div>
            }
        </div>
    );
};

export default ProfileStatus;