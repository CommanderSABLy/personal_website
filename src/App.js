import React from 'react';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Quiz from './pages/psych_tests/quiz';
import About from './pages/about/about';
import Recommend from './pages/recommended_media/recommend';
import Gallery from './pages/gallery/gallery'

function App() {
    return (
        <Router>
            <div>
                <Navbar />
            </div>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/tests' element={<Quiz/>} />
                <Route path='/recommended-media' element={<Recommend/>} />
                <Route path='/gallery' element={<Gallery/>} />
            </Routes>
        </Router>
    )
}

export default App;