import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { authContext } from './contexts/authcontext';
import { useLocalStorage } from './hooks/loginhook';
import {Logout} from './components/Logout';
import { Create } from './components/Create';
import { Profile } from './components/Profile';
import { ProfileCards } from './components/ProfileCards';
import { Nopage } from './components/Nopage';


function App() {
  const [authenticate, setauthenticate] = useLocalStorage('auth',{})
  
  const loginfunc = (data)=>{
    setauthenticate(data)
  }

  const logoutfunc = ()=>{
    setauthenticate({})
  }

  
  
  return (
    <div className="App">

    <Navbar/>

    <authContext.Provider value={{loginfunc,logoutfunc, user:authenticate}}>
      
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/create" element ={<Create/>}/>
      <Route path="/profile/:userId" element={<Profile/>}/>
      <Route path="/profile/:userId/offers" element={<ProfileCards/>}/>
      <Route path="/404" element={<Nopage/>}/>
    </Routes>

    </authContext.Provider>
    <Footer/>


    </div>

  );
}

export default App;
