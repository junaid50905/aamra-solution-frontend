import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
//css
import './App.css'
import UserProfile from "./pages/UserProfile"
import Profile from "./pages/Profile"

const App = () => {
  

  
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
