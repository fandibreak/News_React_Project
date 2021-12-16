import React, { Component } from "react";
import axios from "axios"
import Card from "./Card/Card";


class List extends Component {

  constructor(props) {
    super(props);

    this.state = { newsSports: [] };

  }

  async componentDidMount() {

    const newsSports = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sport&api-key=${process.env.REACT_APP_KEYNYT}`)
    const data = newsSports.data.response.docs.slice(0,2)
    console.log(data)

    const dataNew = data.map(e => {
      return {
         'title' :e.headline.main,
         'description': e.abstract,
         'date' : e.pub_date.substring(0,10)
      }
    })

    const resultado = [...dataNew,...this.props.giveData]
    console.log(dataNew)


    this.setState({
      newsSports: resultado
    })

  }//Cierro componentDidMount


  paintNews = () => {

    return this.state.newsSports.map((card, i) => <Card news={card} deleteOne={() => this.deleteOne(i)} key={i} />)
  }

  deleteOne = (i) => {
    const card = this.state.newsSports.filter((news, j) => j !== i)
    this.setState({ newsSports: card })
  }

  render() {
    return <div> {this.paintNews()} </div>
  }
}







export default List;
