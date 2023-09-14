import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, requiredField} from "../../utils/validators/valodators";
import {Input} from "../common/FormsControl/FormsContol";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30);

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' component={Input} name='login' validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder='Password' component={Input} name='password' validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field type='checkbox' component={Input} name='rememberMe'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}