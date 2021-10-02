import React from 'react'
import './Form.sass'

import {propsTypeForm} from "./Form.types";
import {getFormattedFormClassNames} from "./Form.functions";

const Form = (props: propsTypeForm) => {
    const {
        additionalClassNames,
        title,
        children,
        onSubmit
    } = props

    return (
        <form className={getFormattedFormClassNames(additionalClassNames)}
              onSubmit={onSubmit}
        >
            {title && <h1 className="main-form__title">{title}</h1>}

            <div className="main-form__box">
                {children}
            </div>
        </form>
    )
}
export default Form
