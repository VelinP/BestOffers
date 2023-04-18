import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';


function App() {
  return (
    <div className="App">

    <Navbar/>

    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>

    <Footer/>


    </div>

  );
}

export default App;
