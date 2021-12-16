import React, { Component } from "react";
import  "./Card.css";


export class Card extends Component {

  render () {
    const {abstract}= this.props.news
    
  return (
    <div>
        <div id='news'>
          <h2>Titulo</h2>
          <p>{abstract}</p>
          <h2>multimedia</h2>
          {/* <p>{multimedia[0].url}</p>
          <img src={multimedia[0].url}/> */}
          {/* //<img src={newsSport.abstract.multimedia[0].url}/> */}
          <h2>Aqui Va el Card</h2>
          <button onClick={this.props.deleteOne} > Borrar Noticia</button>
          </div>
    </div>
  );
};
} 

export default Card;