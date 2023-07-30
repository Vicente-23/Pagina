import React, { useState } from 'react'
import DropDown from './DropDown'
import Button from './Button'
import { Link } from 'react-router-dom'
import '../pages/Navbar.css'
import { FaWhatsapp } from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const changeClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const onMouseEnter = () => { setDropdown(true) }
    const onMouseLeave = () => { setDropdown(false) }
    return (<>
        <section>
            <nav className="navbar">
                <Link to='/'>  </Link>
                <div className="menu-icon" onClick={changeClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </div>
                <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>
                    <li className='nav-items'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}> Home </Link>
                    </li>
                    <li className='nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                        <Link className='nav-links' onClick={closeMobileMenu}> Servicios <i className='fas fa-caret-down' />
                            {dropdown && <DropDown />}
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link target='_blank' to="https://wa.me/+528115448285?text=Necesito%informacion" className='nav-links-button' onClick={closeMobileMenu}>Informacion  por whatsapp < FaWhatsapp /></Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </section>

    </>)
} export default Navbar;