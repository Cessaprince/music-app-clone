import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import LibraryDetails from './components/LibraryDetails.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/collection/tracks' element={<LibraryDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
