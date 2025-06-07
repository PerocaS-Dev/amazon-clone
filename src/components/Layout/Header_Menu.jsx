import React from 'react'
import './Header_Menu.css'
import MenuIcon from '@mui/icons-material/Menu';


const Header_Menu = () => {
  return (
    <div className='menu_section'>
      <div className='menu_options'>
        <span className='option'>
        <MenuIcon className='menu_icon'/>
        <span className='option_label'>All</span>
        </span>
        <span className='option'>Best Sellers</span>
        <span className='option'>Today's Deals</span>
        <span className='option'>Keep Shopping for</span>
        <span className='option'>Everday Essentials</span>
        <span className='option'>Shop Mzansi</span>
        <span className='option'>Customer Service</span>
        <span className='option'>Gift Cards</span>
        <span className='option'>Sell</span>
        <span className='option'>Welcome to Amazon.co.za</span>
      </div>
      <div className='menu_title'>
        <h2>
            Everyday Essentials
        </h2>
      </div>
    </div>
  )
}

export default Header_Menu
