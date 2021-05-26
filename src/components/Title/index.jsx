import React from 'react' 
import Github from './Socials/Github'
import LinkedIn from './Socials/LinkedIn'
import './styles.css'

const Title = ({ text, underLine = true }) => (
    <>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', flexBasis: '100%', justifyContent: 'space-between' }}>
            <h1 className='title'>{text}</h1>
            <div style={{ alignSelf: 'flex-end' }}>
                <Github />
                <LinkedIn />        
            </div>
        </div>
        
        {underLine ? (
            <div className='underline-container'>
                <hr className='underline' />
            </div>
        ) : (
            <></>
        )}
    </>
)

export default Title