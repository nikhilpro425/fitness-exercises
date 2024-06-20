import React from 'react'
import { Route , Routes } from 'react-router-dom';
import { Box } from '@mui/material';                // Div with shading and colors

import './App.css';
import Navbar from './components/Navbar'                // Import the components used in App
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home'

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar/>       {/*Component 1*/}
        <Routes>
            <Route path="/" element={<Home />} />           {/*Component/Page 2 contains more comp and pages*/}
            <Route path='/exercise/:id' element={<ExerciseDetail />} />     {/*Component/Page 3 */}
        </Routes>
        <Footer />
    </Box>
  )
}

export default App