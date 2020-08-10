import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getLogin} from "../../Redux/Reducers/AuthReducer";

const LoginForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field name={"email"} component={"input"} placeholder="email"/>
        <Field name={"password"} component={"input"} type={"password"} placeholder="password"/>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> remember me
        <button>Login</button>
    </form>
}

const LoginFormRedux = reduxForm({
    form: "loginForm"
})(LoginForm)

const Login = (props) => {
    const getAuthorized = (values) => {
        props.getLogin(values.email, values.password, values.rememberMe)
    }

    return <LoginFormRedux onSubmit={getAuthorized}/>
}



export default connect(null, {getLogin})(Login)