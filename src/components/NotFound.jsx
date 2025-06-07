import React from 'react'
import { Link } from "react-router-dom";
import './NotFound.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const NotFound = () => {
  return (
    <div className='not_found'>
        <div>
            <img src="https://m.media-amazon.com/images/G/53/x-locale/common/small-logo._CB626597994_.jpg" alt="" />
        </div>
        <div className='error_info'>
            <span>
                <img src="https://m.media-amazon.com/images/G/53/x-locale/common/kailey-kitty._CB654036773_.gif" alt="" />
            </span>
            <span className='error_instructions'>
                <h4>Looking for something?</h4>
                <p>We're sorry. The Web address you entered is not a functioning page on out site.</p>
                <br />
                <span className='error_redirect'>
                    <ArrowRightIcon className='arrow_right'/>
                    <h4>Go to Amazon.co.za <Link className ="home_link"to ="/home">Home</Link> page</h4>
                </span>

            </span>
        </div>
    </div>
  )
}

export default NotFound
