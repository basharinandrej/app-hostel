import React from 'react'
import './Button.sass'

import { getFormattedButtonClassNames } from './Button.functions'
import { propsTypeButton } from './Button.types'

const Button = (props: propsTypeButton) => {
    const {text, type, additionalClassNames} = props

    return (
        <button className={getFormattedButtonClassNames(type, additionalClassNames)}>
            {text}
        </button>
    )
}

export default Button