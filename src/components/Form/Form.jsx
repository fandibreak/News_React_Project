import React, { Component } from "react";
import { Navigate } from 'react-router-dom'
import './Form.css'

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirect: null
    }//Genero el redirect con el thisState {redirect : null} Luego con el evento de handelsubmit lo paso a true

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.newsTitle.value
    const description = event.target.newsDescript.value
    const date = event.target.newsDate.value
    this.props.createOneNews(title, description, date)
    this.setState({ redirect: true });
    // Cuando pase este evento seteo el estado de redirect a true para despues del render me envie a List
  }


  render() {

    const { redirect } = this.state; //Destructuring 

    if (redirect) { //Si redirect es True, continua y redirecciona
      return <Navigate to='/list' />;
    }


    return <div>
      <h4>Bienvenido al Form de Noticias</h4>
            <h4>Crear Noticia</h4>
            <div className="superform">
              <div className="divform" >
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor='newsTitle'>Titulo</label><br /><br />
                  <input type="text" name="newsTitle" id="newsTitle" required /><br /><br />
                  <label htmlFor='newsDescript'>Descripcion</label><br />
                  <p><textarea name="newsDescript" placeholder="Escribe aqui la descripcion de la noticia" required></textarea></p>
                  <label htmlFor='newsDate' required>Date</label><br /><br />
                  <input type="date" name="newsDate" id="newsDate" /><br /><br />
                  <button >Crear Noticia </button>
                </form>
              </div>
            </div>
          </div>;
  }
}

export default Form;
