import React, { Component } from "react";
import axios from "axios"
import Card from "./Card/Card";

class List extends Component {

  constructor(props){
      super(props);

      this.state = { newsSports : [] };

    }

  async componentDidMount () {

  const newsSports = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sport&api-key=ssshM3tQSmYSqYCXCtET2wPQB5gi9was")
    const data = newsSports.data.response.docs
    console.log(data)
    this.setState({
      newsSports:data.slice(0,2)
                   })
    }//Cierro componentDidMount


    paintNews = () => {

      return this.state.newsSports.map((card,i) => <Card news = {card} key={i}/> )
    }   

    deleteOne = (i) => {
      const card = this.state.newsSports.filter((news,j)=>j!==i)
      this.setState({newsSports:card})
      }
  
    render() {
    return <div> {this.paintNews()} </div>
  }
}







export default List;
