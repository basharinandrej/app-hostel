import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import AuthPage from "Pages/Auth/AuthPage";
import MainPage from "Pages/Main/MainPage";


const App = () => {
    const isAuth = true

    return (
        <Switch>
            <Route path="/" render={() => isAuth ? <MainPage /> : <Redirect to="/auth" />} exact/>
            <Route path="/auth" render={() => !isAuth ? <AuthPage /> : <Redirect to="/" />} exact/>
        </Switch>
    )
}

export default App;
