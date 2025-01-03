import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main/Main'
import Nav from './Nav/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Main/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
