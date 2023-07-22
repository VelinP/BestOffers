import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { authContext } from './contexts/authcontext';
import {useLocalStorage} from './hooks/loginhook.js'
import {Logout} from './components/Logout';
import { Create } from './components/Create';
import { Profile } from './components/Profile';
import { ProfileCards } from './components/ProfileCards';
import { Nopage } from './components/Nopage';
import { PrivateRoute } from './components/PrivateRoute';
import { AllOffers } from './components/AllOffers';
import { Details } from './components/Details';
import { Delete } from './components/Delete';

function App() {
  const [authenticate, setauthenticate] = useLocalStorage('auth',{})
  
  const loginfunc = (data)=>{
      if(data){
        setauthenticate(data)

      }else{
        console.log("fix ur server")
      }
  }

  const logoutfunc = ()=>{
    setauthenticate({})
  }

  
  
  return (
    <div className="App">


    <authContext.Provider value={{loginfunc,logoutfunc, user:authenticate, setauthenticate}}>
    
    <Navbar user={authenticate}/>

    <Routes>
      {/* Guarded routes */}

      <Route element={<PrivateRoute/>}>
        <Route path="/profile/:useremail" element={<Profile/>}/>
        <Route path="/profile/:useremail/offers" element={<ProfileCards/>}/>
        <Route path="/create" element ={<Create/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/offers/:id/details/delete" element={<Delete/>}/>
      </Route>
       {/* Guarded routes */}

      <Route path="/" element={<Main/>}/>
      <Route path="/alloffers" element = {<AllOffers/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/404" element={<Nopage/>}/>
      <Route path="/offers/:id/details" element={<Details/>}/>
    </Routes>

    </authContext.Provider>


    </div>

  );
}

export default App;
