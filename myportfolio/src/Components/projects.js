import React from 'react';
import budgetmaster from '../images/budget-master.png';
import youeat from '../images/U_wanna_eat.PNG'
import runbuddy from '../images/Run_buddy_pic.jpg'
import budgettracker from '../images/budget-tracker-1.PNG'
import { Grid, Cell} from 'react-mdl';

    function Project() {
    
        return(
           <Grid className='project' >
            <Cell col={6}><a href="https://sirubu.github.io/budget-master/"><div ></div>
          <img src={budgetmaster} style={{width: '75%'}} alt='bmaster' href=''></img>
        </a></Cell>
            <Cell col={6}><a href="https://secret-fortress-68356.herokuapp.com/"><div></div>
            <img src={youeat} style ={{width: '70%'}} alt='eat'></img>
            </a></Cell>

            <Cell col={6}><a href="https://erallen94.github.io/Budget-tracker-W-19/"><div></div> 
            <img src={budgettracker} style={{width:'70%'}} alt='rbuddy'></img>
            </a></Cell>
           
           <Cell col={6}> <img src={runbuddy} style ={{width: '70%'}} alt='btracker'></img>
           </Cell>
            </Grid>
            
            )
        }
        
        
        export default Project;
       