import React from 'react'
import './style.css'
import { FaWhatsappSquare } from 'react-icons/fa'
const mensaje = () => {
    return (
        <div className='float'>
            <a target='_blank, noreferrer, noopener' href='https://api.whatsapp.com/send?phone=+528115448285&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20' >
                <FaWhatsappSquare color="Green" />
            </a>
        </div>


    )
}

export default mensaje