import React, { Component } from "react";

class Form extends Component {


  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.newsTitle.value
    const description = event.target.newsDescript.value
    const date = event.target.newsDate.value
    this.props.createOneNews(title,description,date)
    
  }

  render() {
    return <div>
      <h4>Bienvenido al Form</h4>
      <h4>Crear Noticia</h4>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='newsTitle'>Titulo</label><br />
        <input type="text" name="newsTitle" id="newsTitle" /><br />
        <label htmlFor='newsDescript'>Descripcion</label><br />
        <input type="text" name="newsDescript" id="newsDescript" /><br />
        <label htmlFor='newsDate'>Date</label><br />
        <input type="date" name="newsDate" id="newsDate" /><br />
        <button>Enviar </button>
      </form>
      </div>;
  }
}

export default Form;
