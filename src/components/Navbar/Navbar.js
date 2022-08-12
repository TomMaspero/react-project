import './Navbar.scss';
import Searchbar from '../Searchbar/Searchbar';
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faChessRook, faUser, faGamepad} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    // const changeColor = () => {
    //     return(
    //         console.log()
    //     )
    // }

    return(
        <div className='navbar'>
            <a className='nav-link' href='#'>
                <FontAwesomeIcon icon={faBars} className='nav-link__icon'/>
                <p className='nav-link__text'>Menu</p>
            </a>
            {/* <img src={require("images/logo.png")} alt="Logo" className='navbar__logo'/>  */}
            <img src="images/logo.png" alt="Logo" className='navbar__logo'/> 
            <Searchbar/>

            <a href='#' className='nav-link'>
                <FontAwesomeIcon icon={faChessRook} className='nav-link__icon'/>
                <p className='nav-link__text'>Games</p>
            </a>

            <a href='#' className='nav-link'>
                <FontAwesomeIcon icon={faGamepad} className='nav-link__icon'/>
                <p className='nav-link__text'>Consoles</p>
            </a>

            <a href='#' className='nav-link'>
                <FontAwesomeIcon icon={faUser} className='nav-link__icon'/>
                <p className='nav-link__text'>Sign In</p>
            </a>

            <CartWidget/>

        </div>
    )

}

export default Navbar;