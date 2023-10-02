import {RootState} from "../state/store";
import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: RootState): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsType) {
        const {isAuth, ...restProps} = props;
        if (!props.isAuth) return <Redirect to='/Login'/>;
        return <Component {...restProps as T}/>;
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

