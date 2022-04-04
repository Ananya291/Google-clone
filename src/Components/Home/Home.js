import React from 'react'
import Nav from './Nav'
import MainComponent from './MainComponent'
import Footer from './Footer'

function Home() {
    return (
        <div className='home'>
            <Nav />
            <MainComponent hideButtons/>
            <Footer />
        </div>
    )
}

export default Home