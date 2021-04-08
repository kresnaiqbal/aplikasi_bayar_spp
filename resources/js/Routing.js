import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './views/LandingPage';

function Routing() {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}/>
        </Switch>
    );
}

export default Routing;