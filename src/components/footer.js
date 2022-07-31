// needs links to my github, linkedin, and a third platform

import React from "react";

function footer() {
    return (
        <footer className='footer'>
         <div className='content has-text-centered'>
          <p>
           <strong>My Full Stack Development Portfolio</strong> -a react site by{''}
           <a href='https://github.com/MAtthewGrisham' target='_blank' rel='noreferrer'>
            Matthew Grisham
           </a>
           .
           <hr />
           <a 
           href="https://www.linkedin.com/in/matthew-grisham/"
           target="_blank" rel="noreferrer"
           >
            LinkedIn
           </a>
           </p>
         </div>
         </footer>
         );
    }

export default footer;