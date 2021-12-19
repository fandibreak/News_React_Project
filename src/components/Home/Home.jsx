import React, { Component } from "react";
import { userContext } from '../../context/userContext';
import './Home.css'


class Home extends Component {

  static contextType = userContext

  constructor(props) {
    super(props)
    this.state = React.createRef(); //Creamos la referencia
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value // se rellena por referencia
    console.log('***************')
    console.log(name)
    this.setState({ name })

    const { login } = this.context
    //Aqui voy a consumir user,login,logout de context importado de APP
    //Invocamos a login por provider : cambiar contexto
    login(name);
  }


  render() {
    return <div>
      <h4>Estas en la Home de SportNews</h4>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nombre:</label><br /><br />
        <input type="text" id="name" name="name" ref={this.name} /><br />
        <input type="submit" value="Login" />
      </form>
    </div>;
  }
}

export default Home;
