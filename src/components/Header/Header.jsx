import React, { Component, Fragment } from "react";
import Nav from '../Nav'
import { userContext } from '../../context/userContext';
import './Header.css';


class Header extends Component {
  render() {
    return (
    <header className='navbar'>
      <Nav />
      <userContext.Consumer>
                    {   //Me traigo el destructuring ({user,logout}) de la const value de APP.js
                        ({user,logout}) => user.name? //si..?Aqui utilizo un ternario para mostrar u ocultar el boton logout
                                //creo un fragment contenedor invisible que no aparece en el Dom inicialmente
                                <>
                                <h3>Bienvenido a SportNews {user.name}</h3>
                                <button onClick={logout}>Logout</button>
                                </>
                                :"" //-->Else

                        //**Diferentes formas de consumir userContext.Consumer
                        //(user) => <h3>Hola Jalid eres ? {user.name}</h3>
                        //({ name }) => <h3>Hola Jalid {name}</h3>
                        // (user) => <h3>Hola Jalid {user.name}</h3>
                        // user => <h3>Hola Jalid {user.name}</h3> 

                    }
                </userContext.Consumer>
    </header>
    )
  }
}

export default Header;
