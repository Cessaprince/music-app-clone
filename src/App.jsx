import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Login from './pages/Login'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="get-started" element={<GetStarted/>}></Route>
      <Route path="login" element={<Login/>}></Route>
    </Routes>
  )
}

export default App