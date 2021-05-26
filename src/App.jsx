import './App.css'
import Home from './pages/Home'
import Container from 'react-bootstrap/Container'

//https://colorswall.com/palette/904

function App() {
    return (
        <Container className='container'>
            <div className='content'>
                <Home />
            </div>
        </Container>
    )
}

export default App
