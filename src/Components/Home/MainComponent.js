import React from 'react'
import './MainComponent.css'
import Search from '../Search/Search'


function MainComponent() {
    return (
        <div className='main'>
            <div className='mainImage'>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            </div>
            <div className='mainSearch'>
                <Search/>
            </div>

        </div>
    )
}

export default MainComponent