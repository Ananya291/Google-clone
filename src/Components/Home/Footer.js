import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footerMain'>
            <div className='footerCountry'>
                <h1 className='footerCountryIndia'>India</h1>
            </div>
            <div className='footerAbout'>
                <div className='footerAboutLeft'>
                    <a className='footer' href=''>About</a>
                    <a className='footer' href=''>Advertising</a>
                    <a className='footer' href=''>Business</a>
                    <a className='footer' href=''>How Search works</a>
                </div>
                <div className='footerAboutRight'>
                    <a className='footer' href=''>Privacy</a>
                    <a className='footer' href=''>Terms</a>
                    <a className='footer' href=''>Settings</a>
                </div>
            </div>
        </div>
    )
}

export default Footer