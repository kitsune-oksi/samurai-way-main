import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, requiredField} from "../../utils/validators/valodators";
import {Input} from "../common/FormsControl/FormsContol";
import {connect} from "react-redux";
import {logIn} from "../../redux/AuthReducer";
import {RootState} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControl/FormsControl.module.css"


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30);

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Email' component={Input} name='email' validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder='Password' component={Input} name='password' validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field type='checkbox' component={Input} name='rememberMe'/> remember me
            </div>
            <div>
                {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const LoginWithReactForm = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logIn})(LoginWithReactForm);