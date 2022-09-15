import './Navbar.scss';
import Searchbar from '../Searchbar/Searchbar';
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faChessRook, faUser, faGamepad} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

import Menu from '../Menu/Menu';

import {Link} from 'react-router-dom';

const Navbar = ({handleMenu}) => {

    // const [show, setShow] = useState(false);

    return(
        <div className='navbar navbar-static-top'>
            <a onClick={event => handleMenu()} href='#main' className='nav-button'>
                <FontAwesomeIcon icon={faBars} className='nav-button__icon'/>
                <p className='nav-button__text'>Menu</p>
                {/* {show ? <Menu/> : null} */}
            </a>
            {/* <img src={require("images/logo.png")} alt="Logo" className='navbar__logo'/>  */}
            <Link to='/'>
                <img src="/images/logo.png" alt="Logo" className='navbar__logo'/> 
            </Link>
            <Searchbar/>

            <Link to='/category/games' className='nav-link'>
                <FontAwesomeIcon icon={faChessRook} className='nav-link__icon'/>
                <p className='nav-link__text'>Games</p>
            </Link>

            <Link to='/category/consoles' className='nav-link'>
                <FontAwesomeIcon icon={faGamepad} className='nav-link__icon'/>
                <p className='nav-link__text'>Consoles</p>
            </Link>

            <Link to='/' className='nav-link'>
                <FontAwesomeIcon icon={faUser} className='nav-link__icon'/>
                <p className='nav-link__text'>Sign In</p>
            </Link>

            <CartWidget/>

        </div>
    )

}

export default Navbar;