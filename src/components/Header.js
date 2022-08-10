import React from 'react'
import '../css/Header.css'
import {
    SearchIcon,GlobeAltIcon,UserCircleIcon,MenuIcon } from '@heroicons/react/solid'
function Header() {
  return (
    <header className='primary__header'>
        <div className='first'>
            <img src="/Airbnb-Logo.png" /> 
        </div>
        {/* Search  */}
        <div className="middle"> 
          <input type="text" placeholder='start your search'/>
          <SearchIcon className='icon'/> 
        </div>
        <div className="right">
            <p> become Host </p>
            <GlobeAltIcon />
            <div className='icons' id='icons'>
                <MenuIcon />
                <UserCircleIcon />
            </div>
        </div>
    </header>
  )
}

export default Header