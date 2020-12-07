import React, { Component } from "react";
import axios from 'axios';
export default class Play extends Component {

    constructor(props){
        super(props);
        this.state={songname:" "};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/dashboard/lib/'+ this.props.match.params.id)
          .then(response => {
            this.setState({ songname: response.data });
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      }

  render() {
    return (
       <div>
         <h2>{this.state.songname.name}</h2>
        <audio src={this.state.songname.url} controls autoPlay />
      </div>
    )
  }
}