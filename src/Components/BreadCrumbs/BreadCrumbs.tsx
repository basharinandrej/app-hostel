import React from "react"
import './BreadCrumbs.sass'
import { propsTypeBreadCrumbs } from "./BreadCrumbs.types"
import {iconBreadCrumbs} from "./BreadCrumbs.icons";
import {getFormattedBreadCrumbsClassNames} from "./BreadCrumbs.functions";


const BreadCrumbs = (props: propsTypeBreadCrumbs) => {
    const {breadCrumbs, additionalClassNames} = props

    return (
        <h1 className={getFormattedBreadCrumbsClassNames(additionalClassNames)}>
            {breadCrumbs.map(((breadCrumbWord: string, idx:number) => {
                return (
                    <span className="breadcrumbs__item" key={idx}>
                        {idx > 0 && <span className="breadcrumbs__icon">{iconBreadCrumbs.arrow}</span>}
                        <a href="#" className="breadcrumbs__link">{breadCrumbWord}</a>
                    </span>
                )
            }))}
        </h1>
    )
}

export default BreadCrumbs