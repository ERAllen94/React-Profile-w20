import React from 'react';
import budgetmaster from '../images/budget-master.png';
import youeat from '../images/U_wanna_eat.PNG'
import runbuddy from '../images/Run_buddy_pic.jpg'


    function Project() {
    
        return(
            <div className="landing-grid">
                <div className='work'>
           <img src={budgetmaster} style={{width: '35%'}} alt='bmaster'></img>
            <secton>
                <img src={youeat} style ={{width: '35%'}} alt='eat'></img>
            <div>
                <img src={runbuddy} style={{width:'35%'}} alt='rbuddy'></img>
            </div>
            </secton>
            </div>
            </div>
            
        )
    }


export default Project;