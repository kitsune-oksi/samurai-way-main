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
    rememberMe: yup.boolean().default(false)
})

const Login:React.FC<LoginPropsType> = ({login, isAuth}) => {

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormData > = ({email, password, rememberMe}) => {
        login(email, password, rememberMe);
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
            <div>
                {errors && <p>{errors}</p>}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>

}


const mapStateToProps = (state: RootState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    errors: state.auth.errors
})

export default connect(mapStateToProps, {login})(Login)

//types
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe?: boolean, captcha?: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    errors: null | string
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType;
type FormData = yup.InferType<typeof schema>;