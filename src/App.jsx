import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return(
    <BrowserRouter>
        <Nav/>
        <Header/>
        <Main/>  
        <Footer/>
   </BrowserRouter>
    )
}

export default App
