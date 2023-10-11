import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../state/store";
import {Redirect} from "react-router-dom";
import {SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {login} from "../../state/AuthReducer";

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    rememberMe: yup.boolean().default(false),
    captcha: yup.string()
})

const Login:React.FC<LoginPropsType> = ({login, isAuth, captcha, stateErrors}) => {

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormData > = ({email, password, rememberMe, captcha}) => {
        login(email, password, rememberMe, captcha);
    }

    if (isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder='Email' {...register('email')} />
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <input placeholder='Password' {...register("password")}/>
                <p>{errors.password?.message}</p>
            </div>
            <div>
                <input type={'checkbox'} {...register("rememberMe")}/> remember me
            </div>
            {captcha && <div>
                <img src={captcha} alt={'captcha'}/>
                <input placeholder='Captcha' {...register('captcha')}/>
            </div>}
            <div>
                {stateErrors && <p>{stateErrors}</p>}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>

}


const mapStateToProps = (state: RootState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    stateErrors: state.auth.errors,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, {login})(Login)

//types
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe?: boolean, captcha?: string) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    stateErrors: null | string
    captcha: null | string
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType;
type FormData = yup.InferType<typeof schema>;