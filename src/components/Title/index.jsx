import './styles.css'

export default ({ text, underLine = true }) => (
    <>
        <h1 className='title'>{text}</h1>
        {underLine ? (
            <div className='underline-container'>
                <hr className='underline' />
            </div>
        ) : (
            <></>
        )}
    </>
)
