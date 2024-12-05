import './App.css'
import { Appointments } from './views/appointments/Appointments'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Loggin from './views/login/Login'
import Register from './views/register/Register'
import { Home } from './views/home/Home'
import { Footer } from './views/home/Footer'
import { Contact } from './views/about/Contact'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Loggin/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/appointment' element={<Appointments/>}/>
       <Route path='/Contact' element={<Contact/>}/>
      </Routes>      
     <Footer/>
    </>
  )
}

export default App
