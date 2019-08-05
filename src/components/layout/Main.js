import React from 'react';
import { Switch, Route } from 'react-router-dom';

// view components
import Home from '../views/Home';
import Cities from '../views/Cities';

const Main = () => {
    return(
        <div>
            Main
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cities" component={Cities} />
            </Switch>
        </div>
    )
}

export default Main;