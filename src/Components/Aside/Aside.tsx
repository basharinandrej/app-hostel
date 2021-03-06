import React from 'react'
import './Aside.sass'

import Form from "Components/Form/Form";
import Input from "Components/UI/Input/Input";
import Button from "Components/UI/Button/Button";
import Favorites from "../Favorites/Favorites";
import {useDispatch} from "react-redux";
import hotelAction from "../../redux/ducks/hotel/hotelActions";
import { propsTypeAside } from './Aside.types';
import moment from "moment";


const Aside = (props: propsTypeAside) => {
    const dispatch = useDispatch()
    const {
        favoriteHotels,
        toggleFavoritesHotelHandler,
        onSubmitForm,
        locationRequest,
        onClickSortPriceHandler,
        onClickSortRatingHandler,
        statusSortRating,
        statusSortPrice
    } = props
    const [valueInputLocation, setValueInputLocation] = React.useState(locationRequest)
    const [isDirtyInputLocation, setIsDirtyInputLocation] = React.useState(true)
    const [isValidInputLocation, setIsValidInputLocation] = React.useState(true)

    const [valueInputTotalDay, setValueInputTotalDay] = React.useState('')
    const [isDirtyInputTotalDay, setIsDirtyInputTotalDay] = React.useState(false)
    const [isValidInputTotalDay, setIsValidInputTotalDay] = React.useState(false)

    const [valueInputCheckInDay, setValueInputCheckInDay] = React.useState(moment().format('YYYY-MM-DD'))
    const [isDirtyInputCheckInDay, setIsDirtyInputCheckInDay] = React.useState(true)
    const [isValidInputCheckInDay, setIsValidInputCheckInDay] = React.useState(true)


    const onChangeLocationHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputLocation(true)
        setValueInputLocation(value)
        dispatch(hotelAction.setLocationRequest(value))
        if (value) {
            setIsValidInputLocation(true)
        } else {
            setIsValidInputLocation(false)
        }
    }
    const onChangeCheckInDayHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputCheckInDay(true)
        setValueInputCheckInDay(value)
        dispatch(hotelAction.setDateCheckIn(value))
        if (value) {
            setIsValidInputCheckInDay(true)
        } else {
            setIsValidInputCheckInDay(false)
        }
    }
    const onChangeTotalDayHandler = (e: React.ChangeEvent) => {
        const value = Math.abs(+(e.target as HTMLInputElement).value).toString()
        setIsDirtyInputTotalDay(true)
        setValueInputTotalDay(value)
        dispatch(hotelAction.setTotalDays(+value))
        if (value) {
            setIsValidInputTotalDay(true)
        } else {
            setIsValidInputTotalDay(false)
        }
    }

    const isValidForm = (): boolean => {
        return !!valueInputLocation && isDirtyInputLocation && isValidInputLocation &&
            !!valueInputTotalDay && isDirtyInputTotalDay && isValidInputTotalDay &&
            !!valueInputCheckInDay && isDirtyInputCheckInDay && isValidInputCheckInDay
    }

    return (
        <aside className="layout__aside aside">
            <Form additionalClassNames={['aside__main-form']}
                  onSubmit={onSubmitForm}
            >
                <Input
                    legend="??????????????"
                    type="text"
                    isRequired={true}
                    value={valueInputLocation}
                    isValid={isValidInputLocation}
                    isDirty={isDirtyInputLocation}
                    onChange={onChangeLocationHandler}
                    additionalClassNames={['main-form__input', 'input--bold-legend']}
                />
                <Input
                    legend="???????? ??????????????????"
                    type="date"
                    isRequired={true}
                    value={valueInputCheckInDay}
                    isValid={isValidInputCheckInDay}
                    isDirty={isDirtyInputCheckInDay}
                    onChange={onChangeCheckInDayHandler}
                    additionalClassNames={['main-form__input', 'input--bold-legend']}
                />
                <Input
                    legend="???????????????????? ????????"
                    type="number"
                    isRequired={true}
                    value={valueInputTotalDay}
                    isValid={isValidInputTotalDay}
                    isDirty={isDirtyInputTotalDay}
                    onChange={onChangeTotalDayHandler}
                    additionalClassNames={['main-form__input', 'input--bold-legend']}
                    min="1"
                    max="100"
                />

                <Button
                    text="??????????"
                    disabled={!isValidForm()}
                    isSubmit={true}
                    type="big"
                />
            </Form>

            <Favorites
                favoriteHotels={favoriteHotels}
                toggleFavoritesHotelHandler={toggleFavoritesHotelHandler}
                onClickSortRatingHandler={onClickSortRatingHandler}
                onClickSortPriceHandler={onClickSortPriceHandler}
                statusSortRating={statusSortRating}
                statusSortPrice={statusSortPrice}
            />
        </aside>
    )
}

export default Aside