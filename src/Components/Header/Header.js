import React from 'react';

import './Header.css'
import { AiFillShop } from "react-icons/ai";
import { AiTwotoneShopping } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    return (
        <header className="header" >
                <div className="header-logo">
                
                      <h2 className='header-logoTitle'><AiFillShop className='header-logoImage'/>eShop</h2>
                </div>

                <div className="header-search">
                    <input type="text" name= "search" className='header-searchInput' />
                    <AiOutlineSearch className='header-searchIcon'/>
                </div>

                <div className="header-nav"> 
                     <div className="nav-item">
                        <span className='nav-itemlineOne'>Hello Guest</span>
                        <span className='nav-itemlineTwo'>Sign in</span>
                     </div>

                     <div className="nav-item">
                        <span className='nav-itemlineOne'>Your</span>
                        <span className='nav-itemlineTwo'>Shop</span>
                     </div>

                    <div className="nav-item">
                        <span><AiTwotoneShopping className='nav-itemlineTwo nav-itemBasket'/></span>
                        <span className='nav-itemlineOne nav-Basketcount'></span>
                    </div>
                </div>
        </header>
    );
}

export default Header;