import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';
import {Box} from '@mui/material'
function App() {
  return (
    
        <Box width="400px" sx={{width:{xl: '1488px'}}}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/exercise/:id' element={<ExerciseDetails/>} />
            </Routes>
            <Footer />
        </Box>
    
  );
}

export default App;
