import React from 'react'
import './MainComponent.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function MainComponent() {
    return (
        <div className='main'>
            <div className='mainImage'>
                <img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            </div>
            <div className='mainInput'>
                <SearchIcon className='mainSearchIcon' />
                <form>
                    <input type='text' />
                    <button type='submit'>send</button>
                </form>
                <MicIcon className='mainVoiceIcon' />
            </div>
            <div className='mainButtons'>
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <div className='mainLanguages'>
                <div className="mainLanguageContainer">
                    <span className='googleOffered'>Google offered in:</span> 
                    <a href='https://www.google.com/'>हिन्दी</a>
                    <a href='https://www.google.com/'>বাংলা</a>
                    <a href='https://www.google.com/'>తెలుగు</a>
                    <a href='https://www.google.com/'>मराठी</a>
                    <a href='https://www.google.com/'>தமிழ்</a>
                    <a href='https://www.google.com/'>ગુજરાતી</a>
                    <a href='https://www.google.com/'>ಕನ್ನಡ</a>
                    <a href='https://www.google.com/'>മലയാളം</a>
                    <a href='https://www.google.com/'>ਪੰਜਾਬੀ</a>
                </div>
            </div>
        </div>
    )
}

export default MainComponent