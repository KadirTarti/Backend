
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/home/Home'

const AppRouter = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter


