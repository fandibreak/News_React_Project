import React, { Component } from "react";
import  "./Card.css";


export class Card extends Component {

  render () {
    const {title,description,date}= this.props.news
    
  return (
    <div id="supnews">
        <div id='news'>
          <h3>Titulo</h3>
          <p>{title}</p>
          <h3>Description</h3>
          <p>{description}</p>
          <h3>Fecha de Publicacion</h3>
          <p>{date}</p>
          <button onClick={this.props.deleteOne}>Borrar Noticia</button>
          </div>
    </div>
  );
};
} 

export default Card;