import React from 'react';


function Contact() {
        return(
            <section className= 'landing-grid'>
                <form className='contact'>
                    <label for='name'>Name</label>
                    <input type='text'></input>
                    <br></br>
                    <label for='email'>Email-address</label>
                    <input type='text'></input>
                    <br></br>
                    <label for='message'>Message Here</label>
                    <input type='text' id='title'></input>
                    <br></br>
                    <input type='submit' value='Submit'></input>
                </form>
               

               
            </section>
        )
    }

export default Contact;