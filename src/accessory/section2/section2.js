import React from 'react'
import './style2.css'

function Section2() {
    return(
        <div className='section2'>
            <div className="uppermg">
                <h1>Hi,<br/>I'm Chery</h1>
                <img src={require('../../img/lady2.jpeg')} alt="" />
                
            </div>
            <div className='downn'>
                <h3>Digital Media Expert with <br/> 12+ Years of Professional Experience.</h3>
                <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </div>
      {/* {window.innerWidth} */}

        </div>
    )
}

export default Section2;