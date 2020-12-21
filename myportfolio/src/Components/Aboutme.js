import React from 'react';
import me from "../images/trainer-1.jpg";
import { Grid, Cell } from 'react-mdl'

function Aboutme() {
    return (
        <Grid className= "landing-grid">
            <Cell col={12}></Cell>
        <secton>
            <h1 id='about'>About Me</h1>
            <img src={me} style={{width: '35%'}} alt="profilePic" 
            alt='profile'
            className='profile-img'
            />
            <div>
                <p className='description'>
                    I attended a college program before I joined this bootcamp. I was told that being a programmer involes alot of stress but alot of solving and i like to solve. I also like to desing websites and portfolio such as this one.
                </p>
            </div>
        </secton>
            </Grid>
    )
}


export default Aboutme;