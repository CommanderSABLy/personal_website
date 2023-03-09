import React from 'react';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Quiz from './pages/psych_tests/quiz';
import About from './pages/about/about';

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
            </Routes>
        </Router>
    )
}

export default App;