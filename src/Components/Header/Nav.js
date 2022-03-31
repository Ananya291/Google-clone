import React from 'react'
import './Nav.css'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

function Nav() {
  return (
    <div className='navMain'>
      <div className='navBody'>
        <h1 className='navGmail'>Gmail</h1>
        <a className='navImage' href="https://www.google.co.in/imghp?hl=en&tab=ri&ogbl">Images</a>
        <AppsRoundedIcon className='icon'/>
      </div>
    </div>
  )
}

export default Nav