import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Container from 'react-bootstrap/Container'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

//https://colorswall.com/palette/904

function App() {
    return (
        <Router>
            <Container className='container'>
                <div className='content'>
                    <Title text={'Dustin Craig'} />
                    <Subtitle text={'Software Engineer'} />
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                </div>
            </Container>
        </Router>
    )
}

export default App
