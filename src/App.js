import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Quiz from './pages/psych_tests/quiz';
import About from './pages/about/about';
import Recommend from './pages/recommended_media/recommend';
import Gallery from './pages/gallery/gallery';
import Contact from './pages/contact/contact';
import Contacted from './pages/contact/contacted';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatgpt from './pages/ChatGPT/chatgpt';

function App() {
    return (
        
        <Router>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/on-chat-gpt' element={<Chatgpt />} />
                    <Route path='/scales' element={<Quiz/>} />
                    <Route path='/recommended-media' element={<Recommend/>} />
                    <Route path='/gallery' element={<Gallery/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/contact-email-sent' element={<Contacted/>} />
                </Routes>
                <div className="foot">
                    <Footer/>
                </div>
            </div>
        </Router>
    )
}

export default App;