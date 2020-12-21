import React, { Component } from 'react';
import './app.css';
import { Layout, Header, Navigation, Project, Footer } from 'react-mdl'
import Main from '../myportfolio/src/Components/Landingpage';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div className="demo-big-content">
                <layout>
                    <Header className="header-color" title='Title' scroll>
                        <navigation>
                  <Link to='/resume'>Resume</Link>  
                  <Link to='/aboutme'>About Me</Link>  
                  <Link to='/Project'>Projecct</Link> 
                  <Link to ='/Contact'>Contact</Link>
                  </navigation> 
                  </Header>
                  
                </layout>
            </div>
        )
    }
}