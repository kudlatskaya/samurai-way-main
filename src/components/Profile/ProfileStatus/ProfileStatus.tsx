import React, {useState} from 'react'

type ProfileStatusPropsType = {
    status: string
}

const ProfileStatus = ({status}: ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => setEditMode(false)

    return (
        <div>
            {
                !editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode}>{status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
            }
        </div>
    );
};

export default ProfileStatus;