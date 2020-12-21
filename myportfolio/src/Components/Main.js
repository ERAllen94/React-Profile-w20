import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './Landingpage';
import AboutMe from './Aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path='/Aboutme' component={AboutMe}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/Resume' component={Resume}/>
    </Switch>
)

export default Main;