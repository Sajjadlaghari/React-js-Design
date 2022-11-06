import './App.css';
// import Home from './pages/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={ <SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/about' element={<About /> } />
      <Route path='/contact' element={<Contact /> } />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
