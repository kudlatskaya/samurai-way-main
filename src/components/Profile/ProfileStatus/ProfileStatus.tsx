import React, {ChangeEvent, useEffect, useState} from 'react'



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
    const deactivateEditMode = () => {
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
        <div>
            {
                !editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={deactivateEditMode} value={statusValue}
                               onChange={updateStatusValue}
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

