import React from 'react'
import Image from '../../../assets/images/Linkedin.png'
import './styles.css'

const LinkedIn = () => (
    <a
        className='social-icon'
        target='__blank'
        href='https://www.linkedin.com/in/dustin-craig-390b68159/'
        style={{ margin: 10 }}
    >
        <img src={Image} alt='LinkedIn' />
    </a>
)
export default LinkedIn
