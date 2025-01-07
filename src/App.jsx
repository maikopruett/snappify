import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main/Main'
import Nav from './Nav/Nav'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
