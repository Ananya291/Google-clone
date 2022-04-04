import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from "../../StateProvider"
import { actionTypes } from '../../reducer';

function Search({ hideButtons = false }) {
  const [{ }, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log('you hit search button>>', input)

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    navigate('/search')
  };
  return (
    <div className='search'>
      <div className='searchInput'>
        <SearchIcon className='mainSearchIcon' />
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type='text' />
          <button onClick={search} type='submit'>send</button>
        </form>
        <MicIcon className='mainVoiceIcon' />
      </div>

      {!hideButtons ? (
        <div className='searchButtons'>
          <div className='searchButtonsContainer'>
            <button onClick={search} type='submit'>Google Search</button>
            <button>I'm Feeling Lucky</button>
          </div>

          <div className="searchLanguageContainer">
            <span className='googleOffered'>Google offered in:</span>
            <a className='language' href='https://www.google.com/'>हिन्दी</a>
            <a className='language' href='https://www.google.com/'>বাংলা</a>
            <a className='language' href='https://www.google.com/'>తెలుగు</a>
            <a className='language' href='https://www.google.com/'>मराठी</a>
            <a className='language' href='https://www.google.com/'>தமிழ்</a>
            <a className='language' href='https://www.google.com/'>ગુજરાતી</a>
            <a className='language' href='https://www.google.com/'>ಕನ್ನಡ</a>
            <a className='language' href='https://www.google.com/'>മലയാളം</a>
            <a className='language' href='https://www.google.com/'>ਪੰਜਾਬੀ</a>
          </div>

        </div>

      ) : (
        <div className='mainButtons'>
          {/* <button className='mainButtonsHidden' onClick={search} type='submit'>Google Search</button>
          <button className='mainButtonsHidden'>I'm Feeling Lucky</button> */}
        </div>
      )}
    </div>
  )
}

export default Search