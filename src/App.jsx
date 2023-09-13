import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ "background": "linear-gradient(to left, green, white)" }}>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
