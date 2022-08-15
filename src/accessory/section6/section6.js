import React from 'react';
import './section6.css';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Section6() {
    return(
        <div className='section6'>
            <div className='left6'>
                <h1>Sign up for all the latest tips, tricks, and trends</h1>
                <form>
                    <input type="text" name="email" placeholder='Enter your email here' id="" />
                    <button type="submit">Send</button>
                </form>
                <address>
                500 Terry A Francois Blvd.<br/>San Francisco, CA 94158, USA
                <br /><br />
                Tel: 123 456 7890     |     info@mysite.com
                </address>
                <div className='links6'>
                    <a href="">
                        <FaFacebookF color="white" className='iconss6' />
                    </a>
                    <a href="">
                        <BsTwitter color="white" className='iconss6' />
                    </a>
                    <a href="">
                        <BsYoutube color="white" className='iconss6' />
                    </a>
                </div>
            </div>

            <div className="right6">
                <h1>Yes, I want to join the webinar,<br/>Sign me up!</h1>
                <button className="reserveme">Reserve My Spot</button>
                <img src={require('../../img/flower.webp')} alt="" />
            </div>
        </div>
    );
}

export default Section6;