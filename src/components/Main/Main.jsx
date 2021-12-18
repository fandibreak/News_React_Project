import React, { Component } from "react";
import Home from '../Home'
import Form from '../Form'
import List from '../List'
import axios from "axios"
import { Route, Routes } from "react-router-dom";

class Main extends Component {

  constructor(props) {
    super(props)

    //Por Propos enviamos el estado del array de noticias al hijo list para que pinte 
    this.state = {
      //aqui guardamos el array de noticias enviadas/creadas por el FORM
      myNewsForm: []
    }
  }

  async componentDidMount() {

    const newsSports = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sport&api-key=${process.env.REACT_APP_KEYNYT}`)

    const data = newsSports.data.response.docs.slice(0, 5) //Corto en 5 listas lo que devuelve la Apy NYT

    const dataNew = data.map(e => {
      try {
        return {
          'title': e.headline.main,
          'description': e.abstract,
          'date': e.pub_date.substring(0, 10)
        } //Creo el objeto que rellenare con el form de noticias y le pasaré a list
      } catch (error) 
      {
        console.log("Info Error", error)
      }
    })

    const resultado = [...dataNew, ...this.state.myNewsForm]
    console.log(dataNew)

    this.setState({
      myNewsForm: resultado
    }) //seteo el estado de myNewsForm con el objeto : Resultado que une los arrays [datanews (llamada api NYT+Objeto Form)]

  }//Cierro componentDidMount


 // Para borrar cada lista pasada a myNewsForm/card
  deleteOne = (i) => {
    const card = this.state.myNewsForm.filter((news, j) => j !== i)
    this.setState({ myNewsForm: card })
  }

/*Para crear la noticia desde Form y que Main se la pase a Card*/

  createOneNews = (title, description, date) => {
    const newArticle = { title, description, date }
    this.setState({ myNewsForm: [...this.state.myNewsForm, newArticle] })
  }

  /*Aqui renderizo lo procesado y le paso de padre a hijo las funcuiones para que las pinte en los distintos element*/
  render() {
    return <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form createOneNews={this.createOneNews} />} />
        <Route path="/list" element={<List formMoreList={this.state.myNewsForm} deleteOne={this.deleteOne} callasync={this.componentDidMount} />} />
      </Routes>
    </main>;
  }
}

export default Main;
