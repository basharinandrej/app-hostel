import React from "react";
import {loginRegExp} from "Components/UI/Input/Input.functions";
import Form from "Components/Form/Form";
import Input from "Components/UI/Input/Input";
import Button from "Components/UI/Button/Button";
import './Auth.sass'

const AuthPage = () => {
    const [valueInputLogin, setValueInputLogin] = React.useState('')
    const [isDirtyInputLogin, setIsDirtyInputLogin] = React.useState(false)
    const [isValidInputLogin, setIsValidInputLogin] = React.useState(false)

    const [valueInputPassword, setValueInputPassword] = React.useState('')
    const [isDirtyInputPassword, setIsDirtyInputPassword] = React.useState(false)

    const onChangeLoginHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputLogin(true)

        setValueInputLogin(value)
        setIsValidInputLogin(loginRegExp.test(value));
    }

    const onChangePasswordHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputPassword(true)

        setValueInputPassword(value)
    }
    return (
        <div className="auth">
            <Form
                title="Simple Hotel Check"
                additionalClassNames={['main-form__auth']}
            >
                <Input
                    legend="Логин"
                    type="email"
                    errorMessage="Невалидный логин"
                    isRequired={true}
                    value={valueInputLogin}
                    isValid={isValidInputLogin}
                    isDirty={isDirtyInputLogin}
                    onChange={onChangeLoginHandler}
                    additionalClassNames={['main-form__input']}
                />
                <Input
                    legend="Пароль"
                    type="password"
                    isRequired={true}
                    value={valueInputPassword}
                    isDirty={isDirtyInputPassword}
                    onChange={onChangePasswordHandler}
                    maxLength={8}
                    additionalClassNames={['main-form__input--gap']}
                />

                <Button
                    text="Войти"
                    type="big"
                />
            </Form>
        </div>
    )
}

export default AuthPage