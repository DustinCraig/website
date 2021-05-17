import Jumbotron from 'react-bootstrap/Jumbotron'
import Title from '../Title'
import Subtitle from '../Subtitle'
import './styles.css'

const Landing = () => {
    return (
        <Jumbotron className='jumbotron'>
            <Title text={'Dustin Craig'} />
            <Subtitle text={'Passionate Software Engineer'} />
        </Jumbotron>
    )
}

export default Landing
