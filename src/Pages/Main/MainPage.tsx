import React, {useEffect} from "react"
import './MainPage.sass'

import Head from "Components/Head/Head"
import Aside from "Components/Aside/Aside"
import ListHotel from "../../Components/ListHotel/ListHotel";
import {useDispatch} from "react-redux";
import hotelAction from "redux/ducks/hotel/hotelActions";
import { useSelector } from "redux/commonTypes";
import {hotelType} from "../../Components/ListHotel/ListHotel.types";



const MainPage = () => {
    const dispatch = useDispatch()
    const {hotels, favoriteHotels, totalDays} = useSelector(state => state.hotelReducer)

    useEffect(() => {
        dispatch(hotelAction.getHotels())
    }, [])

    const toggleFavoritesHotelHandler = (idHotel: number) => {
        dispatch(hotelAction.toggleFavoritesHotels(idHotel))
    }
    const onSubmitFormHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(hotelAction.getHotels())
    }
    return (
        <section className="body__layout layout">
            <Head />

            <div className="layout__container container">
                <Aside
                    favoriteHotels={favoriteHotels}
                    toggleFavoritesHotelHandler={toggleFavoritesHotelHandler}
                    onSubmitForm={onSubmitFormHandler}
                />

                <main className="layout__main main">
                    <ListHotel
                        hotels={hotels}
                        toggleFavoritesHotel={toggleFavoritesHotelHandler}
                        additionalClassNames={['main__list-hotel']}
                    />

                    {(hotels as Array<hotelType>).length === 0 && <p>Hotel Not Found</p>}
                </main>
            </div>
        </section>
    )
}

export default MainPage