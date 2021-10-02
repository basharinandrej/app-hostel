import React from 'react'
import './Aside.sass'

import Form from "Components/Form/Form";
import Input from "Components/UI/Input/Input";
import Button from "Components/UI/Button/Button";
import Favorites from "../Favorites/Favorites";
import {useDispatch} from "react-redux";
import hotelAction from "../../redux/ducks/hotel/hotelAction";
import { propsTypeAside } from './Aside.types';


const Aside = (props: propsTypeAside) => {
    const dispatch = useDispatch()
    const {
        favoriteHotels,
        toggleFavoritesHotelHandler,
        onSubmitForm
    } = props
    const [valueInputLocation, setValueInputLocation] = React.useState('')
    const [isDirtyInputLocation, setIsDirtyInputLocation] = React.useState(false)
    const [isValidInputLocation, setIsValidInputLocation] = React.useState(false)

    const [valueInputTotalDay, setValueInputTotalDay] = React.useState('')
    const [isDirtyInputTotalDay, setIsDirtyInputTotalDay] = React.useState(false)
    const [isValidInputTotalDay, setIsValidInputTotalDay] = React.useState(false)

    const [valueInputCheckInDay, setValueInputCheckInDay] = React.useState('')
    const [isDirtyInputCheckInDay, setIsDirtyInputCheckInDay] = React.useState(false)
    const [isValidInputCheckInDay, setIsValidInputCheckInDay] = React.useState(false)


    const onChangeLocationHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputLocation(true)
        setValueInputLocation(value)
        dispatch(hotelAction.setLocation(value))
        if (value) {
            setIsValidInputLocation(true)
        } else {
            setIsValidInputLocation(false)
        }
    }
    const onChangeTotalDayHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputTotalDay(true)
        setValueInputTotalDay(value)
        if (value) {
            setIsValidInputTotalDay(true)
        } else {
            setIsValidInputTotalDay(false)
        }
    }
    const onChangeCheckInDayHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputCheckInDay(true)
        setValueInputCheckInDay(value)
        if (value) {
            setIsValidInputCheckInDay(true)
        } else {
            setIsValidInputCheckInDay(false)
        }
    }

    const isValidForm = (): boolean => {
        return !!valueInputLocation && isDirtyInputLocation && isValidInputLocation
    }

    return (
        <aside className="layout__aside aside">
            <Form additionalClassNames={['aside__main-form']}
                  onSubmit={onSubmitForm}
            >
                <Input
                    legend="Локация"
                    type="text"
                    isRequired={true}
                    value={valueInputLocation}
                    isValid={isValidInputLocation}
                    isDirty={isDirtyInputLocation}
                    onChange={onChangeLocationHandler}
                    additionalClassNames={['main-form__input', 'input--bold-legend']}
                />
                <Input
                    legend="Дата заселения"
                    type="date"
                    isRequired={true}
                    value={valueInputCheckInDay}
                    isValid={isValidInputCheckInDay}
                    isDirty={isDirtyInputCheckInDay}
                    onChange={onChangeCheckInDayHandler}
                    additionalClassNames={['main-form__input', 'input--bold-legend']}
                />
                <Input
                    legend="Количество дней"
                    type="number"
                    isRequired={true}
                    value={valueInputTotalDay}
                    isValid={isValidInputTotalDay}
                    isDirty={isDirtyInputTotalDay}
                    onChange={onChangeTotalDayHandler}
                    additionalClassNames={['main-form__input', 'input--bold-legend']}
                />

                <Button
                    text="Найти"
                    disabled={!isValidForm()}
                    isSubmit={true}
                    type="big"
                />
            </Form>

            <Favorites
                favoriteHotels={favoriteHotels}
                toggleFavoritesHotelHandler={toggleFavoritesHotelHandler}
            />
        </aside>
    )
}

export default Aside