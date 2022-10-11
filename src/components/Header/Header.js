import React from 'react';
import { Link } from 'react-router-dom';
import"./Header.css";
const Header = () => {
    return (
        <div className='HeaderContainer'>
            <div className='headerTitle '>
            <img src='#' alt="" />
                <h4 className='Navheading'>QuizMania</h4>
            </div>
            <div className='menu-iteam'>
                <Link to='/'>Home</Link>
                <Link to='/statistic'>Statistic</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>

            </div>
        </div>
    );
};

export default Header;