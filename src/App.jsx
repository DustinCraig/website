import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Container from 'react-bootstrap/Container'
import Navbar from './components/Navbar'
import Subtitle from './components/Subtitle'
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

//https://colorswall.com/palette/904

function App() {
    return (
        <Router>
            <Container className="container">
                <div className="content">
                    <Navbar text={'Dustin Craig'} />
                    <Route exact path="/" component={About} />
                    {/* <Route path='/about' component={About} /> */}
                </div>
            </Container>
        </Router>
    )
}

export default App
