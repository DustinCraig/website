import './App.css'
import Landing from './components/Landing'
import Container from 'react-bootstrap/Container'

//https://colorswall.com/palette/904

function App() {
    return (
        <Container className='container'>
            <div className='content'>
                <Landing />
                <p>Test</p>
            </div>
        </Container>
    )
}

export default App
