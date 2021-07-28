import React from 'react'
import { withRouter } from 'react-router-dom'
import Github from './Socials/Github'
import LinkedIn from './Socials/LinkedIn'
import './styles.css'

const Navbar = ({ text, underLine = true, history, location }) => {
    console.log('location ', location)
    return (
        <>
            {location.pathname === '/' && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        flexBasis: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <h1 className='title'>Dustin Craig</h1>
                    <div style={{ alignSelf: 'flex-end' }}>
                        <Github />
                        <LinkedIn />
                    </div>
                </div>
            )}

            {location.pathname === '/about' && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        flexBasis: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <h1 className='title'>About me</h1>
                </div>
            )}

            {underLine ? (
                <div className='underline-container'>
                    <hr className='underline' />
                </div>
            ) : (
                <></>
            )}

            <Subtitle text={'Software Engineer'} />
        </>
    )
}

export default withRouter(Navbar)
