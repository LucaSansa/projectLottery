import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import RecoveryPassword from './pages/RecoveryPassword';
import Home from './pages/Home';
import BetArea from './pages/BetArea';



const Routes = () => {
    return(
        <BrowserRouter>
            
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/recoverypassword" component={RecoveryPassword}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/betarea" component={BetArea}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes;