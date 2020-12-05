import React, { Component } from 'react';
import axios from 'axios';
import Songitem from './Songitem'


/*const Songitem=props => (
    <div style={this.getStyle()}>
     {props.song.name}
    </div>
)*/

export default class songlist extends Component {
    constructor(props){
        super(props);
        this.state={songs:[]};
    }

    

    componentDidMount() {
        axios.get('http://localhost:5000/dashboard/lib')
          .then(response => {
            this.setState({ songs: response.data })
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
      }

    render() {
        return this.state.songs.map((currentsong) => (
            <Songitem key={currentsong._id} song={currentsong} />
          ));
        }
    }
