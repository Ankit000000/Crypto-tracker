import React from 'react'
import './Hero.css'
import Crypto from '../assets/jj2.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Cryptocurrency tracker allows you to track the Current value of Cryptocurrencies </p>
                    <h1>Connect your Crypto Wallet with our Website</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
