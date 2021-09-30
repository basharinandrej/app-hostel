import React from "react"
import './MainPage.sass'

import Head from "Components/Head/Head"
import Form from "Components/Form/Form"
import Input from "Components/UI/Input/Input"
import Button from "Components/UI/Button/Button"

const MainPage = () => {
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

    return (
        <section className="body__layout layout">
            <Head />


            <div className="layout__container container">
                <aside className="layout__aside aside">
                    <Form additionalClassNames={['aside__main-form']}>
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
                            text="Войти"
                            type="big"
                        />
                    </Form>
                </aside>

                <main className="layout__main main">

                </main>
            </div>
        </section>
    )
}

export default MainPage