import React from 'react'
import { propsTypeRating } from './Rating.types'
import {iconRating} from "./Rating.icons";
import './Rating.sass'

const Rating = (props: propsTypeRating) => {
    const {rating} = props
    const fantomArray = [0, 0, 0, 0, 0]

    return (
        <>
            {fantomArray.map((star, idx) => {
                    return (
                        <span className={`star ${idx+ 1 < rating ? 'star--active' : 'star--disabled'}`} key={idx}>{iconRating.star}</span>
                    )
                })
            }
        </>
    )
}

export default Rating