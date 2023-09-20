import React from "react";
import {connect} from "react-redux";
import {logIn} from "../../redux/AuthReducer";
import {RootState} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    rememberMe: yup.boolean().default(false)
})
type FormData = yup.InferType<typeof schema>;

const Login = (props: MapDispatchToPropsType & MapStateToPropsType) => {

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormData > = ({email, password, rememberMe}) => {
        props.logIn(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder='Email' {...register('email')} />
                {/*{errors.email && <span >This field is required</span>}*/}
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
                {props.errors && <p>{props.errors}</p>}
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
type MapDispatchToPropsType = {
    logIn: (email: string, password: string, rememberMe?: boolean, captcha?: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    errors: null | string
}

export default connect(mapStateToProps, {logIn})(Login)