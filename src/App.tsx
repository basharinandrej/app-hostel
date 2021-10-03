import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import AuthPage from "Pages/Auth/AuthPage";
import MainPage from "Pages/Main/MainPage";
import {useSelector} from "./redux/commonTypes";


const App = () => {
    const {isAuth} = useSelector(state => state.authReducer)

    return (
        <Switch>
            <Route path="/auth" render={() => !isAuth ? <AuthPage /> : <Redirect to="/" />} />
            <Route path="/" render={() => isAuth ? <MainPage /> : <Redirect to="/auth" />} />
        </Switch>
    )
}

export default App;
