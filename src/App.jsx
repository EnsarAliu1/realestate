import { Route, Routes } from "react-router"
import "./styles/global.css"
import Dashboard from "./pages/Dashboard"
import Properties from "./pages/Properties"
import MyProperties from "./pages/MyProperties"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import AddProperty from "./pages/AddProperty"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/my-properties" element={<MyProperties />} />
      <Route path="/add-property" element={<AddProperty />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
