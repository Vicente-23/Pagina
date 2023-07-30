import React from 'react';
import './button.css'
import { FaWhatsapp } from 'react-icons/fa';
function Button() {

    const openInNewTab = url => {
        window.open(url, '_blank','noreferrer,noopener');
    }
    return (<>
        <button className='btn-dark' onClick={() => openInNewTab('https://api.whatsapp.com/send?phone=+528115448285&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20')}>
            Informacion  por whatsapp
            < FaWhatsapp />
        </button>

    </>)
} export default Button