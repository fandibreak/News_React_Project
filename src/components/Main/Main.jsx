import React, { Component } from "react";
import Home from '../Home'
import Form from '../Form'
import List from '../List'
import { Route, Routes } from "react-router-dom";

class Main extends Component {

  
  constructor(props) {
    super(props)
    
        //Por Propos enviamos el estado del array de noticias al hijo list para que pinte 
    this.state = {
        //aqui guardamos el array de noticias enviadas/creadas por el FORM
         myNewsForm : []
    }
}



createOneNews = (title,description,date) => {
  const newArticle = {title,description,date}
  this.setState({ myNewsForm: [...this.state.myNewsForm, newArticle] })
}

  render() {
    return <main>
      <Routes>
         <Route path="/" element ={<Home/>} />
         <Route path="/home" element ={<Home/>} />
          <Route path="/form" element ={<Form createOneNews={this.createOneNews}/>} />
          <Route path="/list" element ={<List giveData={this.state.myNewsForm}/>} />
      </Routes>
    </main>;
  }
}

export default Main;
