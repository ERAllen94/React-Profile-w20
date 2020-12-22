import React from 'react';
import budgetmaster from '../images/budget-master.png';
import youeat from '../images/U_wanna_eat.PNG'
import runbuddy from '../images/Run_buddy_pic.jpg'
import budgettracker from '../images/budget-tracker-1.PNG'

    function Project() {
    
        return(
            <div className="landing-grid">
                <div className='work'>
            <a href="https://sirubu.github.io/budget-master/"><div ></div></a>
              <img src={budgetmaster} style={{width: '35%'}} alt='bmaster' href=''></img>
            
                <img src={youeat} style ={{width: '35%'}} alt='eat'></img>
            
                <img src={runbuddy} style={{width:'35%'}} alt='rbuddy'></img>
                
               <img src={budgettracker} style ={{width: '35%'}} alt='btracker'></img>
            </div>
            </div>
            
        )
    }


export default Project;