import React from 'react'
import './Button.sass'

import { getFormattedButtonClassNames } from './Button.functions'
import { propsTypeButton } from './Button.types'

const Button = (props: propsTypeButton) => {
    const {text, type, additionalClassNames, disabled, isSubmit = false} = props

    return (
        <button
            className={getFormattedButtonClassNames(type, additionalClassNames)}
            disabled={disabled}
            type={isSubmit ? 'submit' : 'button'}
        >
            {text}
        </button>
    )
}

export default Button