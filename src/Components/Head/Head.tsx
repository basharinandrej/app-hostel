import React from "react"
import './Head.sass'
import {iconHead} from "./Head.icons";
import {HeadTypes} from "./Head.types";
import { Link } from "react-router-dom";

const Head = (props: HeadTypes) => {
    const {onClickLogout} = props

    return (
        <div className="layout__head head">
            <a href="#" className="head__logo">Simple Hotel Check</a>

            <nav className="head__nav-cab nav-cab">
                <Link to="auth" className="nav-cab__logout" onClick={onClickLogout}>
                    <span className="nav-cab__paragraph">Выйти</span>
                    {iconHead.logout}
                </Link>
            </nav>
        </div>
    )
}

export default Head
