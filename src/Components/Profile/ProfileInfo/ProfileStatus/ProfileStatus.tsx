import React, {useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<PropsType> = ({status, updateStatus}) => {
    const [editeMode, setEditMode] = useState<boolean>(false);
    const [newStatus, setNewStatus] = useState<string>(status)

    useEffect(()=>{
        setNewStatus(status)
    },[status])

    const activateEditModeHandler = () => {
        setEditMode(true)
    }
    const deactivateEditModeHandler = () => {
        setEditMode(false);
        updateStatus(newStatus)
    }

    return <div>
        {editeMode ?
            <div>
                <input onChange={(e)=>setNewStatus(e.currentTarget.value)} autoFocus={true} onBlur={deactivateEditModeHandler} value={newStatus}/>
            </div>
            :
            <div>
                <span onDoubleClick={activateEditModeHandler}>{status || '------'}</span>
            </div>
        }
    </div>
}

// class _ProfileStatus extends React.Component<PropsType, RootState> {
//
//     state = {
//         editeMode: false,
//         status: this.props.status
//     }
//     activateEditeMode = () => {
//         this.setState({
//             editeMode: true
//         })
//     }
//     deactivateEditeMode = () => {
//         this.setState({
//             editeMode: false
//         })
//         this.props.updateStatus(this.state.status)
//     }
//     onStatusChange = (e: any) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//     componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.editeMode ?
//                     <div>
//                         <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditeMode} value={this.state.status}/>
//                     </div>
//                     :
//                     <div>
//                         <span onDoubleClick={this.activateEditeMode}>{this.props.status || '------'}</span>
//                     </div>
//                 }
//             </div>
//         )
//     }
// }
