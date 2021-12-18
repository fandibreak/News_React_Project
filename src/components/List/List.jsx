import React, { Component } from "react";
import Card from "./Card/Card";


class List extends Component {


//Esta funcion devuelve accediendo por propos a form+List que viene de padre/main y se la envia a Card hijo (sibling to sibling)
  
  paintNews = () => {

   return this.props.formMoreList.map((card, i) => <Card news={card} deleteOne={() => this.props.deleteOne(i)} key={i} />)

  }


  render() {
    return <div> {this.paintNews()} </div>
  }
}




export default List;
