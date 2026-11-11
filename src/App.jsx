import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Login from './pages/Login'
import Register from './pages/Register'
import CollectionDetails from './pages/CollectionDetails'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="collection/:type" element={<CollectionDetails />}></Route>
      </Route>
      <Route path="get-started" element={<GetStarted />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>

    </Routes>
  )
}

export default App