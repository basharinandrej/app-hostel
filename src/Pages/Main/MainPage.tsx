import React from "react"
import './MainPage.sass'

import Head from "Components/Head/Head"
import Aside from "Components/Aside/Aside"

const MainPage = () => {


    return (
        <section className="body__layout layout">
            <Head />

            <div className="layout__container container">
                <Aside />
                <main className="layout__main main">

                </main>
            </div>
        </section>
    )
}

export default MainPage