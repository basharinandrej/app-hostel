import React from "react";
import './Input.sass'

import { propsTypeInput } from "./Input.types";
import {getHTMLFor, getFormattedInputClassNames} from "./Input.functions";

const Input = (props: propsTypeInput) => {
    const {
        legend,
        additionalClassNames,
        errorMessage,
        type,
        value,
        isValid,
        isDirty,
        isRequired,
        onChange,
        minLength,
        max,
        min
    } = props
    const [isBlur, setIsBlur] = React.useState(false)
    const isPassword = type === 'password'
    let isError;

    if (isPassword) {
        isError = isDirty && isBlur && isRequired && !(minLength! <= value.length)
    } else {
        isError = !isValid && isDirty && isBlur && isRequired
    }

    const onBlurHandler = () => isDirty && setIsBlur(true)
    return (
        <label
            htmlFor={getHTMLFor(legend)}
            className={getFormattedInputClassNames(isError, additionalClassNames)}
        >
            <span className="input__legend">{legend}</span>
            <input
                id={getHTMLFor(legend)}
                type={type}
                value={value}
                className="input__input"
                required={isRequired}
                onChange={onChange}
                onBlur={onBlurHandler}
                autoComplete="off"
                max={max}
                min={min}
            />
            {(isError && !isPassword) && <span className="input__error-message">{errorMessage || 'Заполните поле'}</span>}
            {(isError && isPassword) && <span className="input__error-message">Минимальная длинна пароля 8 символов, сейчас {value.length}</span>}
        </label>
    )
}

export default Input