import React, {useEffect, useState} from "react"
import './MainPage.sass'

import Head from "Components/Head/Head"
import Aside from "Components/Aside/Aside"
import ListHotel from "Components/ListHotel/ListHotel";
import {useDispatch} from "react-redux";
import hotelAction from "redux/ducks/hotel/hotelActions";
import { useSelector } from "redux/commonTypes";
import {hotelType} from "Components/ListHotel/ListHotel.types";
import declOfNumOnlyText from "../../helpers/declOfNumberOnlyText";
import {selectorTypesMainPage} from "./MainPage.types";
import BreadCrumbs from "Components/BreadCrumbs/BreadCrumbs";
import moment from "moment";
import 'moment/locale/ru';
import MainSlider from "Components/MainSlider/MainSlider";
import {useHistory} from "react-router-dom";
import authActions from "../../redux/ducks/auth/authActions";
moment.locale('ru');


const MainPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {
        hotels,
        favoriteHotels,
        locationRequest,
        locationResponse,
        checkIn,
        isLoadingHotels,
        sliderImages,
        statusSortRating,
        statusSortPrice
    } : selectorTypesMainPage = useSelector(state => state.hotelReducer)
    const [localCheckIn, setLocalCheckIn] = useState(checkIn)

    useEffect(() => {
        dispatch(hotelAction.getHotels())
    }, [])
    useEffect(() => {
        isLoadingHotels && setLocalCheckIn(checkIn)
    }, [isLoadingHotels])

    const toggleFavoritesHotelHandler = (idHotel: number) => {
        dispatch(hotelAction.toggleFavoritesHotels(idHotel))
    }
    const onSubmitFormHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(hotelAction.getHotels())
    }
    const onClickSortPriceHandler = (e: React.MouseEvent) => {
        console.log('PRICE', e);
        dispatch(hotelAction.setSortHotelByPrice())
    }
    const onClickSortRatingHandler = (e: React.MouseEvent) => {
        dispatch(hotelAction.setSortHotelByRating())
    }
    const onClickLogout = () => {
        localStorage.removeItem('authAppHotel');
        dispatch(authActions.setAuth(false))
    }
    return (
        <section className="body__layout layout">
            <Head
                onClickLogout={onClickLogout}
            />

            <div className="layout__container container">
                <Aside
                    favoriteHotels={favoriteHotels}
                    toggleFavoritesHotelHandler={toggleFavoritesHotelHandler}
                    onSubmitForm={onSubmitFormHandler}
                    locationRequest={locationRequest}
                    onClickSortPriceHandler={onClickSortPriceHandler}
                    onClickSortRatingHandler={onClickSortRatingHandler}
                    statusSortRating={statusSortRating}
                    statusSortPrice={statusSortPrice}
                />
                <main className="layout__main main">
                    <div className="main__wrapper">
                        <BreadCrumbs
                            breadCrumbs={['Отели', locationResponse]}
                            additionalClassNames={['main__breadcrumbs']}
                        />
                        {/*07 июля 2020*/}
                        <p className="main__paragraph">{moment(localCheckIn).format('DD MMMM YYYY')}</p>
                    </div>

                    <MainSlider
                        slides={sliderImages}
                    />
                    <h2 className="main__title">Добавлено в Избранное:&nbsp;
                        <b>{favoriteHotels.length}</b>&nbsp;
                        {declOfNumOnlyText(favoriteHotels.length, ["отель", "отеля", "отелей"])}
                    </h2>
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