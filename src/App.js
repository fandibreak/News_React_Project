import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext';

function App() {

  const [user, setUser] = useState({ name: "" }) //Llamada a una funcion
  // Valor inicial de user vacio o name:"JuanPedro" equivalente a this.state ={ user= ''}
  // devuelve un array con user/objeto y prepara el set del estado =''
  const login = name => setUser({ name }) //Cambia el estado con un nuevo nombre
  const logout = () => setUser({ name:"" }) //Vacia el nombre con funcio set
  

  const value = {
    user,
    login,
    logout
    //Claves del objeto : user,login,logout
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={value}>
        <Header />
        <Main />
        </userContext.Provider>
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <Footer/>
    </div>
  );
}

export default App;
