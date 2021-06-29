import React from 'react'
import Image from '../../../assets/images/Github.png'
import './styles.css'

const Github = () => (
    <a
        target='__blank'
        href='https://github.com/DustinCraig/'
        className='social-icon'
    >
        <img src={Image} alt='Github' />
    </a>
)
export default Github
