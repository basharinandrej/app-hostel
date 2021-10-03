import React from 'react'
import { getFormattedButtonFilterClassNames } from './ButtonFilter.function'
import { propsTypeButtonFilter } from './ButtonFilter.types'
import {iconButtonFilter} from "./ButtonFilter.icons";
import './ButtonFilter.sass'

const ButtonFilter = (props: propsTypeButtonFilter) => {
    const {text, additionalClassNames, onClick, statusSortRating} = props

    return (
        <button
            className={`
                ${getFormattedButtonFilterClassNames(additionalClassNames)} 
                ${statusSortRating !== 'none' ? 'btn-filter--active' : ''}`
            }
            onClick={onClick}
        >
            <span className="btn-filter__text">{text}</span>

            <div className="btn-filter__wrapper">
                <span className={`btn-filter__icon btn-filter__icon--asc ${statusSortRating === 'asc' ? 'btn-filter__icon--active' : ''}`}>{iconButtonFilter.arrow}</span>
                <span className={`btn-filter__icon btn-filter__icon--desc ${statusSortRating === 'desc' ? 'btn-filter__icon--active' : ''}`}>{iconButtonFilter.arrow}</span>
            </div>
        </button>
    )
}

export default ButtonFilter