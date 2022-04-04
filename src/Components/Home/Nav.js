import React from 'react'
import './Nav.css'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navMain'>
      <div className='navBody'>
        <h1 className='navGmail'>Gmail</h1>
        <Link className='navImage' to='/images'>Images</Link>
        <AppsRoundedIcon className='icon'/>
        <button className='navButton'>Sign in</button>
      </div>
    </div>
  )
}

export default Nav