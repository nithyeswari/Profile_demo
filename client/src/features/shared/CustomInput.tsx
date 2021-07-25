import React, { Component } from "react";
import { IProps } from "../model/IProps";
import TextField from '@material-ui/core/TextField'

const CustomInput = ({
    input,
    label,
    type,
    meta: { touched, invalid, error, warning },
    autoFocus
}: IProps) => {
    return (
        <div>
            <TextField {...input} placeholder={label} label={label} type={type} autoFocus={autoFocus} error={touched && invalid}
                helperText={touched && error} variant="outlined" /></div>
    )
}
export default CustomInput;