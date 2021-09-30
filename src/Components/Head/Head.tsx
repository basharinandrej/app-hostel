import React from "react"
import './Head.sass'
import {iconHead} from "./Head.icons";

const Head = () => {


    return (
        <div className="layout__head head">
            <a href="#" className="head__logo">Simple Hotel Check</a>

            <nav className="head__nav-cab nav-cab">
                <a href="#" className="nav-cab__logout">
                    <span className="nav-cab__paragraph">Выйти</span>
                    {iconHead.logout}
                </a>
            </nav>
        </div>
    )
}

export default Head
