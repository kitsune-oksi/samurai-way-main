import React from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editeMode: false,
        status: this.props.status
    }
    activateEditeMode = () => {
        this.setState({
            editeMode: true
        })
    }
    deactivateEditeMode = () => {
        this.setState({
            editeMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editeMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditeMode} value={this.state.status}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status || '------'}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
