import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getLogin} from "../../Redux/Reducers/AuthReducer";
import {checkValueLength, required} from "../../Tools/Validation/AuthValidator";
import {Input} from "../../Tools/Fields/CreateFields";
import {getCaptchaFromState, getIsAuthFromState} from "../../Redux/Selectors/AuthSelector";
import {Redirect} from "react-router";

const checkValueLength_4_20 = checkValueLength(4, 20);

const LoginForm = ({handleSubmit, error, captcha}) => {
    return <form onSubmit={handleSubmit}>
        <Field name={"email"} component={Input} placeholder="email" validate={[required, checkValueLength_4_20]}/>
        <Field name={"password"} component={Input} type={"password"} placeholder="password" validate={[required, checkValueLength_4_20]}/>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> remember me
        {captcha && <img src={captcha} alt=""/>}
        {captcha && <Field name={"captcha"} component={Input} validate={[required]}/>}
        {error ? <div>{error}</div> : ""}
        <button>Login</button>
    </form>
}

const LoginFormRedux = reduxForm({
    form: "loginForm"
})(LoginForm);

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const getAuthorized = (values) => {
        props.getLogin(values.email, values.password, values.rememberMe, values.captcha);
    }

    return <LoginFormRedux onSubmit={getAuthorized} captcha={props.captcha}/>
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthFromState(state),
        captcha: getCaptchaFromState(state)
    }
}

export default connect(mapStateToProps, {getLogin})(Login);