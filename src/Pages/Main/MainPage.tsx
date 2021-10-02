import React, {useEffect} from "react"
import './MainPage.sass'

import Head from "Components/Head/Head"
import Aside from "Components/Aside/Aside"
import ListHotel from "../../Components/ListHotel/ListHotel";
import {useDispatch} from "react-redux";
import hotelAction from "redux/ducks/hotel/hotelAction";
import { useSelector } from "redux/commonTypes";



const MainPage = () => {
    const dispatch = useDispatch()
    const {hotels, favoriteHotels} = useSelector(state => state.hotelReducer)
    useEffect(() => {
        dispatch(hotelAction.getHotels())
    }, [])

    const toggleFavoritesHotelHandler = (idHotel: number) => {
        dispatch(hotelAction.toggleFavoritesHotels(idHotel))
    }
    return (
        <section className="body__layout layout">
            <Head />

            <div className="layout__container container">
                <Aside
                    favoriteHotels={favoriteHotels}
                    toggleFavoritesHotelHandler={toggleFavoritesHotelHandler}
                />

                <main className="layout__main main">
                    <ListHotel
                        hotels={hotels}
                        toggleFavoritesHotel={toggleFavoritesHotelHandler}
                    />
                    {hotels.length === 0 && <p>Hotel Not Found</p>}
                </main>
            </div>
        </section>
    )
}

export default MainPage