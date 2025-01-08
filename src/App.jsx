import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main/Main'
import Nav from './Nav/Nav'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/portfolio' element={ <Portfolio/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
