import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Films from './components/Films';
import Contact from './components/Contact';
import Home from './components/Home';
import Series from './components/Detail';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/series' element={<Series/>}></Route>
        <Route path='/films' element={<Films/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
