import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getLogin} from "../../Redux/Reducers/AuthReducer";
import {checkValueLength, required} from "../../Tools/Validation/AuthValidator";
import {Input} from "../../Tools/Fields/CreateFields";


const checkValueLength_4_20 = checkValueLength(4, 20)

const LoginForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field name={"email"} component={Input} placeholder="email" validate={[required, checkValueLength_4_20]}/>
        <Field name={"password"} component={Input} type={"password"} placeholder="password" validate={[required, checkValueLength_4_20]}/>
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