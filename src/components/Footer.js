import React from 'react'
import {FaFacebook, FaGithub, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>INFO<span className='primary'></span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Help Center</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='https://twitter.com/AnkitM0000?t=fh-P7WSiSMVUbTuy3_ZmnQ&s=09' target='_blank'>Ankit Maurya</a>
                        <a href='https://t.me/simransingh_13' target='_blank'>Simran Singh</a>
                        <a href='https://twitter.com/ParthSarthi1271?t=ANx2Y5FJVTgMTjAPudAj8g&s=08' target='_blank'>Parth Sarthi</a>
                        <a href='https://www.linkedin.com/in/sneha-verma-11015024a' target='_blank'>Sneha Verma</a>
                        <a href='https://t.me/disha_garg321' target='_blank'>Disha Garg</a>
                   
                </div>
                <div className='col'>
                    <h5>Resources</h5>
                    <span className='bar'> </span>
                        <a href='https://reactjs.org/' target='_blank'>React</a>
                        <a href='https://nodejs.org/en/' target='_blank'>Node JS</a>
                        <a href='https://axios-http.com/docs/intro' target='_blank'>Axios</a>
                        <a href='https://www.coingecko.com/en/api' target='_blank'>CoinGecko API</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='/'><FaFacebook className='icon'/></a>
                        <a href='/'><FaTwitter className='icon'/></a>
                        <a href='/'><FaGithub className='icon'/></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer