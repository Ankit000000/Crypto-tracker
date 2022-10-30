import React from 'react'
import './Signup.css'



const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Contact Us </h2>
                    <p>COMPLAINTS: you can reach out to us for any type of complaints or for any type of queries related to our website SUGGESTIONS: any suggestions from your side are most welcomed</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
