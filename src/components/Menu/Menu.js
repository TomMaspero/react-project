import './Menu.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShop, faXmark} from '@fortawesome/free-solid-svg-icons';
// import {useState, useEffect} from 'react';

const Menu = ({handleMenu}) => {



    return (
        <div className='menu'>
            <div onClick={event => handleMenu()} className="modal">
            </div>
            <nav className='hamb-menu'>
                <div className='hamb-menu__top'>
                    <p className='hamb-menu__top--title'>Menu</p>
                    <button onClick={event => handleMenu()} className='hamb-menu__top__close'><FontAwesomeIcon className='hamb-menu__top__close--icon' icon={faXmark}/></button>
                </div>
                <Link to='/' className='hamb-store'>
                    <div className='hamb-store__left'>
                        <p className='hamb-store__left--name'>Ross Henderson Shopping Center - GameStop</p>
                        <p className='hamb-store__left--time'>Open until 9:00 PM</p>
                    </div>
                    <div className='hamb-store__right'>
                        <FontAwesomeIcon className='hamb-store__right--icon' icon={faShop}/>
                    </div>
                </Link>
                <span className='hamb-separator'></span>
                <p className='hamb-menu--subtitle'>Shop by Category</p>
                <ul className='hamb-menu__list'>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Video Games</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Consoles {'&'} Hardware</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Gaming Accesories</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>PC</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Electronics</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Collectibles</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Toys {'&'} Games</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Home</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Clothing</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link' style={{fontWeight:'bold', color:'red'}}>Deals</Link>
                    </li>

                </ul>
                <span className='hamb-separator'></span>
                <p className='hamb-menu--subtitle'>Support</p>
                <ul className='hamb-menu__list'>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Contact us</Link>
                    </li>
                    <li className='hamb-menu__list--li'>
                        <Link to='/' className='hamb-link'>Frequently Asked Questions</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;