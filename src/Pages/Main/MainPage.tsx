import React from "react"
import './MainPage.sass'

import Head from "Components/Head/Head"
import Aside from "Components/Aside/Aside"
import ListHotel from "../../Components/ListHotel/ListHotel";
import iconHostel from "../../images/house.png";

const listHotel = {
    title: "Moscow Marriott Grand Hotel",
    price: 23_924,
    rating: 3,
    avatar: iconHostel
}


const MainPage = () => {


    return (
        <section className="body__layout layout">
            <Head />

            <div className="layout__container container">
                <Aside />

                <main className="layout__main main">
                    <ListHotel
                        title={listHotel.title}
                        price={listHotel.price}
                        rating={listHotel.rating}
                        avatar={listHotel.avatar}
                    />
                </main>
            </div>
        </section>
    )
}

export default MainPage