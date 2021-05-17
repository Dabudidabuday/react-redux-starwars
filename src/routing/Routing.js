import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { paths } from "../constants";
import { Navbar } from "../components";
import { Favorites, Peoples, NotFound  } from "../pages";
import { HeroDetailsContainer } from "../containers";

export const Routing = () => {
    return (
        <Router>
            <Navbar/>

            <Switch>
                <Route exact path={paths.peoples}>
                    <Peoples/>
                </Route>

                <Route path={`${paths.peoples}/:slug`}>
                    <HeroDetailsContainer/>
                </Route>

                <Route exact path={paths.favorites}>
                    <Favorites/>
                </Route>

                <Route exact path='/'>
                    <Redirect to={paths.peoples} />
                </Route>

                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
}