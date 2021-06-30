import Jumbotron from 'react-bootstrap/Jumbotron'
import Title from '../Title'
import Subtitle from '../Subtitle'
import Scene from '../Scene'
import './styles.css'

const Landing = () => {
    return (
        <Jumbotron className='jumbotron'>
            <Scene />
        </Jumbotron>
    )
}

export default Landing
