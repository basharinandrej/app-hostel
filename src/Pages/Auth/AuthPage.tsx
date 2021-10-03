import React from "react";
import {loginRegExp, passwordRegExp} from "Components/UI/Input/Input.functions";
import Form from "Components/Form/Form";
import Input from "Components/UI/Input/Input";
import Button from "Components/UI/Button/Button";
import './AuthPage.sass'
import {useDispatch} from "react-redux";
import authActions from "../../redux/ducks/auth/authActions";

const AuthPage = () => {
    const dispatch = useDispatch()
    const minLengthPassword = 8
    const [valueInputLogin, setValueInputLogin] = React.useState('')
    const [isDirtyInputLogin, setIsDirtyInputLogin] = React.useState(false)
    const [isValidInputLogin, setIsValidInputLogin] = React.useState(false)

    const [valueInputPassword, setValueInputPassword] = React.useState('')
    const [isDirtyInputPassword, setIsDirtyInputPassword] = React.useState(false)
    const [isValidInputPassword, setIsValidInputPassword] = React.useState(false)

    React.useEffect(() => {
        dispatch(authActions.setAuth(!!localStorage.getItem('authAppHotel')))
    }, [])

    const onChangeLoginHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputLogin(true)

        setValueInputLogin(value)
        setIsValidInputLogin(loginRegExp.test(value))
    }
    const onChangePasswordHandler = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setIsDirtyInputPassword(true)

        setValueInputPassword(value)
        setIsValidInputPassword(!passwordRegExp.test(value))
    }
    const isValidForm = (): boolean => {
        return !!valueInputLogin && isDirtyInputLogin && isValidInputLogin &&
            !!valueInputPassword && isDirtyInputPassword && valueInputPassword.length >= minLengthPassword && isValidInputPassword
    }
    const onSubmitHandler = (e: React.FormEvent) => {
        const dataAuth = {
            password: valueInputPassword,
            login: valueInputLogin
        }
        localStorage.setItem('authAppHotel', JSON.stringify(dataAuth))
        dispatch(authActions.setAuth(true))
    }
    return (
        <div className="auth">
            <Form
                title="Simple Hotel Check"
                additionalClassNames={['main-form__auth']}
                onSubmit={onSubmitHandler}
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
                    errorMessage="не используйте кириллицу"
                    isRequired={true}
                    value={valueInputPassword}
                    isDirty={isDirtyInputPassword}
                    isValid={isValidInputPassword}
                    onChange={onChangePasswordHandler}
                    minLength={minLengthPassword}
                    additionalClassNames={['main-form__input--gap']}
                />

                <Button
                    text="Войти"
                    type="big"
                    disabled={!isValidForm()}
                    isSubmit={true}
                />
            </Form>
        </div>
    )
}

export default AuthPage