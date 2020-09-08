import React from "react";
import s from "./createFields.module.css";

export const Input = ({input, meta:{error, touched}, ...props}) => {
    let hasError = touched && error;
    return <div className={hasError && s["error"]}>
        <input {...input} {...props}/>
        {hasError && <p className={s["worn"]}>{error}</p>}
    </div>
}